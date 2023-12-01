const path = require('path');
const fs = require('fs').promises;  // Use promises version for async/await
const { MongoClient } = require('mongodb');
require('dotenv').config({ path: path.resolve(__dirname, '../../', '.env') });

const BA_Key = process.env.BRILLIANT_ASSESSMENTS_KEY;

var myHeaders = new Headers();
myHeaders.append("APIKey", BA_Key);

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

async function getAllResponseIDs() {
  let response = await fetch("https://api.brilliantassessments.com/api/assessmentresponse/getchanges", requestOptions);
  let result = await response.text();
  return JSON.parse(result).ResponseIds;  // Assuming the result is in JSON format
}

async function getResponse(id) {
  let response = await fetch("https://api.brilliantassessments.com/api/assessmentresponse/getassessmentresponse/" + id, requestOptions);
  let result = await response.text();
  return JSON.parse(result);  // Assuming the result is in JSON format
}

async function getAllResponses(ids) {
  let promises = ids.map(id => getResponse(id));

  try {
    const results = await Promise.all(promises);
    return results;
  } catch (error) {
    console.error(error);
  }
}

async function main() {
  let ids = await getAllResponseIDs();
  let results = await getAllResponses(ids);

  // Write the results to a JSON file
  try {
    await fs.writeFile('output.json', JSON.stringify(results, null, 2));
    console.log('Results written to output.json');
  } catch (error) {
    console.error('Error writing to output.json:', error);
  }

  // Upload results to MongoDB (replace with your MongoDB connection logic)
  const client = new MongoClient(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  try {
    await client.connect();
    const db = client.db('billionminds');
    const collection = db.collection('assessments');
    await collection.insertMany(results);
    console.log('Results uploaded to MongoDB');
  } catch (error) {
    console.error('Error uploading to MongoDB:', error);
  } finally {
    await client.close();
  }
}

main();
