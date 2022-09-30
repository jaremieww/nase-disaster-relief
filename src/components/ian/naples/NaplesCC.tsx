import { Typography } from 'antd'
import React from 'react'
import Assignments from './Assignments'
import Contacts from './Contacts'
import CrewLeaderChecklist from './CrewLeaderChecklist'
import ItemsOfConsideration from './ItemsOfConsideration'
import PopoutLink from '../../PopoutLink'
import { Alert } from 'antd'

const { Title, Paragraph } = Typography

const contacts = [
  {
    title: 'Command Center Hotline',
    body: <>
      (941) 867-0259
    </>
  },
  {
    title: 'Command Center Director',
    body: <>
      President Joseph Lindsey<br />
      (239) 877-7250
    </>
  },
  {
    title: 'Area ERC Oversight',
    body: <>
      Krista Donohoe<br />
      (850) 982-8499
    </>
  }
]

const assignedStakes = [
  'Miami Lakes, FL',
  'Miami, FL',
  'Fort Lauderdale, FL',
]

export default function NaplesCC() {
  return <>
    <Title level={2}>Hurricane Ian</Title>
    <Title level={3}>Naples Command Center</Title>
    <p>
      4935 23rd Ct SW<br />
      Naples, FL 34116<br />
    </p>

    <p>Please check <PopoutLink href="https://fl511.com">https://fl511.com</PopoutLink> for traffic updates and maps of the state of Florida.</p>

    <Contacts contacts={contacts} />

    <Alert showIcon type="warning" message="Weekend of October 1, 2022" description={<>
      <Paragraph>
        Fuel, water, and electricity are not available in the area. Please plan to refuel your vehicle before reaching the disaster zone 
        so that you have sufficient supply to drive to work areas and return to a location where you can purchase fuel. If possible, bring an extra supply of fuel with you.
      </Paragraph>

      <Paragraph>
        The work this weekend is Saturday only. There will be no camping this weekend. Workers are asked to be at the command center by 9 AM and plan to work all day.
      </Paragraph>

      <Paragraph>
        Please come self sufficient with your own tools, food, water, gas, etc. Tools needed are chain saw, shovels, pry bars,
        items that can help with a muck out, and ladders for tarping. Rakes will also be needed for debris cleanup.
        The Command Center will have supplies to supplement what you have. However, ladders will not be available at the Command Center.
      </Paragraph>
    </>} />

    <Assignments assignedStakes={assignedStakes} commandCenterName="Naples" />
    <CrewLeaderChecklist registrationLink="https://forms.gle/BfpTdBsCejFKyy146" location='Naples, Florida' />
    <ItemsOfConsideration />
    {/* <SundayServices /> */}

    {/* <section>
      <h2>Additional Information</h2>

      <PopoutLink href="https://vimeo.com/460689734/f3f004e35c">Installing Shower Stalls</PopoutLink>
    </section> */}
  </>
}