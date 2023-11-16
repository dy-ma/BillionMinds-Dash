"use client";
import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { LineChart, Brush, XAxis, YAxis, CartesianGrid, Tooltip, Line, Legend} from 'recharts'; 

const EmployerDashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

const graph_data = [
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

const employee_data = [
  { name: '0', Employee1: 400, Employee2: 240 },
  { name: '1', Employee1: 300, Employee2: 139 },
  { name: '2', Employee1: 200, Employee2: 980 },
  { name: '3', Employee1: 278, Employee2: 390 },
  { name: '4', Employee1: 189, Employee2: 480 },
  { name: '5', Employee1: 239, Employee2: 380 },
  { name: '6', Employee1: 349, Employee2: 430 },
  { name: '7', Employee1: 450, Employee2: 210 },
  { name: '8', Employee1: 300, Employee2: 400 },
  { name: '9', Employee1: 200, Employee2: 300 },
];

return (
    <div className="h-screen bg-white overflow-auto flex flex-col items-center">
      <div className="bg-slate-600 w-full">
        <div className="container mx-auto flex justify-between items-center">
        <img src="/logo.png" alt="Billion Minds Logo" className="w-16 h-auto"/>
        {/* <div className="text-black text-2xl font-bold">Billion Minds</div> */}
      
          <div className="relative">
            <button onClick={toggleMenu} className="flex flex-col justify-around w-6 h-4">
             <div className="w-full h-0.5 bg-white"></div>
              <div className="w-full h-0.5 bg-white"></div>
              <div className="w-full h-0.5 bg-white"></div>
            </button>
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-black border border-gray-300 rounded-lg shadow-md">
                <ul>
                <li className="py-2 px-4 hover:bg-blue-500">My Account</li>
                  <li className="py-2 px-4 hover:bg-blue-500">My Company</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="w-11/12 mt-4 border border-black rounded-lg p-4">
        <div className="flex flex-row gap-4">
          <div className="flex-1 flex flex-col justify-between">
            <div className="text-left w-full">
              <h1 className="text-2xl font-bold font-serif text-black">CodeLab&apos;s BAR Score</h1>
              <p className="text-xs font-bold font-serif text-gray-500">What&apos;s a BAR Score?</p>
            </div>
            <div className="flex-1 flex justify-center items-center">
              <p className="flex items-baseline font-serif">
                <span className="text-6xl font-bold mr-2 text-teal-500">56</span>
                <span className="text-2xl text-black "> out of 100</span>
              </p>
            </div>
          </div>

          <div className="flex-1 flex justify-center items-center">
            <div className="w-full p-4"> 
              <LineChart width={800} height={350} data={graph_data} margin={{ top: 20, right: 60, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Brush dataKey="name" height={30} stroke="#8884d8" /> 
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
              </LineChart>
            </div>
          </div>
        </div>
      </div>

      <div className="w-10/12 mt-4 flex flex-row gap-4 pt-5">
        <div className="flex-1 flex flex-col justify-between border border-black rounded-lg p-4">
        <div className="text-center w-full h-20">
          <h1 className="text-2xl font-bold font-serif text-black">Trending Scores</h1>
        </div>
        <div className="justify-center items-center">
          <LineChart width={600} height={250} data={employee_data} margin={{ top: 10, right: 40, left: 40, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Employee1" label="Employee 1" stroke="#82ca9d" /> 
            <Line type="monotone" dataKey="Employee2" label="Employee 2" stroke="#ffc658" />
          </LineChart>
        </div>
       </div>
       <div className="flex-1 flex flex-col border border-black rounded-lg p-4">
      <div className="text-center w-full mb-4">
        <h1 className="text-2xl font-bold font-serif text-black">View Employees</h1>
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
  )
  
};

export default EmployerDashboard;