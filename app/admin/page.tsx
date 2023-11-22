'use client'
import React, { useState, useEffect } from 'react';
import LineChartComponent from "@/components/line-chart";
import Link from "next/link";


export default function Dash() {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/arscores')
      .then(res => res.json())
      .then(data => setData(data))
  }, [])

  return (
    <div className="flex flex-col h-screen bg-white px-[10%] py-[2%] text-black text-clip overflow-hidden">
      <div className=" mx-[5%] flex flex-row h-[5%]">
        <div className="flex items-end text-black text-2xl ml-[5%] mr-[60%] font-bold">
          <p>Welcome, Admin</p>
        </div>
        {/* <div className='flex text-black text-xl mr-10 items-end'> Home </div> */}
      </div>

      <div className="h-[30%] my-[2%] flex flex-col shadow-lg rounded-lg bg-gradient-to-r from-grad1-start to-grad1-end">
        <div className="flex items-center text-black text-xl py-[1%] ">
          <p className="ml-[5%] font-raleway">Whereas Data</p>
          <div className="flex flex-row ml-[70%] bg-main-grey rounded-lg text-sm hover:bg-grey">
            <div className="flex flex-row">
              <p className='mx-[10px]'>Upload File</p>
              <svg className='mt-[1%]'
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.81825 1.18188C7.64251 1.00615 7.35759 1.00615 7.18185 1.18188L4.18185 4.18188C4.00611 4.35762 4.00611 4.64254 4.18185 4.81828C4.35759 4.99401 4.64251 4.99401 4.81825 4.81828L7.05005 2.58648V9.49996C7.05005 9.74849 7.25152 9.94996 7.50005 9.94996C7.74858 9.94996 7.95005 9.74849 7.95005 9.49996V2.58648L10.1819 4.81828C10.3576 4.99401 10.6425 4.99401 10.8182 4.81828C10.994 4.64254 10.994 4.35762 10.8182 4.18188L7.81825 1.18188ZM2.5 9.99997C2.77614 9.99997 3 10.2238 3 10.5V12C3 12.5538 3.44565 13 3.99635 13H11.0012C11.5529 13 12 12.5528 12 12V10.5C12 10.2238 12.2239 9.99997 12.5 9.99997C12.7761 9.99997 13 10.2238 13 10.5V12C13 13.104 12.1062 14 11.0012 14H3.99635C2.89019 14 2 13.103 2 12V10.5C2 10.2238 2.22386 9.99997 2.5 9.99997Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center bg-white h-full ">
          <div className="w-full h-full p-4">
            <LineChartComponent data={data} />
          </div>

          <div className="flex flex-col mr-[2%] h-[80%] w-[20%] my-[10%]">
            <div className='flex flex-row'>
              <div className="w-[10%] mt-[5%] flex bg-minty-green rounded-l-lg"></div>
              <div className="w-[90%] mt-[5%] flex bg-main-grey justify-center text-black text-sm rounded-r-lg text-center">
                <p className='font-bold text-lg'>20%&nbsp;</p>
                <p className='flex items-center'>increase in score </p>
              </div>
            </div>
            <div className='flex flex-row'>
              <div className="w-[10%] mt-[5%] flex bg-minty-green rounded-l-lg"></div>
              <div className="w-[90%] mt-[5%] flex bg-main-grey justify-center text-black text-sm rounded-r-lg text-center">
                x%
              </div>
            </div>
            <div className='flex flex-row'>
              <div className="w-[10%] mt-[5%] flex bg-minty-green rounded-l-lg"></div>
              <div className="w-[90%] mt-[5%] flex bg-main-grey justify-center text-black text-sm rounded-r-lg text-center">
                x%
              </div>
            </div>

            <Link href="/admin/details">
              <div className="mt-[5%] flex bg-green justify-center text-black text-lg rounded-md hover:bg-slate-500 text-center">
                Details
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-grad1-start to-grad1-end h-[30%] my-[2%] flex flex-col shadow-lg rounded-lg">
        <div className="flex items-center text-black text-xl py-[1%] ml-[5%] ">
          <p>Trending Scores</p>
        </div>
        <div className="flex flex-row items-center bg-white h-full">
          <div className="w-full h-full p-4">
            <LineChartComponent data={data} />
          </div>
          <div className="flex flex-col ml-[10%] h-[80%] w-[20%] my-[10%]">
            <div className="p-4 mx-[10%] flex justify-start text-lef text-black text-md rounded-md bg-grey text-center">
              Top Companies of the Month
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row">
        <div className="bg-gradient-to-r from-grad1-start to-grad1-end h-[30%] my-[2%] w-full flex flex-col shadow-lg rounded-lg bg-[#EFF0E2]">
          <div className="flex items-center text-black text-xl py-[1%] ml-[5%]">
            Top Scoreboard
          </div>
          <div className="flex flex-col items-center bg-grey h-full">
            <div className="flex justify-center text-center text-black bg-white w-full h-full ">
              1 &nbsp; Company 1 score of x
            </div>
            <div className="flex justify-center text-center text-black bg-white w-full h-full ">
              1 &nbsp; Company 1 score of x
            </div>
            <div className="flex justify-center text-center text-black bg-white w-full h-full">
              1 &nbsp; Company 1 score of x
            </div>
          </div>
        </div>
        <div className="ml-[10%] bg-gradient-to-r from-grad1-start to-grad1-end h-[30%] my-[2%] w-full flex flex-col shadow-lg rounded-lg ">
          <div className="flex items-center text-black text-xl py-[1%] ml-[5%]">
            View Organizations
          </div>
          <div className="flex flex-row items-center bg-white h-full mt-[5%]">
            <div className="flex mx-[5%] w-full justify-center text-black text-lg rounded-md bg-main-grey text-center">
              Export
            </div>
            <div className="flex mx-[5%] w-full justify-center text-black text-lg rounded-md bg-main-grey text-center">
              Favorites
            </div>
            <Link href="/admin/all">
              <div className="flex mx-[5%] w-full justify-center text-black text-lg rounded-md bg-main-grey text-center">
                View all
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}