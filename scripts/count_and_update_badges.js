const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../', '.env') });

const MongoClient = require('mongodb').MongoClient;
const mongodbURI = process.env.MONGODB_URI;

const agg = [
    {
        '$match': {
            'Account.ID': {
                '$ne': null
            }
        }
    }, {
        '$group': {
            '_id': '$Account.ID',
            'WellbeingCount': {
                '$sum': {
                    '$convert': {
                        'input': '$Learn.Badges.Wellbeing',
                        'to': 'int'
                    }
                }
            },
            'OrganizationCount': {
                '$sum': {
                    '$convert': {
                        'input': '$Learn.Badges.Organization',
                        'to': 'int'
                    }
                }
            },
            'MotivationCount': {
                '$sum': {
                    '$convert': {
                        'input': '$Learn.Badges.Motivation',
                        'to': 'int'
                    }
                }
            },
            'BalanceCount': {
                '$sum': {
                    '$convert': {
                        'input': '$Learn.Badges.Balance',
                        'to': 'int'
                    }
                }
            },
            'ResilienceCount': {
                '$sum': {
                    '$convert': {
                        'input': '$Learn.Badges.Resilience',
                        'to': 'int'
                    }
                }
            }
        }
    }
];

async function getBadgeCounts(client) {
    const coll = client.db('billionminds').collection('employees');
    const cursor = coll.aggregate(agg);
    const result = await cursor.toArray();
    return result;
}

// DO something
async function updateBadgeCounts(client, badgeArray) {
    const db = client.db('billionminds');
    const employersCollection = db.collection('employers');

    for (const doc of badgeArray) {
        await employersCollection.updateOne(
            { ID: doc._id },
            {
                $set: {
                    BadgeCount: {
                        Wellbeing: doc.WellbeingCount,
                        Organization: doc.OrganizationCount,
                        Motivation: doc.MotivationCount,
                        Balance: doc.BalanceCount,
                        Resilience: doc.ResilienceCount,
                    }
                }
            }
        );
    }

    console.log('Badge counts updated successfully.');
}

async function main() {
    const client = await MongoClient.connect(mongodbURI);

    try {
        const result = await getBadgeCounts(client);
        await updateBadgeCounts(client, result);
    } finally {
        await client.close();
    }
}

main()