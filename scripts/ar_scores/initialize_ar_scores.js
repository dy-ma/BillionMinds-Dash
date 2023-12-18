const { default: next } = require('next');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../', '.env') });

const MongoClient = require('mongodb').MongoClient;
const mongodbURI = process.env.MONGODB_URI;

function generateRandomScores() {
    const startDate = new Date(); // Today's date
    startDate.setHours(0, 0, 0, 0); // Set time to midnight for accurate date comparison

    const scores = [];
    const dates = [];
    let currentScore = 10;

    for (let i = 0; i < 365; i++) {
        // Introduce occasional random decreases
        const randomChange = Math.random() < 0.2 ? -Math.random() * 5 : Math.random() * 2;

        // Update the current score with the random change
        currentScore += randomChange;

        // Ensure the score is between 5 and 100
        currentScore = Math.max(5, Math.min(currentScore, 100));

        // Create a new date object for the current day
        const currentDate = new Date(startDate);
        currentDate.setDate(startDate.getDate() + i);

        // Push the current score and date to their respective arrays
        scores.push(Math.round(currentScore)); // Round the score to the nearest integer
        dates.push(currentDate);
    }

    return { scores, dates };
}

function generateRecords(id, name, dates, scores) {
    let records = [];
    for (let i = 0; i < 365; i++) {
        let record = {
            "AccountID": id,
            "AccountName": name,
            "date": dates[i],
            "score": scores[i],
        }
        records.push(record);
    }
    return records;
}

// Example usage
async function main() {
    const { scores, dates } = generateRandomScores();
    let records = generateRecords(103, "Maven Research", dates, scores);

    const client = await MongoClient.connect(mongodbURI);
    const coll = client.db('billionminds').collection('ar_scores');

    await coll.insertMany(records);

    await client.close();
}

main()