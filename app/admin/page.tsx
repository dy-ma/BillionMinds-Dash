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
        <div className="flex flex-row h-[5%] mb-[2%]">
            <div className="flex items-end text-black text-2xl ml-[5%] mr-[60%] font-bold">BillionMinds</div>
            <div className='flex text-black text-xl mr-10 items-end'> Home </div>
        </div>

        <div className='mx-[7%] bg-slate-200 h-[50%] my-[2%] flex flex-col shadow-lg rounded-lg'>
            <div className='flex items-center text-black text-xl py-[1%] ml-[5%] font-bold'>Welcome, Admin</div>
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
                    <div className='flex text-black justify-center text-xl font-bold'>Insights</div>
                    <div className='flex text-black justify-center text-center text-lg my-[20%]'>Lorem  Lorem  Lorem  Lorem  Lorem  Lorem  Lorem  Lorem  Lorem  Lorem  Lorem  Lorem  Lorem  </div>
                    <div className='mx-[10%] flex bg-slate-300 justify-center text-black text-lg rounded-full hover:bg-slate-500 text-center'>Details</div>                </div>
            </div>
        </div>
        <div className='flex flex-row h-[50%] mx-[7%] mt-[2%] text-black justify-center text-xl'>
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
                
            </div>
        </div>
    </div>
    )
}