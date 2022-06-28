import { Stack, Typography } from "@mui/material"
import CrewLeaderChecklist from "../CrewLeaderChecklist"
import React from 'react'

export default function Hammond() {
    return <>
        <Typography variant="h4" component="h1" sx={{ mb: 1 }}>Hurricane Ida</Typography>
        <Typography variant="h5" component="h2" sx={{ mb: 3 }}>Hammond Command Center</Typography>

        <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 2, sm: 8 }}
            sx={{ mb: 4 }}
        >
            <div>
                <Typography variant="overline">Address</Typography>
                <Typography component="address" variant="body2" sx={{ fontStyle: 'normal' }}>
                    2503 Old Baton Rouge Hwy<br />
                    Hammond, LA 70403
                </Typography>
            </div>
            <div>
                <Typography variant="overline">Command Center Director</Typography>
                <Typography component="address" variant="body2" sx={{ fontStyle: 'normal' }}>
                    First Last<br />
                    (XXX) XXX-XXXX
                </Typography>
            </div>
            <div>
                <Typography variant="overline">Work Orders</Typography>
                <Typography component="address" variant="body2" sx={{ fontStyle: 'normal' }}>
                    First Last<br />
                    (XXX) XXX-XXXX
                </Typography>
            </div>
            <div>
                <Typography variant="overline">Area ERC Oversight</Typography>
                <Typography component="address" variant="body2" sx={{ fontStyle: 'normal' }}>
                    First Last<br/>
                    (XXX) XXX-XXXX
                </Typography>
            </div>
        </Stack>

        <CrewLeaderChecklist />
    </>
}