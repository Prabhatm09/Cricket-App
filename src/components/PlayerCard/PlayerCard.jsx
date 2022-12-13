import React, { useState, useEffect } from "react";
import axios from "axios";

import Card from "./Card";

import './playerCard.css';

export function PlayerCard() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get("stats.json")
            .then((res) => {
                let output = [...res.data]
                output.forEach((item) => {
                    if (item.highScore === 109) {
                        item.heading = "Highest Score";
                    } else if (item.highScore === 296) {
                        item.heading = "Most Runs";
                    } else {
                        item.heading = "Most Wickets";
                    }
                });
                setData(output);
            });
    }, []);

    return (
        <>
            {data.map((item) => (
                <Card item={item} />

            ))}
        </>
    );
}