import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell } from "recharts";
import axios from "axios";
// import image from "../Pie/virat.jpeg";
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

    return (
        <>
            <img className='player-img' src="https://s.ndtvimg.com/images/entities/300/virat-kohli-967.png" alt="virat kohli" />
            <PieChart width={500} height={400}>
                <Pie
                    data={data}
                    innerRadius={75}
                    outerRadius={120}
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                </Pie>
            </PieChart>
        </>
    );
}