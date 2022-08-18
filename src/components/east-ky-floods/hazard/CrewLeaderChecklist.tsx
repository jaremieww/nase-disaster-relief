import React from 'react'
import { Typography } from 'antd'
import PopoutLink from '../../PopoutLink'
import Training from './Training'

const { Title } = Typography

type Props = {
  registrationLink: string,
  location: string,
}

export default function CrewLeaderChecklist({registrationLink, location}: Props) {
  return <>
    <Title level={2}>Crew Leader Checklist</Title>


    <Training />

    <h3>Check-In</h3>
    <p>When arriving at the command center, team captains check in and:</p>
    <ul>
      <li>Fill out crew registration form. If possible, please <PopoutLink href={registrationLink}>pre-register.</PopoutLink></li>
      <li>Obtain placards paper to put in dash of each vehicle if needed</li>
      <li>Pick up work order and blank work order forms—to be used to help those who may not have a work order listed in Crisis Cleanup. It may be a neighbor of the person you are helping.</li>
      <li>Receive or report mandatory training at the Command Center in {location}. The training videos can be viewed online (see links above).</li>
      <li>Meanwhile, your remaining crew members will gather T-shirts and supplies (including water to leave with those you help).</li>
      <li>
        Ideally, every crew should have at least one person trained to enter, view, and close work orders in <a href="https://crisiscleanup.org">Crisis Cleanup</a>.
        Additionally, all crew members accepting work orders where tree work will be done must complete the&nbsp;
        <a href="https://www.churchofjesuschrist.org/callings/church-safety-and-health/chainsaw-safety?lang=eng">mandatory online chainsaw instruction</a> or show a certificate.
        The command center will be the one who assigns you work orders.
      </li>
    </ul>
  </>
}