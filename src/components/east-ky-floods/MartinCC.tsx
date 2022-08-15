import { Typography } from '@mui/material'
import React from 'react'
import Assignments from './Assignments'
import Contacts from './Contacts'
import Covid from './Covid'
import CrewLeaderChecklist from './CrewLeaderChecklist'
import ItemsOfConsideration from './ItemsOfConsideration'
import SundayServices from './SundayServices'
import Training from './Training'

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
    title: 'Work Orders',
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
  'Akron Ohio',
  'Cincinnati Ohio East',
  'Cincinatti Ohio North',
  'Cleveland Ohio',
  'Columbus Ohio',
  'Columbus Ohio North',
  'Columbus Ohio East',
  'Columbus Ohio South',
  'Zanesville Ohio',
]

export default function MartinCC() {
  return <>
    <Typography variant="h4" component="h1" sx={{ mb: 1 }}>East Kentucky Floods (August 2022)</Typography>
    <Typography variant="h5" component="h2" sx={{ mb: 3 }}>Martin Command Center</Typography>

    <Contacts contacts={contacts} />
    <Assignments assignedStakes={assignedStakes} />
    <CrewLeaderChecklist />
    <ItemsOfConsideration />
    <SundayServices />
    <Training />
  </>
}