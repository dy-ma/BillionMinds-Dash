const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../', '.env') });

const MongoClient = require('mongodb').MongoClient;
const mongodbURI = process.env.MONGODB_URI;

const agg = [
    {
        $group: {
            _id: "$Account.ID",
            count: {
                $sum: 1,
            },
        },
    },
    {
        $match: {
            _id: {
                $ne: null,
            },
        },
    },
]

async function getEmployeeCount(client) {
    const coll = client.db("billionminds").collection("employees");
    const cursor = await coll.aggregate(agg);
    const result = await cursor.toArray();
    return result;
}

async function updateEmployeeCount(client, employeeCounts) {
    const coll = client.db('billionminds').collection('employers');
    for (const doc of employeeCounts) {
        await coll.updateOne({ "ID": doc.id_ },
            {
                $set: {
                    numEmployees: doc.count
                }
            })
    }
    console.log('Employee counts updated successfully.');
}

async function main() {
    const client = await MongoClient.connect(mongodbURI)
    try {
        let employeeCounts = await getEmployeeCount(client);
        await updateEmployeeCount(client, employeeCounts)
    } finally {
        await client.close()
    }
}

main()