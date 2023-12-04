import 'dotenv/config';

import { MongoClient } from "mongodb"
const mongodbURI = process.env.MONGODB_URI;


function getAgg(id: string): Array<Object> {
  return [
    {
      '$match': {
        'ID': id
      }
    }, {
      '$group': {
        '_id': null, 
        'numActive': {
          '$sum': '$numActive'
        }, 
        'numEmployees': {
          '$sum': '$numEmployees'
        }
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

  const slug = params.slug // id
  let record = await coll.aggregate(getAgg(slug)).toArray();

  if (record && record[0]) {
    return Response.json({
        "numActive": record[0].numActive,
        "numEmployees": record[0].numEmployees
    });
  }
  return Response.json({"numActive": "invalid", "numEmployees": "invalid"});
}