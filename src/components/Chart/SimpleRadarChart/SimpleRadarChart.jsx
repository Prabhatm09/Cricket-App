import React, { useState, useEffect } from "react";
import axios from "axios";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from "recharts";

export function SimpleRadarChart() {
    const [pct, setPct] = useState([]);

    useEffect(() => {
        axios
            .get(`https://cricbuzz-cricket.p.rapidapi.com/stats/v1/iccstanding/team/matchtype/1`,
                {
                    headers: {
                        'X-RapidAPI-Key': 'b07e006b79msh0115f64a28516d4p1c5992jsnceb9253b84c0',
                        'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
                    }
                }
            )
            .then(response => {
                setPct([...response.data.values]);
            });
    }, []);

    return (
        <RadarChart
            cx={300}
            cy={250}
            outerRadius={150}
            width={500}
            height={500}
            data={pct}
        >
            <PolarGrid />
            <PolarAngleAxis tick={{ fill: "grey" }} tickLine={{ stroke: "coral" }} dataKey="value[2]" />
            <PolarRadiusAxis />
            <Radar
                dataKey="value[3]"
                stroke="coral"
                fill="pink"
                fillOpacity={0.6}
            />
        </RadarChart>
    );
}
