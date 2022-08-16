import { Typography } from '@mui/material'
import React from 'react'
import Assignments from './Assignments'
import Contacts from './Contacts'
import CrewLeaderChecklist from './CrewLeaderChecklist'
import ItemsOfConsideration from './ItemsOfConsideration'
import SundayServices from './SundayServices'

const contacts = [
  {
    title: 'Address',
    body: <>
      106 Rock Ridge Roade<br />
      Hazard, KY 41701-9431
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
    title: 'Command Center Hotline',
    body: <>
      (502) 438-8315
    </>
  },
  {
    title: 'Area ERC Oversight',
    body: <>
      Craig Bell<br />
      (801) 616-1015
    </>
  },
  {
    title: 'Area ERC Oversight',
    body: <>
      Stephen Greenhalgh<br />
      (703) 627-0036
    </>
  }
]

const assignedStakes = [
  'Crestwood, Kentucky',
  'Elizabethtown, Kentucky',
  'Lexington, Kentucky',
  'Louisville, Kentucky',
  'Kingsport, Tennessee',
]

export default function HazardCC() {
  return <>
    <Typography variant="h4" component="h1" sx={{ mb: 1 }}>East Kentucky Floods (August 2022)</Typography>
    <Typography variant="h5" component="h2" sx={{ mb: 3 }}>Hazard Command Center</Typography>

    <Contacts contacts={contacts} />
    <Assignments assignedStakes={assignedStakes} commandCenterName="Hazard" />
    <CrewLeaderChecklist registrationLink="https://forms.gle/BfpTdBsCejFKyy146" location='Hazard, Kentucky' />
    <ItemsOfConsideration />
    <SundayServices />
  </>
}