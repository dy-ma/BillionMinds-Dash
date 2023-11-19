'use client'
import React, { useState, useEffect } from 'react';
import { ResponsiveContainer, LineChart, Bar, Brush, XAxis,  
    YAxis, CartesianGrid, Tooltip, Line, Legend} from 'recharts'; 
  
export default function Dash() {

    const data = [
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


    return (
    <div className='flex flex-col h-screen bg-white px-[2%] py-[2%]'>
        <div className=" mx-[5%] flex flex-row h-[5%]">
            <div className="flex items-end text-black text-2xl ml-[5%] mr-[60%] font-bold">
              <p>Welcome, Admin</p>
            </div>
            {/* <div className='flex text-black text-xl mr-10 items-end'> Home </div> */}
        </div>

        <div className='mx-[10%] bg-slate-200 h-[30%] my-[2%] flex flex-col shadow-lg rounded-lg bg-[#EFF0E2]'>
            <div className='flex items-center text-black text-xl py-[1%] ml-[5%]'>
              <p>Chart Data</p>
              <div className='flex flex-row ml-[75%] bg-main-grey rounded-lg text-sm hover:bg-grey'>
                <div className='flex flex-row'>
                <p>Upload File</p>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.81825 1.18188C7.64251 1.00615 7.35759 1.00615 7.18185 1.18188L4.18185 4.18188C4.00611 4.35762 4.00611 4.64254 4.18185 4.81828C4.35759 4.99401 4.64251 4.99401 4.81825 4.81828L7.05005 2.58648V9.49996C7.05005 9.74849 7.25152 9.94996 7.50005 9.94996C7.74858 9.94996 7.95005 9.74849 7.95005 9.49996V2.58648L10.1819 4.81828C10.3576 4.99401 10.6425 4.99401 10.8182 4.81828C10.994 4.64254 10.994 4.35762 10.8182 4.18188L7.81825 1.18188ZM2.5 9.99997C2.77614 9.99997 3 10.2238 3 10.5V12C3 12.5538 3.44565 13 3.99635 13H11.0012C11.5529 13 12 12.5528 12 12V10.5C12 10.2238 12.2239 9.99997 12.5 9.99997C12.7761 9.99997 13 10.2238 13 10.5V12C13 13.104 12.1062 14 11.0012 14H3.99635C2.89019 14 2 13.103 2 12V10.5C2 10.2238 2.22386 9.99997 2.5 9.99997Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                </div>
              </div>
            </div>
            <div className='flex flex-row items-center bg-white h-full'>
                <ResponsiveContainer width="65%" height="80%">
                <LineChart data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Brush dataKey="name" height={30} stroke="#8884d8" /> 
                    <Legend />
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
                </ResponsiveContainer>

                <div className='flex flex-col ml-[10%] h-[80%] w-[20%] my-[10%]'>
                    <div className='mx-[10%] mt-[5%] flex bg-main-grey justify-center text-black text-lg rounded-md text-center'>
                      x% increase in skill
                    </div>
                    <div className='mx-[10%] mt-[5%] flex bg-main-grey justify-center text-black text-lg rounded-md text-center'>
                      x% decrease in skill
                    </div>
                    <div className='mx-[10%] mt-[5%] flex bg-main-grey justify-center text-black text-lg rounded-md text-center'>
                      x% increase in skill
                    </div>
                    <div className='mx-[10%] mt-[5%] flex bg-green justify-center text-black text-lg rounded-md hover:bg-slate-500 text-center'>Details</div>                
                </div>
            </div>
        </div>
        <div className='mx-[10%] bg-slate-200 h-[30%] my-[2%] flex flex-col shadow-lg rounded-lg bg-[#EFF0E2]'>
            <div className='flex items-center text-black text-xl py-[1%] ml-[5%]'>
              <p>Trending Scores</p>
              
            </div>
            <div className='flex flex-row items-center bg-white h-full'>
                <ResponsiveContainer width="65%" height="80%">
                <LineChart data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Brush dataKey="name" height={30} stroke="#8884d8" /> 
                    <Legend />
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
                </ResponsiveContainer>

                <div className='flex flex-col ml-[10%] h-[80%] w-[20%] my-[10%]'>
                    <div className='mx-[10%] flex justify-center text-black text-lg rounded-md bg-grey text-center'>
                    Top Companies of the Month
                    </div>                
                </div>
            </div>
        </div>

        <div className='flex flex-row'>
          <div className='mx-[10%] bg-slate-200 h-[30%] my-[2%] w-full flex flex-col shadow-lg rounded-lg bg-[#EFF0E2]'>
              <div className='flex items-center text-black text-xl py-[1%] ml-[5%]'>
                Top Scoreboard
              </div>
              <div className='flex flex-col items-center bg-grey h-full'>
                <div className='flex justify-center text-center text-black bg-white w-full h-full '>1 &nbsp; Company 1 score of x</div>
                <div className='flex justify-center text-center text-black bg-white w-full h-full '>1 &nbsp; Company 1 score of x</div>
                <div className='flex justify-center text-center text-black bg-white w-full h-full'>1 &nbsp; Company 1 score of x</div>
              </div>
          </div>
          <div className='mx-[10%] bg-slate-200 h-[30%] my-[2%] w-full flex flex-col shadow-lg rounded-lg bg-[#EFF0E2]'>
              <div className='flex items-center text-black text-xl py-[1%] ml-[5%]'>
                View Organizations
              </div>
              <div className='flex flex-row items-center bg-white h-full mt-[5%]'>
                <div className='flex mx-[5%] w-full justify-center text-black text-lg rounded-md bg-main-grey text-center'>
                  Export
                </div>  
                <div className='flex mx-[5%] w-full justify-center text-black text-lg rounded-md bg-main-grey text-center'>
                  Favorites
                </div>  
                <div className='flex mx-[5%] w-full justify-center text-black text-lg rounded-md bg-main-grey text-center'>
                  View all
                </div>  
              </div>
          </div>
        </div>
        {/* <div className='flex flex-row h-[50%] mx-[7%] mt-[2%] text-black justify-center text-xl'>
            <div className='flex flex-col mx-[2%] items-center bg-slate-200 h-[80%] w-full flex flex-col shadow-lg rounded-lg'>
                <div className='my-[5%]'>
                    Actions
                </div>
                <div className=' w-[50%] mt-[10%] mb-[5%] flex bg-slate-300 justify-center text-black text-lg rounded-full hover:bg-slate-500 text-center'>CSV</div>
                <div className=' w-[50%] mb-[5%] flex bg-slate-300 justify-center text-black text-lg rounded-full hover:bg-slate-500 text-center'>Config</div>
            </div>
            <div className='flex flex-col mx-[2%] items-center bg-slate-200 h-[80%] w-full flex flex-col shadow-lg rounded-lg'>
                <div className='my-[5%]'>
                    Top AR Scores
                </div>
                <div className=' w-[80%] mt-[5%] mb-[5%] flex bg-slate-300 justify-center text-black text-lg rounded-full hover:bg-slate-500 text-center '>Lorem</div>
                <div className=' w-[80%] mb-[5%] flex bg-slate-300 justify-center text-black text-lg rounded-full hover:bg-slate-500 text-center '>Lorem</div>
                <div className=' w-[80%] mb-[5%] flex bg-slate-300 justify-center text-black text-lg rounded-full hover:bg-slate-500 text-center '>Lorem</div>
            </div>
            <div className='flex flex-col mx-[2%] items-center bg-slate-200 h-[80%] w-full flex flex-col shadow-lg rounded-lg'>
                <div className='my-[5%]'>
                    View Organizations
                </div>
                <div className='flex flex-row justify-center mt-[10%] mb-[5%]'>
                    <div className=' w-full h-[80%] mx-[10%] flex bg-slate-300 justify-center text-black text-lg rounded-full hover:bg-slate-500 text-center'>Lorem</div>
                    <div className=' w-full h-[80%] mx-[10%] flex bg-slate-300 justify-center text-black text-lg rounded-full hover:bg-slate-500 text-center'>Lorem</div>
                    <div className=' w-full h-[80%] mx-[10%] flex bg-slate-300 justify-center text-black text-lg rounded-full hover:bg-slate-500 text-center'>Lorem</div>
                </div>
                
            </div> */}
        {/* </div> */}
    </div>
    )
}