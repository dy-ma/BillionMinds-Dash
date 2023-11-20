import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

interface RadarChartProps {
    data:Array<{
        subject: string;
        A: number;
        B: number;
        fullMark: number;
    }>;
}

const RadarChartComponent:  React.FC<RadarChartProps> = ({ data }: RadarChartProps) => {
    return (
        <div className='flex flex-col h-full px-[2%] py-[2%]'>
            {/* <div className='mx-[7%] bg-slate-200 h-[100%] my-[2%] flex flex-col shadow-lg rounded-lg'> */}
                {/* <div className='flex items-center text-black text-xl py-[1%] ml-[5%] font-bold'>Chart Data</div> */}
                    <div className='flex flex-row items-center bg-transparent h-full'>
                        <ResponsiveContainer width="100%" height="100%">
                            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                                <PolarGrid />
                                <PolarAngleAxis dataKey="subject" />
                                <PolarRadiusAxis />
                                <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                            </RadarChart>
                        </ResponsiveContainer>
                        {/* <div className='flex flex-col ml-[10%] h-[80%] w-[20%] my-[10%]'>
                            <div className='flex text-black justify-center text-xl font-bold'>Insights</div>
                            <div className='flex text-black justify-center text-center text-lg my-[20%]'>Lorem  Lorem  Lorem  Lorem  Lorem  Lorem  Lorem  Lorem  Lorem  Lorem  Lorem  Lorem  Lorem  </div>
                            <div className='mx-[10%] flex bg-slate-300 justify-center text-black text-lg rounded-full hover:bg-slate-500 text-center'>Details</div>                 */}
                    {/* </div> */}
                </div>
            {/* </div> */}
        </div>
    );
};
  
export default RadarChartComponent;
