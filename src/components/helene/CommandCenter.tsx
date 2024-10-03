import { Alert, Button, Card, List, Space, Typography } from 'antd'
import { CheckCircleOutlined, ClockCircleOutlined } from '@ant-design/icons'
import PopoutLink from "../PopoutLink"
import { S3Link } from "../S3"
import React, { ReactNode } from 'react'
import Address from '../Address'
import PhoneNumber from '../PhoneNumber'
import EmailAddress from '../EmailAddress'

const { Text, Title } = Typography

export type CommandCenterProps = {
  commandORoperation: string
  name: string
  phoneNumber: string
  address: string[]
  email: string
  campingAddress?: string[]
  campingAddressLink?: string
  campingAddressNote?: ReactNode
  registrationLink: string
  closeoutFormLink?: string
  bigmessage?: string
  fuelAvailability: string

  director?: {
    name: string
    phoneNumber: string
  }

  areaOversight: {
    name: string
    phoneNumber: string
  }[]

  assignedStakes: string[]

  additionalInformation?: ReactNode
  afterAssignments?: ReactNode
  sundayServices?: ReactNode
}

const CommandCenter = (props: CommandCenterProps) => {
  const contacts = [
    {
      title: 'Team Captain Return & Report',
      body: <>
        <PhoneNumber phoneNumber={props.phoneNumber} /> (text or call)<br />
        <EmailAddress email={props.email} />
      </>
    }]
  if (props.director) {
    contacts.push({
      title: 'Center Director',
      body: <>
        {props.director.name}<br />
        <PhoneNumber phoneNumber={props.director.phoneNumber} />
      </>
    })
  }

  if (props.areaOversight.length > 0) {
    contacts.push({
      title: 'Area ERC Oversight',
      body: <>
        {props.areaOversight.length && props.areaOversight.map(x => <React.Fragment key={x.name}>
          {x.name}<br />
          <PhoneNumber phoneNumber={x.phoneNumber} /><br />
        </React.Fragment>)}
      </>
    })

  }

  const addresses: { name: string, address: string[], addressLink?: string, note?: ReactNode }[] = [
    { name: "Center Location", address: props.address },
  ]
  if (props.campingAddress) {
    addresses.push({
      name: 'Campground',
      address: props.campingAddress,
      addressLink: props.campingAddressLink,
      note: props.campingAddressNote
    })
  }

  return <>
    <Title level={2}>Hurricane Helene</Title>

    {props.name==="Asheville" ?  <a href="https://sites.google.com/view/ashevillecommandcenter/home">
        <Button type="primary">-------&gt;CLICK HERE for the New and Improved Asheville Page&lt;-------</Button>
      </a> : ''}

    <Title level={3}>{props.name} {props.commandORoperation} Center</Title>



    <List
      grid={{ gutter: 24 }}
      dataSource={addresses}
      renderItem={(item) => <List.Item>
        <Card title={item.name} bordered={false} size="small">
          <Address address={item.address!} addressLink={item.addressLink} />
          {item.note}
        </Card>
      </List.Item>} />
    <h2>{props.bigmessage}</h2>
    
    
    
    <Contacts contacts={contacts} />

    <Assignments assignedStakes={props.assignedStakes} commandCenterName={props.name} commandORoperation={props.commandORoperation} registrationLink={props.registrationLink} closeoutFormLink={props.closeoutFormLink} />
    {props.afterAssignments}
    <CrewLeaderChecklist registrationLink={props.registrationLink} location={props.name} commandORoperation={props.commandORoperation}/>
    <ItemsOfConsideration 
      commandCenterPhoneNumber={props.phoneNumber} 
      commandCenterEmail={props.email} 
      commandORoperation={props.commandORoperation}
      fuelAvailability={props.fuelAvailability}
      closeoutFormLink={props.closeoutFormLink} 
    />
    {props.additionalInformation}
    { props.sundayServices ?? <SundayServices commandORoperation={props.commandORoperation} /> }

    <section>
      <h2>Additional Information</h2>

      
    </section>
  </>
}
export default CommandCenter

