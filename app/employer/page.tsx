"use client";
import React, { useState, useEffect } from 'react';
import { BarChart, Bar, Brush, XAxis, YAxis, CartesianGrid} from 'recharts'; 

const EmployerDashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

const graph_data = [
  {name:'A', x:861}, 
  {name:'B', x:862}, 
  {name:'C', x:343}, 
  {name:'D', x:454}, 
  {name:'E', x:435}, 
  {name:'F', x:653}, 
  {name:'G', x:734}, 
  {name:'H', x:845}, 
  {name:'I', x:932}, 
  {name:'J', x:133}, 
  {name:'K', x:222}, 
  {name:'L', x:332}, 
  {name:'M', x:554}, 
  {name:'N', x:554}, 
  {name:'O', x:633}, 
  {name:'P', x:722}, 
  {name:'Q', x:638}, 
  {name:'R', x:229}, 
  {name:'S', x:321}, 
  {name:'T', x:222}, 
  {name:'U', x:573}, 
  {name:'V', x:464}, 
  {name:'W', x:565}, 
  {name:'X', x:656}, 
  {name:'Y', x:764}, 
  {name:'Z', x:348},
]

return (
    <div className="h-screen bg-white flex flex-col items-center">
      <div className="bg-slate-400 p-2 w-full">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-black text-2xl font-bold">Billion Minds</div>
      
          <div className="relative">
            <button onClick={toggleMenu} className="text-black">
              My Company
            </button>
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-black border border-gray-300 rounded-lg shadow-md">
                <ul>
                  <li className="py-2 px-4 hover:bg-blue-500">Sick dropdown dude</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="w-11/12 mt-4 flex flex-row gap-4">
        <div className="flex-1 flex flex-col justify-between border border-black rounded-lg p-4">
        <div className="text-left w-full">
          <h1 className="text-2xl font-bold text-black">BAR SCORE</h1>
          <p className="text-xs font-bold text-black">What&apos;s a BAR Score?</p>
        </div>
        <div className="flex-1 flex justify-center items-center">
         <p className="text-black flex items-baseline font-serif">
            <span className="text-6xl font-bold mr-2">1</span>
            <span className="text-2xl"> out of 100</span>
        </p>
        </div>
      </div>
        <div className="flex-1 flex justify-center items-center border border-black rounded-lg">
          <div className="w-full p-4"> 
            <BarChart width={700} height={400} data={graph_data}> 
              <CartesianGrid /> 
              <XAxis dataKey="name" /> 
              <YAxis /> 
              <Brush dataKey="name" height={30} stroke="#8884d8" /> 
              <Bar dataKey="x" fill="green" /> 
            </BarChart>
          </div>
        </div>

      </div>

      <div className="w-10/12 mt-4 flex flex-row gap-4 pt-5">
        <div className="flex-1 flex flex-col justify-between border border-black rounded-lg p-4">
        <div className="text-center w-full h-20">
          <h1 className="text-2xl font-bold text-black">Badges</h1>
        </div>
       </div>
       <div className="flex-1 flex flex-col justify-between border border-black rounded-lg p-4">
        <div className="text-center w-full">
          <h1 className="text-2xl font-bold text-black">Top Employees</h1>
        </div>
       </div>
      </div>
    </div>
  )
  
};

export default EmployerDashboard;