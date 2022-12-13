import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell } from "recharts";
import axios from "axios";
import "./pieChart.css";

const colors = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#8884D8",
    "#FF8042",
    "#82CA9D",
];

export function LineBarAreaComposedChart() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("radial.json")
            .then((res) => {
                console.log(res.data);
                setData(...[res.data]);
            })
    }, []);

    const handleLabel = () => {
        return ""
    }

    return (
        <>
            <img
                className="player-image"
                src="https://s.ndtvimg.com/images/entities/300/virat-kohli-967.png"
                alt="virat kohli"
            />
            <PieChart width={500} height={400}>
                <Pie
                    data={data}
                    innerRadius={75}
                    outerRadius={120}
                    dataKey="value"
                    label={handleLabel}
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                </Pie>
            </PieChart>
            <span className='run-percent-1'>3%</span>
            <span className='run-percent-2'>8%</span>
            <span className='run-percent-3'>5%</span>
            <span className='run-percent-4'>17%</span>
            <span className='run-percent-5'>22%</span>
            <span className='run-percent-6'>16%</span>
            <span className='run-percent-7'>17%</span>
            <span className='run-percent-8'>12%</span>
        </>
    );
}