type AssignmentsProps = {
  assignedStakes: string[]
  commandCenterName: string,
  commandORoperation: string,
  registrationLink: string,
  closeoutFormLink?: string
}
const Assignments = ({ assignedStakes, commandCenterName, commandORoperation, registrationLink, closeoutFormLink }: AssignmentsProps) => <section>
  <Space direction='vertical' style={{ marginBottom: '24px' }}>
    {registrationLink &&
      <Space style={{ marginTop: '16px' }} wrap>
        <strong>Team Captains:</strong>
        <Button type="primary" icon={<CheckCircleOutlined />} href={registrationLink} target="_blank">Register your Team</Button>
        { closeoutFormLink && <Button icon={<ClockCircleOutlined />} href={closeoutFormLink} target="_blank">Close-out your Team</Button> }

      </Space>
    }

    <p>
      <Text type="success">All teams must check into the {commandORoperation} Center assigned&mdash;<em>No exceptions</em></Text><br />
      Remember to pick up your branded yellow T-shirts and register (if not done so)
    </p>

    <p>Teams can start showing up Friday evening and get checked in starting at 6pm.</p>

    <h3>Stakes assigned to {commandCenterName} {commandORoperation} Center</h3>
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {assignedStakes.map(x => <li key={x}>{x}</li>)}
    </ul>
    <p>
      * Stake Assigned to lead at the {commandORoperation} Center</p>
      <p>
      All volunteers must be organized into teams with a team captain and assistant team captain before arriving at the {commandORoperation} Center.
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
  return <List
    dataSource={contacts}
    grid={{ gutter: 24 }}
    rowKey={(c: Contact) => c.title}
    renderItem={(c: Contact) => <List.Item>
      <Card title={c.title} size="small" bordered={false}>
        {c.body}
      </Card>
    </List.Item>}
  />
}

type CrewLeaderChecklistProps = {
  registrationLink: string,
  location: string,
  commandORoperation: string,
}

function CrewLeaderChecklist({ registrationLink, location, commandORoperation }: CrewLeaderChecklistProps) {
  return <>
    <Title level={3}>Crew Leader Checklist</Title>
    <Training commandORoperation={commandORoperation} />
    <CheckIn registrationLink={registrationLink} location={location} commandORoperation={commandORoperation}  />
  </>
}

type TrainingProps = {
  commandORoperation: string,
}

function Training({commandORoperation}: TrainingProps) {
  return <Space direction="vertical" style={{ marginTop: '40px' }}>
    <Title level={4}>Training Materials</Title>
    <ul>
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
      The {commandORoperation} Center will be the one who assigns you work orders.
    </>} />
  </Space>
}

type CheckInProps = { registrationLink: string, location: string, commandORoperation: string, }
function CheckIn({ registrationLink, location, commandORoperation }: CheckInProps) {
  return <section style={{ marginTop: 40 }}>
    <h3>Check-In</h3>
    <p>When arriving at the {commandORoperation} Center, team captains check in and:</p>
    <ul>
      <li>Fill out crew registration form. {registrationLink && <>If possible, please <PopoutLink href={registrationLink}>pre-register.</PopoutLink></>}</li>
      <li><S3Link path="ian/florida-dashboard-placard.pdf">Print a vehicle placard</S3Link> to put in dash of each vehicle.</li>
      <li>Pick up work order and blank work order forms—to be used to help those who may not have a work order listed in Crisis Cleanup. It may be a neighbor of the person you are helping.</li>
      <li>Receive or report mandatory training at the {commandORoperation} Center in {location}. The training videos can be viewed online (see links above).</li>
      <li>Meanwhile, your remaining crew members will gather T-shirts and supplies (including water to leave with those you help).</li>
      <li>Ideally, every crew should have at least one person trained to enter, view, and close work orders in <a href="https://crisiscleanup.org">Crisis Cleanup</a>.</li>
      <li>
        All crew members accepting work orders where tree work will be done must complete the&nbsp;
        <a href="https://www.churchofjesuschrist.org/callings/church-safety-and-health/chainsaw-safety?lang=eng">mandatory online chainsaw instruction</a> or show a certificate.
        The {commandORoperation} Center will be the one who assigns you work orders.
      </li>
      <li><a href="/crew-leader-checklist#share">Share your experiences!</a></li>
    </ul>
  </section>
}

