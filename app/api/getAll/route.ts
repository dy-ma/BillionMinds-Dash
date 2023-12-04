import 'dotenv/config';

import { MongoClient } from "mongodb"
const mongodbURI = process.env.MONGODB_URI;

const data = [
    {
      id: 1,
      name: "Maven Research",
      industry: "Technology",
      barScore: 75,
      status: "Active",
    },
    {
      id: 2,
      name: "Verinovum",
      industry: "Healthcare",
      barScore: 69,
      status: "Active",
    },
    {
      id: 3,
      name: "Tealium",
      industry: "Finance",
      barScore: 60,
      status: "Active",
    },
    {
      id: 4,
      name: "Company D",
      industry: "Education",
      barScore: 85,
      status: "Active",
    },
  ];

export async function GET() {
  if (!mongodbURI) return;
  let client = new MongoClient(mongodbURI);
  let coll = client.db("billionminds").collection("employers");

  let record = await coll.find().toArray();
  console.log(record);

  if (record) {
    return Response.json([]);
  }
  return Response.json([]);
}