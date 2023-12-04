"use client";
import { useState, useEffect, useLayoutEffect, useCallback } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";


const EmployerDashboard = ({ params }: { params: { slug: string } }) => {
  const [ID, setID] = useState("1");
  const [isIDLoaded, setIsIDLoaded] = useState(false);
  const [participationRate, setRate] = useState(54.89);

  useEffect(() => {
    async function getID() {
      try {
        const res = await fetch("/api/getID/" + params.slug);
        if (!res.ok) {
          throw new Error("Failed to fetch ID");
        }
        const idData = await res.json();
        setID(idData.ID);
      } catch (error) {
        console.error("Error fetching ID:", error);
        // Handle error as needed
      }
    }

    getID();
  }, [params.slug]);

  const renderChart = useCallback(async (elementID: string, chartID: string, filterName: string) => {
    let domchart = document.getElementById(elementID)
    if (!domchart) return;
    const sdk = new ChartsEmbedSDK({
      baseUrl: "https://charts.mongodb.com/charts-project-0-virfw"
    });

    const chart = sdk.createChart({
      "chartId": chartID
    });

    await chart.render(domchart);

    chart.setFilter({ [filterName]: +ID });
  }, [ID]);

  useEffect(() => {
    renderChart("chart", "656d15bb-96af-44f0-86ae-c9852122806d", "ID");
    renderChart("ars", "656d101a-0551-44e8-8681-8f652d52cdf2", "AccountID");
    // Render chart for tab 3 only when the tab is selected
  });

  return (
    <div className="flex flex-col h-screen bg-white px-[10%] py-[2%] text-black text-clip overflow-scroll">
      <div className="flex flex-col h-auto">
        <div className="flex items-end text-black text-2xl font-bold mb-[2%]">
          <p>{params.slug}&apos;s Adaptability and Resilience Overview</p>
        </div>
        <div className="flex flex-row text-left w-full items-end">
          <h1 className="text-xl font-bold font-serif text-black">
            {params.slug}&apos;s AR Score
          </h1>
          <p className="ml-[3%] text-xs font-bold font-serif text-gray-500 text-center">
            What&apos;s an AR Score?
          </p>
        </div>
      </div>
      <div className='flex flex-row w-full h-[50%]'>
        <div className="h-full w-[30%] my-[2%] flex flex-col shadow-lg rounded-lg">
          <div className="flex-1 flex justify-center items-center p-4">
            <p className="flex items-baseline font-serif">
              <span className="text-6xl font-bold mr-2 text-teal-500">98</span>
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
      <div className="flex flex-row w-full h-[50%] mt-[2%]">
        <Tabs.Root
          className="flex flex-col w-full shadow-[0_2px_10px] shadow-blackA2"
          defaultValue="tab1"
        >
          <Tabs.List className="shrink-0 flex border-b border-mauve6" aria-label="Manage your account">
            <Tabs.Trigger
              className="bg-white px-10 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black outline-none cursor-default"
              value="tab1"
            >
              Overall Participation
            </Tabs.Trigger>
            <Tabs.Trigger
              className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black outline-none cursor-default"
              value="tab2"
            >
              Learning Progress
            </Tabs.Trigger>
            <Tabs.Trigger
              className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black outline-none cursor-default"
              value="tab3"
              onClick={() => renderChart("badges", "656d15bb-96af-44f0-86ae-c9852122806d", "ID")}
            >
              Social Engagement
            </Tabs.Trigger>
            <Tabs.Trigger
              className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black outline-none cursor-default"
              value="tab4"
            >
              Self-Reported Information
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content
            className="grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
            value="tab1"
          >
            <div className='flex flex-row h-[100%] w-full font-bold'>
              <div className='flex flex-col h-full w-[40%] p-4'>
                <h1 className="text-xl text-black ml-[2%]">
                  Organizational Engagement
                </h1>
                <div className='flex flex-col bg-[#E5ECED] rounded-lg justify-center items-center h-full w-full m-[2%]'>
                  <h1 className="text-lg text-black">
                    Overall Participation Rate
                  </h1>
                  <span className="text-6xl font-bold mr-2 text-teal-500">{participationRate}</span>
                </div>
              </div>
              <div className='flex flex-col h-[100%] w-[60%] p-4 ml-[2%]'>
                <h1 className="text-xl text-black ml-[2%]">
                  Individual Participation
                </h1>
                <div className='flex flex-row m-[2%] h-full w-full '>
                  <div className='flex flex-col bg-[#E5ECED] rounded-l-lg justify-center items-center h-full w-full'>
                    <h1 className="text-lg text-black text-center">
                      Overall User Engagement Score
                    </h1>
                    <span className="text-6xl font-bold mr-2 text-teal-500">84%</span>
                  </div>
                  <div className='flex flex-col bg-[#E5ECED] rounded-r-lg justify-center items-center h-full w-full ml-[1px]'>
                    <h1 className="text-lg text-black text-center">
                      1 Video Watched Per Day Streak
                    </h1>
                    <h1 className="text-lg text-black">
                      <span className="text-6xl font-bold mr-2 text-teal-500">84%</span>

                    </h1>
                  </div>
                </div>

              </div>
            </div>
          </Tabs.Content>
          <Tabs.Content
            className="grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
            value="tab2"
          >
          </Tabs.Content>
          <Tabs.Content
            className="grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
            value="tab3"
          >
            <div id="badges" className="w-full h-full" />
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </div>
  );

};

export default EmployerDashboard;