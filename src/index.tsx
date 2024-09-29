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
import ValdostaCC from './components/ian/ValdostaCC'
import MadisonCC from './components/ian/MadisonCC'
import ChieflandCC from './components/ian/ChieflandCC'
import WaycrossCC from './components/ian/WaycrossCC'
import AshevilleCC from './components/ian/AshevilleCC'
import DouglasCC from './components/ian/DouglasCC'
import StPetersburgCC from './components/ian/StPetersburgCC'
import LakeCity from './components/ian/LakeCityCC'
import SavannahCC from './components/ian/SavannahCC'
import AikenCC from './components/ian/AikenCC'
import GreenvilleCC from './components/ian/GreenvilleCC'
import LeniorCC from './components/ian/LeniorCC'
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
            <Route path="madison" element={<MadisonCC />} />
            <Route path="chiefland" element={<ChieflandCC />} />
            <Route path="waycross" element={<WaycrossCC />} />
            <Route path="asheville" element={<AshevilleCC />} />
            <Route path="douglas" element={<DouglasCC />} />
            <Route path="stpetersburg" element={<StPetersburgCC />} />
            <Route path="lakecity" element={<LakeCityCC />} />
            <Route path="savannah" element={<SavannahCC />} />
            <Route path="aiken" element={<AikenCC />} />
            <Route path="greenville" element={<GreenvilleCC />} />
            <Route path="lenior" element={<LeniorCC />} />
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
