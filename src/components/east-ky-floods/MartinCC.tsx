import { Typography } from '@mui/material'
import React from 'react'
import PopoutLink from '../PopoutLink'
import Assignments from './Assignments'
import Contacts from './Contacts'
import CrewLeaderChecklist from './CrewLeaderChecklist'
import ItemsOfConsideration from './ItemsOfConsideration'
import SundayServices from './SundayServices'

const contacts = [
  {
    title: 'Address',
    body: <>
      75 Autumn Drive<br />
      Martin, KY 41649-8504
    </>
  },
  {
    title: 'Command Center Director',
    body: <>
      President Gary Mangelson<br />
      (614) 946-8499 
    </>
  },
  {
    title: 'Command Center Hotline',
    body: <>
      (859) 429-1905
    </>
  },
  {
    title: 'Area ERC Oversight',
    body: <>
      Krista Donohoe<br />
      (850) 982-8499
    </>
  },
  {
    title: 'Area ERC Oversight',
    body: <>
      Michael Lavoie<br />
      (352) 672-0455
    </>
  }
]

const assignedStakes = [
  'Cincinnati Ohio',
  'Charleston, West Virginia',
  'Roanoke, Virginia',
  'Buena Vista, Virginia',
  'Waynesboro, Virginia',
  'Dayton, Ohio',
  'Dayton Ohio East',
  'Dayton Ohio North',
  'Zanesville Ohio',
]

export default function MartinCC() {
  return <>
    <Typography variant="h4" component="h1" sx={{ mb: 1 }}>East Kentucky Floods (August 2022)</Typography>
    <Typography variant="h5" component="h2" sx={{ mb: 3 }}>Martin Command Center</Typography>

    <Contacts contacts={contacts} />
    <p>
      Main camping at the command center site. Overflow camping as available at:<br/>
      <br/>
      Stumbo Park Baseball Fields<br/>
      <PopoutLink href="https://www.google.com/maps/place/Stumbo+Park/@37.6044099,-82.7293313,17z/data=!3m1!4b1!4m5!3m4!1s0x88450ff36c402d15:0x67947c3262568d36!8m2!3d37.6044057!4d-82.7271426">Stumbo Park Rd. Allen, KY 41601</PopoutLink><br/>
      (approximately 5 miles from command center)
    </p>

    <Assignments assignedStakes={assignedStakes} commandCenterName="Martin" />
    <CrewLeaderChecklist registrationLink='https://forms.gle/bH1z8iMwAo5L6NNv5' location='Martin, KY' />
    <ItemsOfConsideration />
    <SundayServices />
  </>
}