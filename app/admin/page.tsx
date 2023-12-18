'use client'
import React, { useState, useEffect } from 'react';
import Link from "next/link";


export default function Dash() {

   const iframeStyles = {
    background: '#FFFFFF',
    border: 'none',
    borderRadius: '10px',
    boxShadow: '0 2px 10px 0 rgba(70, 76, 79, .2)',
  };

   const topPerformerStyles = {
    background: '#FFFFFF',
    border: 'none',
    borderRadius: '10px',
    boxShadow: '0 2px 10px 0 rgba(70, 76, 79, .2)',
    width: '100%'
  };

  return (
    <div className="flex flex-col h-screen bg-white px-[10%] py-[2%] text-black text-clip overflow-scroll">
      <div className=" mx-[5%] flex flex-row h-[5%]">
        <div className="flex items-end text-black text-2xl ml-[5%] mr-[60%] font-bold">
          <p>Welcome, Admin</p>
        </div>
      </div>
      <div className="h-auto my-[2%] flex flex-col shadow-lg rounded-lg bg-gradient-to-r from-grad1-start to-grad1-end">
        <div className="flex items-center text-black text-xl py-[1%] ">
          <p className="ml-[5%] font-raleway">Data</p>
          <div className="flex flex-row ml-[70%] bg-main-grey rounded-lg text-sm hover:bg-grey">
            <div className="flex flex-row">
            <div className="flex mx-[5%] w-full justify-center text-black text-lg rounded-md bg-main-grey text-center">
              <Link href="/admin/all">View All</Link>
            </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center bg-white h-full ">
          <div className="w-full h-full p-4">
            <iframe style={iframeStyles} width="640" height="480" src="https://charts.mongodb.com/charts-project-0-virfw/embed/charts?id=656d149c-2546-4f7f-8402-c4e0406b48b1&maxDataAge=3600&theme=light&autoRefresh=true"></iframe>
          </div>

          <div className="flex flex-col w-full p-4">
          <iframe style={topPerformerStyles} width="640" height="480" src="https://charts.mongodb.com/charts-project-0-virfw/embed/charts?id=656d27b1-96af-418d-8661-c98521ef8ae6&maxDataAge=3600&theme=light&autoRefresh=true"></iframe>
          </div>
        </div>
      </div>
      {/* <div className="bg-gradient-to-r from-grad1-start to-grad1-end h-[30%] my-[2%] flex flex-col shadow-lg rounded-lg">
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
      </div> */}

      <div className=" mx-[5%] flex flex-row h-[5%]">
        <div className="flex items-end text-black text-2xl font-bold">
          <p>Organization Data</p>
        </div>
      </div>
      <br />
      <div className="flex flex-row space-x-4 h-[400] w-full" >
        <div className=" h-full w-full flex flex-col shadow-lg rounded-lg">
            <iframe
              style={iframeStyles}
              className = "h-[100%] w-[100%]"
              src="https://charts.mongodb.com/charts-project-0-virfw/embed/charts?id=65699aa9-922a-4371-8854-58c4e658abe9&maxDataAge=3600&theme=light&autoRefresh=true"
            ></iframe>
        </div>
        <div className="h-full w-full flex flex-col shadow-lg rounded-lg">
            <iframe   
             style={iframeStyles}
              className =  "w-[100%]"
              height = "400"
               src="https://charts.mongodb.com/charts-project-0-virfw/embed/charts?id=6569958b-9190-4bb3-8448-0fcad6214fde&maxDataAge=3600&theme=light&autoRefresh=true">
               </iframe>
        </div>
        </div>
          <div  className="h-auto flex flex-col shadow-lg rounded-lg mt-4">
            <div className="w-auto h-auto">
            {/* <LineChartComponent data={data} /> */}
            <iframe style={iframeStyles} className = "w-full" height = "400" src="https://charts.mongodb.com/charts-project-0-virfw/embed/charts?id=6569995a-b2ce-42ca-8748-7258eb110db6&maxDataAge=3600&theme=light&autoRefresh=true"></iframe>
          </div>
          </div>
    </div>
  );
}