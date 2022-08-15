import { Box, Typography } from '@mui/material'
import React from 'react'

export default function Covid() {
    return <Box component="section" sx={{ mt: 4 }}>
        <Typography variant="h6" component="h3">COVID-19 Guidelines</Typography>
        <ul>
            <li><strong>Social Distancing.</strong> When possible, avoid large gatherings, especially at the command center.</li>
            <li><strong>Masks.</strong> Wear a mask when speaking with the homeowner, in public places where required, when working indoors, and when social distancing is not possible outdoors.</li>
            <li><strong>Avoid contact.</strong> Do not shake hands, fist bump, and avoid contact that could spread germs.</li>
            <li><strong>Wear gloves.</strong> Wash your hands often for at least 20 seconds, use hand sanitizer often, and wear gloves.</li>
        </ul>
    </Box>
}