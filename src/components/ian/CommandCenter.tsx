import { Alert, Button, Card, Col, Row, Space, Typography } from 'antd'
import { CheckCircleOutlined, CompassOutlined } from '@ant-design/icons'
import PopoutLink from "../PopoutLink"
import { S3Link } from "../S3"
import React from 'react'
import platform from 'platform'

const { Text, Title, Paragraph } = Typography

export type CommandCenterProps = {
  name: string
  phoneNumber: string
  address: string[]
  registrationLink: string

  director?: {
    name: string
    phoneNumber: string
  }

  areaOversight?: {
    name: string
    phoneNumber: string
  }

  assignedStakes: string[]
}

const CommandCenter = (props: CommandCenterProps) => {
  const contacts = [
    {
      title: 'Command Center Hotline',
      body: <>
        {props.phoneNumber}
      </>
    }
  ]

  if (props.director) {
    contacts.push({
      title: 'Command Center Director',
      body: <>
        {props.director.name}<br />
        {props.director.phoneNumber}
      </>
    })
  }

  if (props.areaOversight) {
    contacts.push({
      title: 'Area ERC Oversight',
      body: <>
        {props.areaOversight.name}<br />
        {props.areaOversight.phoneNumber}
      </>
    })
  }

  const mapLink = platform.os?.family === 'iOS'
    ? `https://maps.apple.com?q=${encodeURIComponent(props.address.join('\n'))}`
    : `https://maps.google.com?q=${encodeURIComponent(props.address.join('\n'))}`

  return <>
    <Title level={2}>Hurricane Ian</Title>
    <Title level={3}>{props.name} Command Center</Title>
    <p>
      <PopoutLink href={mapLink}>
      {props.address.map(line => <React.Fragment key={line}>{line}<br /></React.Fragment>)}
      </PopoutLink>
    </p>

    <p>Please check <PopoutLink href="https://fl511.com">https://fl511.com</PopoutLink> for traffic updates and maps of the state of Florida.</p>

    <Contacts contacts={contacts} />

    <Alert showIcon type="warning" style={{ margin: '24px 0' }} message="Weekend of October 8-9, 2022" description={<>
      <Paragraph>
        Fuel, water, and electricity are not available in the area. Please plan to refuel your vehicle before reaching the disaster zone
        so that you have sufficient supply to drive to work areas and return to a location where you can purchase fuel. If possible, bring an extra supply of fuel with you.
      </Paragraph>

      <Paragraph>
        Please come self sufficient with your own tools, food, water, gas, etc. Tools needed are chain saws, shovels, pry bars,
        items that can help with a muck out, and ladders for tarping. Rakes will also be needed for debris cleanup.
        The Command Center will have supplies to supplement what you have. However, ladders will not be available at the Command Center.
      </Paragraph>
    </>} />

    <Assignments assignedStakes={props.assignedStakes} commandCenterName={props.name} registrationLink={props.registrationLink} />
    <CrewLeaderChecklist registrationLink={props.registrationLink} location={props.name} />
    <ItemsOfConsideration commandCenterPhoneNumber={props.phoneNumber} />
    <SundayServices />

    <section>
      <h2>Additional Information</h2>

      <PopoutLink href="https://vimeo.com/460689734/f3f004e35c">Installing Shower Stalls</PopoutLink>
    </section>
  </>
}
export default CommandCenter

type AssignmentsProps = {
  assignedStakes: string[]
  commandCenterName: string,
  registrationLink: string
}
const Assignments = ({ assignedStakes, commandCenterName, registrationLink }: AssignmentsProps) => <section>
  <Space direction='vertical' style={{ marginBottom: '24px' }}>
    {registrationLink &&
      <Space style={{ marginTop: '16px' }}>
        <strong>Team Captains:</strong>
        <Button type="primary" icon={<CheckCircleOutlined />} href={registrationLink} target="_blank">Register your Team</Button>
      </Space>
    }

    <p>
      <Text type="success">All teams must check into the Command Center assigned&mdash;<em>No exceptions</em></Text><br />
      Remember to pick up your helping hands T-shirts and register (if not done so)
    </p>

    <p>Teams can start showing up Friday evening and get checked in starting at 8pm.</p>

    <h3>Stakes assigned to {commandCenterName} Command Center</h3>
    <Row>
      {assignedStakes.map(x => <Col span={8} key={x}>{x}</Col>)}
    </Row>

    <p>
      All volunteers must be organized into teams with a team captain and assistant team captain before arriving at the Command Center.
      We recommend teams of 10-15. If you have not been assigned a team, please check with your Ward or Branch leadership.
    </p>

  </Space>
