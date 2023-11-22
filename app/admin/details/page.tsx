'use client'
import React from 'react';
import LineChartComponent from '@/components/line-chart';
import RadarChartComponent from '@/components/radar-chart';
import StatBoxComponent from '@/components/stat-box';
import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchIcon from "@mui/icons-material/Search";
  
export default function Details() {

    const lineData = [
      {
        time: "Page F",
        ARScore: 2390,
      },
      {
        time: "Page G",
        ARScore: 3490,
      },
    ];

      const radarData = [
        {
          subject: 'Math',
          A: 120,
          B: 110,
          fullMark: 150,
        },
        {
          subject: 'Chinese',
          A: 98,
          B: 130,
          fullMark: 150,
        },
        {
          subject: 'English',
          A: 86,
          B: 130,
          fullMark: 150,
        },
        {
          subject: 'Geography',
          A: 99,
          B: 100,
          fullMark: 150,
        },
        {
          subject: 'Physics',
          A: 85,
          B: 90,
          fullMark: 150,
        },
        {
          subject: 'History',
          A: 65,
          B: 85,
          fullMark: 150,
        },
      ];

    return (
      <div className="flex flex-col bg-white p-24">
        <div className="flex flex-row justify-between">
          <Link href="/admin">
            <IconButton>
              <ArrowBackIcon />
            </IconButton>
          </Link>
          <StatBoxComponent title="Highest Score" score={84} outOf={100} />
          <StatBoxComponent title="Highest Score" score={84} outOf={100} />
          <StatBoxComponent title="Highest Score" score={84} outOf={100} />
        </div>
        <div className="bg-gradient-to-r from-grad1-start to-grad1-end my-[2%] flex flex-col shadow-lg rounded-lg overflow-hidden">
          <div className="flex items-center text-black text-xl py-[1%] ml-[5%] from-grad1-start to-grad1-end">
            <p>Chart Data</p>
          </div>
          <div className="flex flex-row items-center bg-white ">
            <div className="w-full h-[50vh] p-4">
              <LineChartComponent data={lineData} />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-grad1-start to-grad1-end flex flex-col shadow-lg rounded-lg overflow-hidden">
          <div className="flex items-center text-black text-xl py-[1%] ml-[5%] from-grad1-start to-grad1-end">
            <p>Organizational Data</p>
          </div>
          <div className="flex flex-row items-center bg-white ">
            <div className="w-full h-[50vh] p-4">
              <RadarChartComponent data={radarData} />
            </div>
          </div>
        </div>

        {/* <div className="w-[50%] h-[100%] p-4">
          <LineChartComponent data={lineData} />
        </div> */}
        {/* <RadarChartComponent data={radarData} /> */}
      </div>
    );
};

          //         {/* <div className='flex flex-row bg-grey py-[5vh] px-4 items-center'>
          // <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          //   <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          // </svg> */}
          // {/* <p className='ml-2 mb-6'>Chart Data Analysis</p>
          // <div className='flex flex-row justify-between'>
          //   <StatBoxComponent title='Highest Score' score={84} outOf={100}/>
          //   <StatBoxComponent title='Highest Score' score={84} outOf={100}/>
          //   <StatBoxComponent title='Highest Score' score={84} outOf={100}/>
          // </div> */}
          // {/* <RadarChartComponent data={radarData} /> */}