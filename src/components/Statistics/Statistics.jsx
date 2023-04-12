import React, { useEffect, useState } from 'react';
import { ResponsiveContainer, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Legend, Tooltip } from 'recharts';
import useSize from '../../Hooks/useSize';
import Banner from '../Banner/Banner';

const Statistics = () => {
    const size = useSize()

    const marks = [
        {
            subject: 'Assignment-01',
            exam: 'Exam-01',
            result: 57,
            fullMark: 60,
        },
        {
            subject: 'Assignment-02',
            exam: 'Exam-02',
            result: 59,
            fullMark: 60,
        },
        {
            subject: 'Assignment-03',
            exam: 'Exam-03',
            result: 58,
            fullMark: 60,
        },
        {
            subject: 'Assignment-04',
            exam: 'Exam-04',
            result: 60,
            fullMark: 60,
        },
        {
            subject: 'Assignment-05',
            exam: 'Exam-05',
            result: 57,
            fullMark: 60,
        },
        {
            subject: 'Assignment-06',
            exam: 'Exam-06',
            result: 58,
            fullMark: 60,
        },
        {
            subject: 'Assignment-07',
            exam: 'Exam-07',
            result: 60,
            fullMark: 60,
        },
        {
            subject: 'Assignment-08',
            exam: 'Exam-08',
            result: 60,
            fullMark: 60,
        },
    ];

    return (
        <div>
            <Banner name="Statistics"></Banner>
            <div className='flex justify-center '>
                <ResponsiveContainer width={size ? 450 : 700} height={500}>
                    <RadarChart cx="50%" cy={250} outerRadius={size ? 130 : 200} stroke="purple" data={marks}>
                        <PolarGrid></PolarGrid>
                        <PolarAngleAxis dataKey={size ? 'exam' : 'subject'} stroke='purple'></PolarAngleAxis>
                        <PolarRadiusAxis angle={20} domain={[0, 60]} />
                        <Radar name="Toybur Rahman" dataKey="result" stroke="indigo" fill="purple" fillOpacity={0.2} />
                        <Legend></Legend>
                        <Tooltip />
                    </RadarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};
export default Statistics;