</section>


type Contact = {
  title: string,
  body: JSX.Element
}

type ContactsProps = { contacts: Contact[] }
function Contacts({ contacts }: ContactsProps) {
  return <Space direction="horizontal" align="start" size="large">
    {contacts.map((c, i) => <Card key={i} title={c.title} size="small" bordered={false}>
      {c.body}
    </Card>
    )}
  </Space>
}

type CrewLeaderChecklistProps = {
  registrationLink: string,
  location: string,
}

function CrewLeaderChecklist({ registrationLink, location }: CrewLeaderChecklistProps) {
  return <>
    <Title level={3}>Crew Leader Checklist</Title>
    <Training />
    <CheckIn registrationLink={registrationLink} location={location} />
  </>
}

function Training() {
  return <Space direction="vertical" style={{ marginTop: '40px' }}>
    <Title level={4}>Training Materials</Title>
    <ul>
      <li><PopoutLink href="https://www.youtube.com/watch?v=ot4LZjtK0xo">Crisis Cleanup</PopoutLink></li>
      <li><PopoutLink href="https://www.churchofjesuschrist.org/media/video/2015-10-0100-emergency-response-volunteer-training?lang=eng">General Safety Video</PopoutLink></li>
      <li>
        <PopoutLink href="https://www.churchofjesuschrist.org/callings/church-safety-and-health/chainsaw-safety?lang=eng">
          Chainsaw Safety Video
        </PopoutLink>
        —Quiz included. See note below. View and <strong>print certificate.</strong>
      </li>
      <li><PopoutLink href="https://www.youtube.com/watch?v=vXWMj_TbDp4&amp;t=1s">Tarping a Roof</PopoutLink></li>
      <li><PopoutLink href="https://www.youtube.com/watch?v=eZWShxk4OSo">Mucking Out a House</PopoutLink></li>
    </ul>

    <Alert type="info" message="Note" showIcon description={<>
      First time or novice users of chainsaws cannot operate chainsaws during church emergency relief efforts, with or without the instruction above.
      No one under the age of 18 may operate a chainsaw.
      All users, regardless of experience, must view the instruction, take the quiz, and receive a certificate to operate at a Church sponsored event.
      All crew members accepting work orders where tree work will be done must complete the&nbsp;
      <PopoutLink href="https://www.google.com/url?q=https%3A%2F%2Fwww.churchofjesuschrist.org%2Fcallings%2Fchurch-safety-and-health%2Fchainsaw-safety%3Flang%3Deng&sa=D&sntz=1&usg=AOvVaw0YzKiTLeqgJsKa-HtNnvu0">mandatory online chainsaw instruction</PopoutLink> or show a certificate.
      The command center will be the one who assigns you work orders.
    </>} />
  </Space>
}

type CheckInProps = { registrationLink: string, location: string }
function CheckIn({ registrationLink, location }: CheckInProps) {
  return <section style={{ marginTop: 40 }}>
    <h3>Check-In</h3>
    <p>When arriving at the command center, team captains check in and:</p>
    <ul>
      <li>Fill out crew registration form. {registrationLink && <>If possible, please <PopoutLink href={registrationLink}>pre-register.</PopoutLink></>}</li>
      <li><S3Link path="ian/florida-dashboard-placard.pdf">Print a vehicle placard</S3Link> to put in dash of each vehicle.</li>
      <li>Pick up work order and blank work order forms—to be used to help those who may not have a work order listed in Crisis Cleanup. It may be a neighbor of the person you are helping.</li>
      <li>Receive or report mandatory training at the Command Center in {location}. The training videos can be viewed online (see links above).</li>
      <li>Meanwhile, your remaining crew members will gather T-shirts and supplies (including water to leave with those you help).</li>
      <li>Ideally, every crew should have at least one person trained to enter, view, and close work orders in <a href="https://crisiscleanup.org">Crisis Cleanup</a>.</li>
      <li>
        All crew members accepting work orders where tree work will be done must complete the&nbsp;
        <a href="https://www.churchofjesuschrist.org/callings/church-safety-and-health/chainsaw-safety?lang=eng">mandatory online chainsaw instruction</a> or show a certificate.
        The command center will be the one who assigns you work orders.
      </li>
      <li><a href="/crew-leader-checklist#share">Share your experiences!</a></li>
    </ul>
  </section>
}

