import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AntApp from './AntApp'
import Home from './Home'
import Training from './Training'
import CrewLeaderChecklist from './CrewLeaderChecklist'
import CallCenterTrainingMaterials from './CallCenterTrainingMaterials'
import CommandCenterTrainingMaterials from './CommandCenterTrainingMaterials'
import IanIndex from './components/ian/Index'
import PortCharlotteCC from './components/ian/PortCharlotteCC'
import CapeCoralCC from './components/ian/CapeCoralCC'
import VeniceCC from './components/ian/VeniceCC'
import VadostaCC from './components/ian/ValdostaCC'
import CommunicationsTrainingMaterials from './CommunicationsTrainingMaterials';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <AntApp />
        }>
          <Route path="training" element={<Training />} />
          <Route path="crew-leader-checklist" element={<CrewLeaderChecklist />} />
          <Route path="call-center" element={<CallCenterTrainingMaterials />} />
          <Route path="communications" element={<CommunicationsTrainingMaterials />} />
          <Route path="command-center" element={<CommandCenterTrainingMaterials />} />
          <Route path="helene">
            <Route index element={<IanIndex />} />         
          </Route>
          <Route path="ian">
            <Route path="cape-coral" element={<CapeCoralCC />} />
            <Route index element={<IanIndex />} />
            <Route path="port-charlotte" element={<PortCharlotteCC />} />
            <Route path="venice" element={<VeniceCC />} />

            <Route path="valdosta" element={<ValdostaCC />} />
           



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
