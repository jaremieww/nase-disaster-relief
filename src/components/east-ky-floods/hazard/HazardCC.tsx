import { Typography } from '@mui/material'
import React from 'react'
import Assignments from './Assignments'
import Contacts from './Contacts'
import CrewLeaderChecklist from './CrewLeaderChecklist'
import ItemsOfConsideration from './ItemsOfConsideration'
import SundayServices from '../SundayServices'
import PopoutLink from '../../PopoutLink'

const contacts = [
  {
    title: 'Command Center Hotline',
    body: <>
      (502) 438-8315
    </>
  },
  {
    title: 'Command Center Director',
    body: <>
      President Glen Krebs<br />
      (859) 552-8804
    </>
  },
  {
    title: 'Area ERC Oversight',
    body: <>
      Craig Bell<br />
      (801) 616-1015 or<br />
      (502) 438-8315
    </>
  },
]

const assignedStakes = [
  'Crestwood, Kentucky',
  'Elizabethtown, Kentucky',
  'Kingsport, Tennessee',
  'Lexington, Kentucky',
  'Louisville, Kentucky',
  'New Albany, Indiana'
]

export default function HazardCC() {
  return <>
    <Typography variant="h4" component="h1" sx={{ mb: 1 }}>East Kentucky Floods (August 2022)</Typography>
    <Typography variant="h5" component="h2" sx={{ mb: 3 }}>Hazard Command Center</Typography>
    <p>
      106 Rock Ridge Road<br />
      Hazard, KY 41701-9431<br />

      Please check <PopoutLink href="https://goky.ky.gov">https://goky.ky.gov</PopoutLink> for traffic updates and maps of the state of Kentucky.
    </p>

    <Contacts contacts={contacts} />

    <Assignments assignedStakes={assignedStakes} commandCenterName="Hazard" />
    <CrewLeaderChecklist registrationLink="https://forms.gle/BfpTdBsCejFKyy146" location='Hazard, Kentucky' />
    <ItemsOfConsideration />
    <SundayServices />

    <section>
      <h2>Additional Information</h2>

      <PopoutLink href="https://vimeo.com/460689734/f3f004e35c">Installing Shower Stalls</PopoutLink>

      <h3>Overflow Parking Locations</h3>
      <ol>
        <li>
          <PopoutLink href="https://www.google.com/maps/place/Robetta+Baker/@37.2750038,-83.2258729,313m/data=!3m1!1e3!4m13!1m7!3m6!1s0x8844c88c5bedbb27:0x485ecf9d61641623!2sHazard,+KY!3b1!8m2!3d37.24954!4d-83.1932284!3m4!1s0x8844c7df144fffff:0xab4b30411be6605a!8m2!3d37.2760898!4d-83.225468">311 Roy Campbell Dr, Hazard, KY 41701</PopoutLink><br/>
          Parking allowed Friday 5 PM - Sunday Evening
        </li>
        <li>
          <PopoutLink href="https://www.google.com/maps/place/Appalachian+Heart+and+Vascular+Institute/@37.2735654,-83.2260905,313m/data=!3m1!1e3!4m13!1m7!3m6!1s0x8844c88c5bedbb27:0x485ecf9d61641623!2sHazard,+KY!3b1!8m2!3d37.24954!4d-83.1932284!3m4!1s0x8844c926c986395d:0x29ed423073fc0f73!8m2!3d37.2743629!4d-83.2265612">243 Roy Campbell Dr suite b, Hazard, KY 41701</PopoutLink><br/>
          Parking allowed Friday 5 PM - Sunday Evening
        </li>
        <li>The Parking lot located next to the Hazard Fire Station
          Next to <PopoutLink href="https://www.google.com/maps/place/276+Roy+Campbell+Dr,+Hazard,+KY+41701/@37.2735473,-83.2264366,106m/data=!3m1!1e3!4m13!1m7!3m6!1s0x8844c88c5bedbb27:0x485ecf9d61641623!2sHazard,+KY!3b1!8m2!3d37.24954!4d-83.1932284!3m4!1s0x8844c8759e4409f7:0x45f48b27cfeac393!8m2!3d37.2734458!4d-83.2264043">276 Roy Campbell Dr, Hazard, KY 41701</PopoutLink><br/>
          This is the ARH Employee Parking Lot<br/>
          Parking allowed Friday 8:00 PM - Sunday Evening
        </li>
      </ol>

      President Clement—Mobile (801) 471-4039

      <img src="/hazard-map.png" alt="camping map"/>
    </section>
  </>
}