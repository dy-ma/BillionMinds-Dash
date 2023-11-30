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
            'Active': {
                '$eq': true
            }
        }
    }, {
        '$group': {
            '_id': '$Account.ID',
            'active': {
                '$sum': 1
            }
        }
    }, {
        '$match': {
            'active': {
                '$ne': null
            }
        }
    }
];

async function getActiveCount(client) {
    const coll = client.db('billionminds').collection('employees');
    const cursor = coll.aggregate(agg);
    const result = await cursor.toArray();
    return result;
}

async function updateActiveCount(client, activeCounts) {
    const coll = client.db('billionminds').collection('employers');
    for (const doc of activeCounts) {
        await coll.updateOne({ "ID": doc._id },
            {
                $set: {
                    numActive: doc.active
                }
            });
    }
    console.log("Active counts updated successfully");
}

async function main() {
    const client = await MongoClient.connect(mongodbURI);

    try {
        let activeCounts = await getActiveCount(client);
        await updateActiveCount(client, activeCounts);
    } finally {
        await client.close();
    }
}

main()