import React, { useEffect, useState } from 'react';
import { ResponsiveContainer, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Legend, Tooltip } from 'recharts';

const Statistics = () => {
    const [size, setSize] = useState(false);
    const checkSize = () => {
        setSize(window.innerWidth < 768);
    };

    useEffect(() => {
        checkSize();
        window.addEventListener('resize', checkSize);

        return () => window.removeEventListener('resize', checkSize)
    }, [])

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
        <div className='flex justify-center mt-10 '>
            <ResponsiveContainer  width={size ? 450 : 700} height={500}>
                <RadarChart cx="50%" cy={250} outerRadius={`${size ? 130 : 200}`} stroke="purple" data={marks}>
                    <PolarGrid></PolarGrid>
                    <PolarAngleAxis dataKey={`${size ? '' : 'subject'}`} stroke='purple'></PolarAngleAxis>
                    <PolarRadiusAxis angle={20} domain={[0, 60]} />
                    <Radar name="Toybur Rahman" dataKey="result" stroke="indigo" fill="purple" fillOpacity={0.2} />
                    <Legend></Legend>
                    <Tooltip />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
};
export default Statistics;