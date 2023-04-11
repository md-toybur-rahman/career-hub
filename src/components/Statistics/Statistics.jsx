import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const Statistics = () => {
    const marks = [
        {
            subject: 'Assignment-01',
            result: 57,
            fullMark: 60,
        },
        {
            subject: 'Assignment-02',
            result: 59,
            fullMark: 60,
        },
        {
            subject: 'Assignment-03',
            result: 58,
            fullMark: 60,
        },
        {
            subject: 'Assignment-04',
            result: 60,
            fullMark: 60,
        },
        {
            subject: 'Assignment-05',
            result: 57,
            fullMark: 60,
        },
        {
            subject: 'Assignment-06',
            result: 58,
            fullMark: 60,
        },
        {
            subject: 'Assignment-07',
            result: 60,
            fullMark: 60,
        },
        {
            subject: 'Assignment-08',
            result: 60,
            fullMark: 60,
        },
    ];

    return (
        <div className='flex justify-center mt-20'>
            <RadarChart cx={500} cy={250} outerRadius={200} width={1000} height={500} stroke="purple" data={marks}>
                <PolarGrid></PolarGrid>
                <PolarAngleAxis dataKey='subject' stroke='purple'></PolarAngleAxis>
                <PolarRadiusAxis angle={20} domain={[0, 60]} />
                <Radar name="Toybur Rahman" dataKey="result" stroke="indigo" fill="purple" fillOpacity={0.2} />
                <Legend></Legend>
                <Tooltip />
            </RadarChart>
        </div>
    );
};

export default Statistics;