type ItemsOfConsiderationProps = { commandCenterPhoneNumber: string }
function ItemsOfConsideration({ commandCenterPhoneNumber }: ItemsOfConsiderationProps) {
  return <section style={{ marginTop: '40px' }}>
    <Title level={4}>Items of Consideration</Title>


    <Title level={5}>Safety &amp; Skills</Title>
    <p>If a work team receives a work order or requrest to provide services that are beyond their skill set, appears to be unsafe, or just doesn't feel right, then please return that work order uncompleted.
      We are an unskilled volunteer workforce providing basic labor and moral support.
      <strong>There is no expectation that we undertake hazardous or specialized work.</strong>&nbsp;
      Ladders are needed for tarp jobs. Remember to <em>hydrate, hydrate, hydrate.</em>
    </p>

    <Title level={5}>Work Hours</Title>
    <p>Arrive either Friday night or Saturday morning. Work all day Saturday, until at least 1pm on Sunday.
      Command Center hours are 7am-10pm.
    </p>

    <Title level={5}>Camping</Title>
    <p>Portable toilets, shows, and places for tents are available near the command center. Bring all your own needed supplies for the camping experience. <em>No workers inside the building, please!</em></p>

    <Title level={5}>Be Self-Sustaining</Title>
    <p>Bring food, water, extra fuel, and camping supplies. Fuel is severely limited in the area. Use portable toilets and avoid going into the building.</p>

    <Title level={5}>Command Center Supplies</Title>
    <p>
      There will be bottled water, T-shirts, shovels, rakes, gloves, chainsaws (limited), tarps, fir strips, hammers, cleaning kits, first aid kits, eye protection, hand trucks/wheelbarrows, and sleds at the command center.
      Bring your own if possible. Water boots are recommended due to flooding in some areas.
    </p>

    <Title level={5}>Age &amp; Health Restrictions</Title>
    <p>Workers should be age 14 and up, and should be able to perform strenuous physical labor. If someone on a team is not able to perform physical labor they could help with ministering (see below) and do what they can to help.</p>

    <Title level={5}>Ministering</Title>
    <p>
      At least one member of the team should interface with the people we are helping, not to proselyte, but to offer comfort and hope and a message from the Savior.
      They will ask you who you are and where you come from.
      We have found it a good experience to offer to pray with the family and the work team as part of the process. Take pictures and video if appropriate. Ask for permission.
    </p>

    <Title level={5}>Work as a team</Title>
    <p>Be unified. Before arriving at the Command Center, organize the work teams each team should be around 10-15 members. Each team should have an assigned team captain and an assistant team captain.</p>

    <Title level={5}>Call ahead - Receive Permission - Close each Work Order</Title>
    <ul>
      <li>Check to see if the homeowner still needs help and is available to receive you</li>
      <li>Have the homeowner sign the work order if possible.</li>
      <li>Always receive permission of the homeowner before attempting any work at a property unless the work order states you can work without the owner present.</li>
      <li>
        Be sure to close each job in Crisis Cleanup when it is completed using one of the following methods

        <ol>
          <li>Use the QR code in the corner of each work order to access an online form where you can change the status of the job to "Closed, completed" (or the appropriate status).
            <strong>Be sure to enter the number of workers and the number of hours worked.</strong><br />
            <u>OR</u>
          </li>
          <li>
            Call or text the Command Center to report your information ({commandCenterPhoneNumber}).
          </li>
        </ol>
      </li>
    </ul>

    <Title level={5}>If you finish all of your work orders, choose one of the following options</Title>
    <ol>
      <li>Check crisiscleanup.org for other nearby jobs that might be unclaimed.</li>
      <li>Look for someone nearby who could use some help. Get their permission and be sure to fill out a paper work-order form (or use the intake for on crisiscleanup.org)</li>
      <li>Call the Command Center to receive another job ({commandCenterPhoneNumber}).</li>
      <li>Return to the command center to receive more work orders and supplies if needed.</li>
      <li><strong>Return and Report.</strong> It is so critical that you report your efforts to the command center!</li>
    </ol>

    <Title level={5}>Be sure to separate debris types on the side of the road</Title>
    <p>Keep the roadway clear.</p>
  </section>
}

function SundayServices() {
  return <section style={{ marginTop: '40px' }}>
    <Title level={4}>Sunday Services</Title>

    <p>
      A short Sacrament meeting will be held at the command center at on Sunday morning at 7:30 AM. Members should come in clean work clothes. Following the meeting, crews should plan to continue working.
    </p>
  </section>
}