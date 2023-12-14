import 'dotenv/config';

import { MongoClient } from "mongodb"
const mongodbURI = process.env.MONGODB_URI;


export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {

  const filter = {
    'Slug': params.slug
  };
  const projection = {
    'ID': 1
  };

  if (!mongodbURI) return;
  let client = new MongoClient(mongodbURI);
  let coll = client.db("billionminds").collection("employers");

  const cursor = coll.find(filter, { projection });
  const record = await cursor.toArray();

  if (record && record[0]) {
    return Response.json({ "ID": record[0].ID });
  }
  return Response.json({ "ID": "invalid" });
}