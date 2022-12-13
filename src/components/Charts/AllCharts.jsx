import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { BarCharts } from '../Chart/BarChart/BarChart';
import { LineBarAreaComposedChart } from './LineBarAreaComposedChart/LineBarAreaComposedChart';
import { SimpleRadarChart } from '../Chart/SimpleRadarChart/SimpleRadarChart';
import { PercentageStackedAreaChart } from '../Chart/PercentageStackedAreaChart/PercentageStackedAreaChart';
import { Item } from '../Dashboard/ConstData';

import './allcharts.css';

export function AllCharts() {
    return (
        <>
            <Box sx={{ flexGrow: 1 }} style={{ marginTop: '90px', marginLeft: '20px', marginRight: '20px', marginBottom: '20px' }}>
                <h3 className='venue-Heading'>All Charts</h3>
                <Grid container spacing={2}>
                    <Grid item xs={7}>
                        <Item><BarCharts /></Item>
                    </Grid>
                    <Grid item xs={5}>
                        <Item><LineBarAreaComposedChart /></Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item><SimpleRadarChart /></Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item><PercentageStackedAreaChart /></Item>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}