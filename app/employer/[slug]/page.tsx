"use client";
import React from 'react';
import {useEffect} from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
// import LineChartComponent from '@/components/line-chart';
// import { LineChart, Brush, XAxis, YAxis, CartesianGrid, Tooltip, Line, Legend} from 'recharts'; 
import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";

// interface LineChartProps {
//   data:Array<{
//       time: string;
//       ARScore: number;
//   }>;
// }





const EmployerDashboard = ({ params }: { params: { slug: string } }) => {

    async function renderChart(slug: string | string[] | undefined) {
      let domchart = document.getElementById("chart")
      if (!domchart) return;
      const sdk = new ChartsEmbedSDK({
        baseUrl: "https://charts.mongodb.com/charts-project-0-virfw"
      });

      const chart = sdk.createChart({
        chartId: "656d15bb-96af-44f0-86ae-c9852122806d"
      });
      await chart.render(domchart);
      chart.setFilter({ "Name": slug });
    }
 useEffect(() => { 
    renderChart(params.slug);
  }, [params.slug]);
return (
  <div className="h-screen bg-white overflow-auto flex flex-col items-center">
     <div className="w-11/12 h-full mt-4 border border-black rounded-lg p-4">
       <div id="chart" className = "w-full h-full" />
     </div>
    
      <div className="flex flex-row gap-4">
        <div className="flex-2 flex flex-col justify-between">
          <div className="text-left w-full">
            <h1 className="text-2xl font-bold font-serif text-black">
              CodeLab&apos;s BAR Score
            </h1>
            <p className="text-xs font-bold font-serif text-gray-500">
              What&apos;s a BAR Score?
            </p>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <p className="flex items-baseline font-serif">
              <span className="text-6xl font-bold mr-2 text-teal-500">56</span>
              <span className="text-2xl text-black "> out of 100</span>
            </p>
          </div>
        </div>

        <div className="flex-1 flex justify-center items-center bg-white">
          {/* <div className="w-full h-[50vh] p-4">
            <LineChartComponent data={data} />
          </div> */}
        </div>
      </div>
    {/* </div> */}

    <div className="w-10/12 mt-4 flex flex-row gap-4 pt-5">
     <div className="flex-1 flex flex-col justify-between border border-black rounded-lg p-4">
       <div className="text-center w-full h-20">
        <h1 className="text-2xl font-bold font-serif text-black">
          Trending Scores
        </h1>
      </div>

    </div>
     
      <div className="flex-1 flex flex-col border border-black rounded-lg p-4">
        <div className="text-center w-full mb-4">
          <h1 className="text-2xl font-bold font-serif text-black">
            View Employees
          </h1>
        </div>
        <div className="flex items-center">
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search Employees"
            InputProps={{
              endAdornment: (
                <IconButton type="submit" aria-label="search">
                  <SearchIcon />
                </IconButton>
              ),
            }}
          />
        </div>
      </div>
    </div>
  </div>
);
  
};

export default EmployerDashboard;