import { Typography } from '@mui/material'
import React from 'react'
import Assignments from './Assignments'
import Contacts from './Contacts'
import Covid from './Covid'
import CrewLeaderChecklist from '../CrewLeaderChecklist'
import ItemsOfConsideration from './ItemsOfConsideration'
import SundayServices from './SundayServices'
import Training from './Training'

const contacts = [
  {
    title: 'Address',
    body: <>
      Bishop's Storehouse<br />
      480 Robert Blvd<br />
      Slidell, LA 70458
    </>
  },
  {
    title: 'Command Center Director',
    body: <>
      XXXXX XXXXXX<br />
      (XXX) XXX-XXXX
    </>
  },
  {
    title: 'Work Orders',
    body: <>
      XXXXX XXXXXX<br />
      (XXX) XXX-XXXX
    </>
  },
  {
    title: 'Supplies',
    body: <>
      XXXXX XXXXXX<br />
      (XXX) XXX-XXXX
    </>
  }
]

const assignedStakes = [
  'Birmingham, AL',
  'Fort Walton Beach, FL',
  'Gadsen, AL',
  'Gulfport, MS',
  'Monroe, LA',
  'Slidell, LA',
  'Tallahassee, FL',
  'Tifton, GA',
  'Tuscaloosa, AL',
]

export default function Slidell() {
  return <>
    <Typography variant="h4" component="h1" sx={{ mb: 1 }}>Hurricane Ida</Typography>
    <Typography variant="h5" component="h2" sx={{ mb: 3 }}>Slidell Command Center</Typography>

    <Contacts contacts={contacts} />
    <Assignments assignedStakes={assignedStakes} />
    <CrewLeaderChecklist />
    <ItemsOfConsideration />
    <Covid />
    <SundayServices />
    <Training />
  </>
}