type ItemsOfConsiderationProps = { 
  commandCenterPhoneNumber: string, 
  commandCenterEmail: string, 
  commandORoperation: string,
  fuelAvailability: string,
  closeoutFormLink?: string,
}
function ItemsOfConsideration({ commandCenterPhoneNumber, commandCenterEmail, commandORoperation, fuelAvailability, closeoutFormLink }: ItemsOfConsiderationProps) {
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
    {commandORoperation} Center hours are 7am-10pm.
    </p>

    <Title level={5}>Camping</Title>
    <p>Portable toilets, showers, and places for tents are available near the {commandORoperation} Center. Bring all your own needed supplies for the camping experience. <em>No workers inside the building, please!</em></p>

    <Title level={5}>Be Self-Sustaining</Title>
    <p>Bring food, water, and camping supplies. Fuel is {fuelAvailability} in the area. Use portable toilets and avoid going into the building.</p>

    <Title level={5}>{commandORoperation} Center Supplies</Title>
    <p>
      There will be bottled water, T-shirts, shovels, rakes, gloves, chainsaws (limited), tarps, fir strips, hammers, cleaning kits, first aid kits, eye protection, hand trucks/wheelbarrows, and sleds at the {commandORoperation} Center.
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
    <p>Be unified. Before arriving at the {commandORoperation} Center, organize the work teams each team should be around 10-15 members. Each team should have an assigned team captain and an assistant team captain.</p>

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
            Call, text, or email the {commandORoperation} Center to report your information (<PhoneNumber phoneNumber={commandCenterPhoneNumber} /> or <EmailAddress email={commandCenterEmail} />).
          </li>
          {closeoutFormLink &&
            <li>Complete the <a href={closeoutFormLink}>Team Close-out form</a> and return supplies to the {commandORoperation} Center by noon on Sunday.</li>
          }
        </ol>
      </li>
    </ul>

    <Title level={5}>If you finish all of your work orders, choose one of the following options</Title>
    <ol>
      <li>Check crisiscleanup.org or the Crisis Cleanup app for other nearby jobs that might be unclaimed.</li>
      <li>Look for someone nearby who could use some help. Get their permission and be sure to fill out a paper work-order form (or use the intake for on crisiscleanup.org)</li>
      <li>Call the {commandORoperation} Center to receive another job (<PhoneNumber phoneNumber={commandCenterPhoneNumber} />).</li>
      <li>Return to the {commandORoperation} Center to receive more work orders and supplies if needed.</li>
      <li><strong>Return and Report.</strong> It is so critical that you report your efforts to the {commandORoperation} Center! You can report by calling the {commandORoperation} Center (<PhoneNumber phoneNumber={commandCenterPhoneNumber} />).</li>
    </ol>

    <Title level={5}>Be sure to separate debris types on the side of the road</Title>
    <p>Keep the roadway clear.</p>
  </section>
}

type SundayServicesProps = {
  commandORoperation: string,
}

function SundayServices( { commandORoperation }: SundayServicesProps ) {
  return <section style={{ marginTop: '40px' }}>
    <Title level={4}>Sunday Services</Title>

    <p>
      A short Sacrament meeting will be held at the {commandORoperation} Center on Sunday morning at 7:30 AM. Members should come in clean work clothes. Following the meeting, crews should plan to continue working.
    </p>
  </section>
}