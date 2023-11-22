'use-client';
import React from 'react';
import {
    ResponsiveContainer, LineChart, Brush, XAxis,
    YAxis, CartesianGrid, Tooltip, Line, Legend
} from 'recharts';

interface LineChartProps {
    data: Array<{
        time: string;
        ARScore: number;
    }> | null;
}

const LineChartComponent: React.FC<LineChartProps> = ({ data }: LineChartProps) => {
    return (
        <div className='flex flex-col w-full h-full'>
            <div className='flex flex-row p-2 justify-between bg-transparent w-[100%] h-[100%]'>
                <ResponsiveContainer width="100%" height="100%">
                    {(data != null) ?
                        <LineChart data={data}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Brush dataKey="name" height={30} stroke="#8884d8" />
                            <Legend />
                            <Line type="monotone" dataKey="ARScore" stroke="#82ca9d" />
                        </LineChart>
                        :
                        <p>Data Error: Placeholder</p>
                    }

                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default LineChartComponent;