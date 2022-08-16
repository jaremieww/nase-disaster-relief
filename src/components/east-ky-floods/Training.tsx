import { Box, Typography } from "@mui/material"
import PopoutLink from "../PopoutLink"

export default function Training() {
  return <Box component="section" sx={{ mt: 4 }}>
    <Typography variant="h6" component="h3">Training</Typography>
    <ul>
      <li><PopoutLink href="https://www.youtube.com/watch?v=eZWShxk4OSo">Muck Out Training</PopoutLink></li>
    </ul>
    
  </Box>
}