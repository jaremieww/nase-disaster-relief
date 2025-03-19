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
import HeleneIndex from './components/helene/Index'
import ValdostaCC from './components/helene/ValdostaCC'
import MadisonCC from './components/helene/MadisonCC'
import ChieflandCC from './components/helene/ChieflandCC'
import WaycrossCC from './components/helene/WaycrossCC'
import AshevilleCC from './components/helene/AshevilleCC'
import DouglasCC from './components/helene/DouglasCC'
import StPetersburgCC from './components/helene/StPetersburgCC'
import LakeCityCC from './components/helene/LakeCityCC'
import SavannahCC from './components/helene/SavannahCC'
import AikenCC from './components/helene/AikenCC'
import LenoirCC from './components/helene/LenoirCC'
import GreenvilleCC from './components/helene/GreenvilleCC'
import AugustaCC from './components/helene/AugustaCC'
import VeniceCC from './components/helene/VeniceCC'
import FtMyersCC from './components/helene/FtMyersCC'
import NaplesCC from './components/helene/NaplesCC'
import JohnsonCityCC from './components/helene/JohnsonCityCC'
import DaytonaBeachCC from './components/helene/DaytonaBeachCC'
import NewPortRicheyCC from './components/helene/NewPortRicheyCC'
import BradentonCC from './components/helene/BradentonCC'
import ScercyCC from './components/MOARTornados/scercyCC'
import RollaCC from './components/MOARTornados/rollaCC'
import MATornadosIndex from './components/MOARTornados/Index'
import CommunicationsTrainingMaterials from './CommunicationsTrainingMaterials';
import FAQs from './FAQs'
import BestPractices from './BestPractices'
import SuggestionBox from './SuggestionBox'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <AntApp />
        }>
          <Route path="training" element={<Training />} />
          <Route path="faqs" element={<FAQs />} />
          <Route path="bestpractices" element={<BestPractices />} />
          <Route path="suggestionbox" element={<SuggestionBox />} />
          <Route path="crew-leader-checklist" element={<CrewLeaderChecklist />} />
          <Route path="call-center" element={<CallCenterTrainingMaterials />} />
          <Route path="communications" element={<CommunicationsTrainingMaterials />} />
          <Route path="command-center" element={<CommandCenterTrainingMaterials />} />
          <Route path="helene">
            <Route index element={<HeleneIndex />} />
            <Route path="johnsoncity" element={<JohnsonCityCC />} />
            <Route path="greenville" element={<GreenvilleCC />} />
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
            <Route path="augusta" element={<AugustaCC />} />
            <Route path="lenoir" element={<LenoirCC />} />
            <Route path="venice" element={<VeniceCC />} />
            <Route path="ftmyers" element={<FtMyersCC />} />
            <Route path="naples" element={<NaplesCC />} />
            <Route path="daytonabeach" element={<DaytonaBeachCC />} />
            <Route path="newportrichey" element={<NewPortRicheyCC />} />
            <Route path="bradenton" element={<BradentonCC />} />
          </Route>
          <Route path="matornados">
            <Route index element={<MATornadosIndex />} />
            <Route path="scercy" element={<ScercyCC />} />
            <Route path="rolla" element={<RollaCC />} />
          </Route>
          <Route path="helene/helene">
            <Route index element={<HeleneIndex />} />
            <Route path="johnsoncity" element={<JohnsonCityCC />} />
            <Route path="greenville" element={<GreenvilleCC />} />
            <Route path="valdosta" element={<ValdostaCC />} />
            <Route path="madison" element={<MadisonCC />} />
            <Route path="chiefland" element={<ChieflandCC />} />
            <Route path="waycross" element={<WaycrossCC />} />
            <Route path="augusta" element={<AugustaCC />} />
            <Route path="asheville" element={<AshevilleCC />} />
            <Route path="douglas" element={<DouglasCC />} />
            <Route path="stpetersburg" element={<StPetersburgCC />} />
            <Route path="lakecity" element={<LakeCityCC />} />
            <Route path="savannah" element={<SavannahCC />} />
            <Route path="aiken" element={<AikenCC />} />
            <Route path="augusta" element={<AugustaCC />} />
            <Route path="lenoir" element={<LenoirCC />} />
            <Route path="venice" element={<VeniceCC />} />
            <Route path="ftmyers" element={<FtMyersCC />} />
            <Route path="naples" element={<NaplesCC />} />
            <Route path="daytonabeach" element={<DaytonaBeachCC />} />
            <Route path="newportrichey" element={<NewPortRicheyCC />} />
            <Route path="bradenton" element={<BradentonCC />} />
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
