import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import axios from "axios";

import "./Card.css";
import '../Style/style.css';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

export function Card() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get("card.json")
            .then((res) => {
                setData([...res.data]);
            });
    }, []);

    return (
        <>
            <Box sx={{ flexGrow: 1 }} className="Box">
                <Grid container spacing={2} className="grid-1">
                    <Grid item xs={12} className="grid-2">
                        {data.map(({ imgF, nameF, imgL, nameL, joinLink, date, time, matchNo }) => (
                            <Item className="item">
                                <div className="outermost-container">
                                    <div className="item-card-1">
                                        <div>
                                            <img
                                                className="team-image-1"
                                                src={imgF}
                                                alt="team 1"
                                            />
                                            <h5 className="name">{nameF}</h5>
                                        </div>
                                        <p className="versus">v/s</p>
                                        <div>
                                            <img
                                                className="team-image-2"
                                                src={imgL}
                                                alt="team 2"
                                            />
                                            <h5 className="name">{nameL}</h5>
                                        </div>
                                    </div>
                                    <div className="item-card-2">
                                        <h5 className="date">{date}</h5>
                                        <h5 className="time">{time}</h5>
                                        <a href={joinLink} target="_blank" className="link">
                                            Join Now
                                        </a>
                                    </div>
                                </div>
                                <h3 className="matchNo">{matchNo}</h3>
                            </Item>
                        ))}
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}