'use client'
import React from 'react';
import LineChartComponent from '@/components/line-chart';
import RadarChartComponent from '@/components/radar-chart';
import StatBoxComponent from '@/components/stat-box';
  
export default function Details() {

    const lineData = [
        {
          "name": "Page A",
          "uv": 4000,
          "pv": 2400,
          "amt": 2400
        },
        {
          "name": "Page B",
          "uv": 3000,
          "pv": 1398,
          "amt": 2210
        },
        {
          "name": "Page C",
          "uv": 2000,
          "pv": 9800,
          "amt": 2290
        },
        {
          "name": "Page D",
          "uv": 2780,
          "pv": 3908,
          "amt": 2000
        },
        {
          "name": "Page E",
          "uv": 1890,
          "pv": 4800,
          "amt": 2181
        },
        {
          "name": "Page F",
          "uv": 2390,
          "pv": 3800,
          "amt": 2500
        },
        {
          "name": "Page G",
          "uv": 3490,
          "pv": 4300,
          "amt": 2100
        }
      ]

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
      <div className='bg-grey p-24'>
        <div className='flex flex-row justify-between'>
          <StatBoxComponent title='Highest Score' score={84} outOf={100}/>
          <StatBoxComponent title='Highest Score' score={84} outOf={100}/>
          <StatBoxComponent title='Highest Score' score={84} outOf={100}/>
        </div> 
        <LineChartComponent data={lineData}/>
        <RadarChartComponent data={radarData}/>
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