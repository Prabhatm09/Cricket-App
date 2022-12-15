import React, { useState, useEffect } from "react";
import axios from "axios";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";

import "../LineBarAreaComposedChart/pieChart.css";
import "./barChart.css"

export function BarCharts() {
    const [matches, setMatches] = useState([]);

    useEffect(() => {
        axios
            .get(
                `https://cricbuzz-cricket.p.rapidapi.com/stats/v1/series/3718/points-table`,
                {
                    headers: {
                        "X-RapidAPI-Key":
                            "b07e006b79msh0115f64a28516d4p1c5992jsnceb9253b84c0",
                        "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
                    },
                }
            )
            .then((response) => {
                setMatches([...response.data.pointsTable[0].pointsTableInfo]);
            });
    }, []);

    return (
        <>

            <BarChart
                width={600}
                height={400}
                data={matches}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="teamFullName" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="matchesPlayed" stackId="a" fill="#8884d8" />
                <Bar dataKey="matchesWon" stackId="a" fill="#82ca9d" />
            </BarChart>

        </>
    );
}