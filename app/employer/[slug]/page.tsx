"use client";
import { useState, useEffect } from 'react';
import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";

function Factor(title: string, number: number) {
  return (
    <div className='flex flex-col h-full m-1'>
      <div className='flex flex-col bg-[#E5ECED] rounded-lg justify-center items-center h-full w-full m-[2%] p-3'>
        <h1 className="text-lg text-black">
          {title}
        </h1>
        <span className="text-6xl font-bold mr-2 text-teal-500">
          {number.toFixed(2)}%
        </span>
      </div>
    </div>
  )
}

function Topbar(name: string) {
  return (
    <div className="flex flex-col h-auto">
      <div className="flex items-end text-black text-2xl font-bold mb-[2%]">
        <p>{name}&apos;s Adaptability and Resilience Overview</p>
      </div>
      <div className="flex flex-row text-left w-full items-end">
        <p className="text-xs font-bold font-serif text-gray-500 text-center">
          What&apos;s an AR Score?
        </p>
      </div>
    </div>
  )
}

async function renderChart(elementID: string, chartID: string, filterName: string, employerID: string) {
  const sdk = new ChartsEmbedSDK({
    baseUrl: "https://charts.mongodb.com/charts-project-0-virfw"
  });

  const chart = sdk.createChart({
    "chartId": chartID
  });

  const domchart = document.getElementById(elementID);
  if (domchart) {
    await chart.render(domchart);
    chart.setFilter({ [filterName]: +employerID });
  }
}

const EmployerDashboard = ({ params }: { params: { slug: string } }) => {
  const [ID, setID] = useState("1");
  const [participationRate, setPRate] = useState(0);
  const [ARScore, setARScore] = useState(0);
  const [AvgEngagementScore, setAvgEngagementScore] = useState(0);
  const [AvgStreak, setAvgStreak] = useState(0);
  const [Name, setName] = useState("");
  const [load, setLoad] = useState(false);

  useEffect(() => {
    async function getEmployerData() {
      try {
        const res = await fetch("/api/getEmployerData/" + params.slug);
        if (!res.ok) {
          throw new Error("Failed to fetch ID");
        }
        const idData = await res.json();

        console.log(idData)
        setID(idData.ID);
        setPRate(idData.ParticipationRate);
        setARScore(idData.ARScore);
        setAvgEngagementScore(idData.AvgEngagementScore);
        setAvgStreak(idData.AvgStreak);
        setName(idData.Name);

      } catch (error) {
        console.error("Error fetching ID:", error);
        // Handle error as needed
      }
    }

    getEmployerData();
  }, [params.slug]);

  useEffect(() => {
    renderChart("ars", "656d101a-0551-44e8-8681-8f652d52cdf2", "AccountID", ID);
    renderChart("badges", "656d15bb-96af-44f0-86ae-c9852122806d", "ID", ID);
    renderChart("gauge", "657fc7d9-5a32-48c7-8bd6-22e1c0205f2e", "ID", ID)
    setLoad(true);
  }, [ID]);

  return load ?
    (
      <div className="flex flex-col min-h-screen bg-white px-[10%] py-[2%] text-black text-clip">

        {Topbar(Name)}

        <div className='flex flex-row w-full h-[40vh]'>
          <div className="h-full w-[30%] my-[2%] flex flex-col shadow-lg rounded-lg">
            <div className="flex-1 flex justify-center items-center p-4">
              <p className="flex items-baseline font-serif">
                <span className="text-6xl font-bold mr-2 text-teal-500">
                  {ARScore}
                </span>
                <span className="text-2xl text-black "> out of 100</span>
              </p>
            </div>
          </div>
          <div className="h-full w-[70%] ml-[2%] my-[2%] flex flex-col shadow-lg rounded-lg">
            <div className="w-11/12 h-full mt-4 border border-black rounded-lg p-4">
              <div id="ars" className="w-full h-full" />
            </div>
          </div>
        </div>

        <div className="flex flex-row text-left w-full items-end mt-[5%]">
          <h1 className="text-xl font-bold font-serif text-black">
            Factors Affecting Your Score
          </h1>
        </div>

        <div className='flex flex-row w-full font-bold justify-between h-[25vh]'>
          {Factor("Overall Participation Rate", participationRate)}
          {Factor("Overall User Engagement", AvgEngagementScore)}
          {Factor("Average Streak", AvgStreak)}
        </div>

        <div className='flex flex-row w-full space-x-[5%]'>
          <div className='flex flex-row w-full h-[50vh]'>
            <div id="badges" className="w-full h-full" />
          </div>

          <div className='flex flex-row w-full h-[50vh]'>
            <div id="gauge" className="w-full h-full" />
          </div>
        </div>
      </div>
    ) : <div></div>;
};

export default EmployerDashboard;