import './App.css';
import React, { useState } from 'react'
import {
  AppBar,
  Box,
  Container,
  Divider,
  Drawer,
  IconButton,
  Link,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
  Toolbar,
  Typography
} from '@mui/material'
import LocationOn from '@mui/icons-material/LocationOn'
import MenuIcon from '@mui/icons-material/Menu'
import Slidell from './ida/Slidell';
import Hammond from './ida/Hammond';
import { Routes, Route, Link as RouterLink, useLocation, useNavigate } from 'react-router-dom'
import OtherWaysToServe from './OtherWaysToServe';
import Training from './Training';
import CallCenterTrainingMaterials from './CallCenterTrainingMaterials';

function App() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen)
  const location = useLocation();
  const navigate = useNavigate();

  console.log(location)

  const drawerWidth = 240

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ListItemButton>
          <ListItemIcon><LocationOn /></ListItemIcon>
          <ListItemText><Link to="/hammond" component={RouterLink}>Hammond</Link></ListItemText>
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon><LocationOn /></ListItemIcon>
          <ListItemText><Link to="/slidell" component={RouterLink}>Slidell</Link></ListItemText>
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
            Helping Hands
          </Typography>
          <Select 
            value={location.pathname !== '/' ? location.pathname : '/slidell'}
            onChange={e => navigate(e.target.value)}  
          >
            <MenuItem value={'/gonzales'}>Gonzales</MenuItem>
            <MenuItem value={'/hammond'}>Hammond</MenuItem>
            <MenuItem value={'/slidell'}>Slidell</MenuItem>
          </Select>
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

    <Container 
      maxWidth="md"
      component="main" 
      sx={{ 
        ml: {
          sm: `${drawerWidth}px`
        },
        p: 4 
      }}
    >
      <Routes>
        <Route path="/" element={<Slidell />} />
        <Route path="/slidell" element={<Slidell />} />
        <Route path="/hammond" element={<Hammond />} />
        <Route path="/other-ways-to-serve" element={<OtherWaysToServe/>} />
        <Route path="/training" element={<Training/>} />
        <Route path="/call-center" element={<CallCenterTrainingMaterials />} />
      </Routes>
    </Container>
  </>
}

export default App;
