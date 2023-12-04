import path from 'path';
import 'dotenv/config';

import { MongoClient } from "mongodb"
const mongodbURI = process.env.MONGODB_URI;


function getAgg(name: string): Array<Object> {
  return [
    {
      '$project': {
        '_id': 0,
        'AccountName': {
          '$toLower': '$Name'
        },
        'AccountID': '$ID'
      }
    }, {
      '$addFields': {
        'AccountName': {
          '$replaceOne': {
            'input': '$AccountName',
            'find': ' ',
            'replacement': ''
          }
        }
      }
    }, {
      '$match': {
        'AccountName': name.toLowerCase()
      }
    }
  ]
}

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  if (!mongodbURI) return;
  let client = new MongoClient(mongodbURI);
  let coll = client.db("billionminds").collection("employers");

  const slug = params.slug.toLowerCase() // Name of Employer slug
  let record = await coll.aggregate(getAgg(slug)).toArray();

  if (record) {
    return Response.json({"ID": record[0].AccountID});
  }
  return Response.json({"ID": "invalid"});
}