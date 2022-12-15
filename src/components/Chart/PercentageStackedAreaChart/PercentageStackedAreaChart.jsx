import axios from "axios";
import React, { useState, useEffect } from "react";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts";

const toPercent = (decimal) => `${decimal * 400}`;

const renderTooltipContent = (o) => {
    const { payload = [], label } = o;
    const total = payload.reduce((result, entry) => result + entry.value, 0);

    return (
        <div className="customized-tooltip-content">
            <p className="total">{`${label} (Total: ${total})`}</p>
            <ul className="list">
                {payload.map(({ color, name, value }, index) => (
                    <li key={`item-${index}`} style={{ color: color }}>
                        {`${name}: ${value}`}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export function PercentageStackedAreaChart() {
    const [player, setPlayer] = useState([]);

    useEffect(() => {
        axios
            .get("captain.json")
            .then((res) => {
                setPlayer([...res.data]);
            });
    }, []);

    return (
        <AreaChart
            width={600}
            height={500}
            data={player}
            margin={{
                top: 10,
                right: 70,
                left: 0,
                bottom: 0,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
                type="monotone"
                dataKey="matches"
                stackId="2"
                stroke="#8884d8"
                fill="#8884d8"
            />
            <Area
                type="monotone"
                dataKey="won"
                stackId="1"
                stroke="#82ca9d"
                fill="#82ca9d"
            />
            <Area
                type="monotone"
                dataKey="lost"
                stackId="1"
                stroke="#ffc658"
                fill="#ffc658"
            />
        </AreaChart>
    );
}