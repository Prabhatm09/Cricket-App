import React from 'react';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

export default function Card({ item }) {
    const { heading, name, country, highScore, imgUrl } = item;

    return (
        <>
            <Box sx={{ flexGrow: 2 }}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Item style={{ marginBottom: "16px", width: "380px" }} className="item" >
                            <div className="card-div">
                                <div className="left-div">
                                    <h1 className='heading'>{heading}</h1>
                                    <h4 className="player-name">{name}</h4>
                                    <h2 className="player-country">{country}</h2>
                                    <h1 className="high-score">{highScore}</h1>
                                </div>
                                <div className="right-div">
                                    <img height="248px" width="200px" src={imgUrl} alt="" />
                                </div>
                            </div>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}