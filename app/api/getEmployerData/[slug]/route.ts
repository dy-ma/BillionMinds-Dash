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
    'ID': 1,
    'Name': 1,
    'numActive': 1,
    'numEmployees': 1,
    'Score': 1,
    'AvgEngagementScore': 1,
    'AvgStreak': 1
  };

  if (!mongodbURI) return;
  let client = new MongoClient(mongodbURI);
  let coll = client.db("billionminds").collection("employers");

  const cursor = coll.find(filter, { projection });
  const record = await cursor.toArray();


  if (record && record[0]) {
    const id = record[0].ID;
    const numActive = record[0].numActive;
    const numEmployees = record[0].numEmployees;
    const score = record[0].Score;
    const avgEngagement = record[0].AvgEngagementScore;
    const avgStreak = record[0].AvgStreak;
    const name = record[0].Name;

    const participationRate = (numEmployees > 0)
      ? parseFloat((100 * numActive / numEmployees).toFixed(2))
      : 0

    return Response.json({ 
      "ID": id,
      "Name": name,
      "ParticipationRate": participationRate,
      "ARScore": score,
      "AvgEngagementScore": avgEngagement,
      "AvgStreak": avgStreak
    });
  }
  return Response.json({ "ID": "invalid" });
}