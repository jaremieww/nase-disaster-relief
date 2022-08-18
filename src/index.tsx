import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AntApp from './AntApp'

import Home from './Home'
import Training from './Training'
import CrewLeaderChecklist from './CrewLeaderChecklist'
import CallCenterTrainingMaterials from './CallCenterTrainingMaterials'
import Slidell from './ida/Slidell'
import Hammond from './ida/Hammond'
import Index from './ida/Index'
import CommandCenterTrainingMaterials from './CommandCenterTrainingMaterials';
import MartinCC from './components/east-ky-floods/MartinCC';
import HazardCC from './components/east-ky-floods/hazard/HazardCC';
import { default as EastKentuckyFloodingIndex} from './components/east-ky-floods/Index'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <AntApp />
          </ThemeProvider>
        }>
          <Route path="training" element={<Training />} />
          <Route path="crew-leader-checklist" element={<CrewLeaderChecklist />} />
          <Route path="call-center" element={<CallCenterTrainingMaterials />} />
          <Route path="command-center" element={<CommandCenterTrainingMaterials />} />
          <Route path="ida">
            <Route path="slidell" element={<Slidell />} />
            <Route path="hammond" element={<Hammond />} />
            <Route index element={<Index />} />
          </Route>
          <Route path="ky">
            <Route path="martin" element={<MartinCC />} />
            <Route path="hazard" element={<HazardCC />} />
            <Route index element={<EastKentuckyFloodingIndex />} />
          </Route>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
