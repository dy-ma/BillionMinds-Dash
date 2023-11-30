const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../', '.env') });

const MongoClient = require('mongodb').MongoClient;
const mongodbURI = process.env.MONGODB_URI;

const agg = [
    {
        '$match': {
            'Account.ID': {
                '$ne': null
            },
            'Account.Name': {
                '$ne': null
            }
        }
    }, {
        '$group': {
            '_id': {
                'AccountID': '$Account.ID',
                'AccountName': '$Account.Name'
            }
        }
    }, {
        '$project': {
            '_id': '$_id.AccountID',
            'Name': '$_id.AccountName'
        }
    }
];


async function getUniqueAccounts(client) {
    const coll = client.db('billionminds').collection('employees');
    const cursor = coll.aggregate(agg);
    const result = await cursor.toArray();
    return result;
}

async function updateUniqueAccounts(client, accArray) {
    const coll = client.db("billionminds").collection("employers");
    for (const doc of accArray) {
        let exists = coll.findOne({ID: doc._id});
        if (!exists) {
            coll.insertOne({
                ID: doc._id,
                Name: doc.Name
            })
        }
    }
    console.log("Accounts updated successfully");
}


async function main() {
    try {
        const client = await MongoClient.connect(mongodbURI);
        await updateUniqueAccounts(client, await getUniqueAccounts());
    } finally {
        await client.close();
    }
}

main();