import { useState } from 'react'
import {
  AppBar,
  Box,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography
} from '@mui/material'
import LocationOn from '@mui/icons-material/LocationOn'
import MenuIcon from '@mui/icons-material/Menu'

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen)

  const drawerWidth = 240

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ListItemButton>
          <ListItemIcon><LocationOn /></ListItemIcon>
          <ListItemText>Gonzales</ListItemText>
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon><LocationOn /></ListItemIcon>
          <ListItemText>Hammond</ListItemText>
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon><LocationOn /></ListItemIcon>
          <ListItemText>Slidell</ListItemText>
        </ListItemButton>
      </List>
    </div>
  )

  return <>
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="static"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` }
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            aria-label="menu"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="h1" sx={{ flexGrow: 1 }}>
            Hurricane Ida Helping Hands Cleanup
          </Typography>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={window.document.body}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>


    <Container maxWidth="lg" component="main" sx={{ p: 3 }}>
      <Typography component="h2" variant="h3">
        Slidell Command Center
      </Typography>
      <Typography paragraph>
        Magna sanctus sanctus. Vero dolores at magna ipsum amet. At sea et. Sit dolore feugait blandit takimata amet labore eu elitr voluptua nonummy est duo diam lorem nonumy et wisi. Veniam ipsum sea dolore et. Amet feugiat dolor sit invidunt est lorem molestie vulputate lobortis sed feugiat nam sit duis. Dolore ea hendrerit facilisis sed sea diam volutpat sanctus kasd sed dolor invidunt aliquyam. Facilisis amet nulla. Et stet tincidunt dolor et vero ipsum amet eleifend. Sadipscing dolore aliquyam dolor sit lorem dolor id consetetur feugiat sadipscing. Accusam nibh erat dolor dolor sit lobortis veniam lorem amet aliquyam no.
      </Typography>
      <Typography paragraph>
        Elitr kasd vero consetetur volutpat sit nonumy hendrerit elitr facilisis elit lorem invidunt. At consequat voluptua ipsum. Lorem dolore dolore dolor takimata et possim ut kasd tempor lorem sed dolores.
      </Typography>
    </Container>
  </>
}