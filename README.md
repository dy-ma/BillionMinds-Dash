# BillionMinds Dashboard

This is a project from CodeLab UC Davis, in partnership with BillionMinds.

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Before Pushing Changes

Make sure to test the build locally and make sure there are no errors that would prevent deployment.

```bash
npm run build
# If all checks are green, then (optionally) run
npm run start
# to start a local server and check that the page looks correct
# Finally, push
```

## High Level Overview of Backend

Components of our backend

- Data Fetching with Next.js [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
- MongoDB database
- Serverless update functions

First, in lieu of a single monolithic backend server, we will use Next.js' route handler features to create API-routes in Next.js. API routes are placed in files name `route.js|ts` within the `/app` directory. 

These work the same as pages in the `/app` directory, except these routes won't have associated pages displayed on the frontend. To avoid confusion with frontend pages, we will place any routes in a `/app/api` subdirectory, with each route nested within.

These route handlers will query the MongoDB database, with API keys safely away from the frontend. These queries should be relatively simple, as MongoDB will have the data in the necessary format. 

Serverless functions running on AWS lambda, GCP Cloud Functions, or Vercel Serverless will handle 

1. Fetching data from Active Campaign, Brilliant Assessments, Typeform, Accredible, any other APIs, etc.
2. Computing averages, percentages, or any other summary statistic we will need to show in the frontend.
3. Posting the data to the MongoDB database. 

The serverless functions should run in response to a cron job set to expire every 1 day. More info on these functions is listed below.

## Updating the Database

### Storing Calculated AR Scores

```ts
{
    accountId: int;
    accountName: string;
    startDate: date;
    validThroughDate: date;
    score: float64;
}
```

- `startDate`: date of score calculation.
- `validThroughDate`: last date for which this score is valid. If score doesn't change between days, don't add a new document, just increment this date field.
- `score`: Calculated AR Score for this date range. This will likely be cast to an integer before being displayed.

### Updating Tag Fields in Database

Updating the tag fields in the database will take place in a serverless function interfacing with MongoDB. The function will be triggered by a cron job set to fire once-a-day.

Most of the AR inputs are tag fields in Active Campaign (AC).

For example

- Overall Participation Rate $= \frac{\text{Number of contacts with the tag } Status: Active}{\text{Number of Total Employees}}$

This calculation will be reused, just counting different tags. 

The general algorithm for updating the database will be as follows.

```js
funtion updateTags() {
    request tags from Active Campaign
    count results of tags in hashmap
    populate a db query
    send query to MongoDB
}
```

The hashmap should resemble this basic structure. 

```ts
{
    accountId: int;
    totalEmployeeCount: int;
    activeEmployeeCount: int;
    hasFundamentalsBadgeCount: int;
    hasWellbeingBadgeCount: int;
}
```

### Updating Engagement Score

Scores are updated separately because they are not tag fields in AC. Thus, they are queried differently.

Each contact has an engagement score on Active Campaign (AC). 

A serverless function will query the engagement scores for all contacts (employees) within an account (employer).

The function should resemble the following

```
function updateAverageEngagementScore() {
    scoreObjects = GET list of engagement scores for an organization
    average = scoreObjects.reduce((a, b) => a.engagement + b.engagement) / scoreObjects.length
    populate mongodb query
    send Mongodb query
}
```