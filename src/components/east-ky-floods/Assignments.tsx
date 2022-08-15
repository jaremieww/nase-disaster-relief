import { Alert, Box, Grid, Typography } from '@mui/material'

type Props = {
  assignedStakes: string[]
}

export default function Assignments({ assignedStakes }: Props) {
  return <>

    <Box component="section">
      <Typography variant="h6" component="h3">Stakes assigned to Martin Command Center 8/19/2022</Typography>
      <p>Please go to your assigned command center. An assignment is required for you to participate.</p>

      <Alert severity="error">All teams must check into the Command Center assigned&mdash;<em>No exceptions</em></Alert>

      <Grid container maxWidth={'sm'} columns={{ xs: 1, sm: 3 }} sx={{ mt: 2 }}>
        {
          assignedStakes.map((stake, index) => (
            <Grid item xs={1} key={index}>
              {stake}
            </Grid>
          ))
        }
      </Grid>

      <Typography variant="body1" component="p" sx={{ mt: 2 }}>
        Teams are welcome to start showing up Friday evening and get checked in starting at 8pm.
        If you are coming earlier than planned on Saturday, please call or text the command center when you are one hour out.
      </Typography>
    </Box>
  </>
}