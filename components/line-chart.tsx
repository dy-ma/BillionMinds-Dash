'use-client';
import React from 'react';
import { ResponsiveContainer, LineChart, Brush, XAxis,  
    YAxis, CartesianGrid, Tooltip, Line, Legend} from 'recharts'; 

interface LineChartProps {
    data:Array<{
        name: string;
        uv: number;
        pv: number;
        amt: number;
    }>;
}

const LineChartComponent:  React.FC<LineChartProps> = ({ data }: LineChartProps) => {
    return (
        <div className='flex flex-col h-100 shadow-lg rounded-lg'>
            <div className='flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 text-black text-xl py-1 font-bold'>Chart Data</div>
            <div className='flex flex-row p-2 justify-between bg-white'>
                <ResponsiveContainer width="100%" height="60%">
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
                    <div className='flex text-black justify-center text-center text-lg'>Lorem  Lorem  Lorem  Lorem  Lorem  Lorem  Lorem  Lorem  Lorem  Lorem  Lorem  Lorem  Lorem  </div>
                    <div className='mx-[10%] flex bg-slate-300 justify-center text-black text-lg rounded-full hover:bg-slate-500 text-center'>Details</div>                
                </div>
            </div>
        </div>
    );
};
  
export default LineChartComponent;