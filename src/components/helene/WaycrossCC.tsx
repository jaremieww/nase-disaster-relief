import { Typography } from 'antd'
import Address from "../Address";
import CommandCenter from "./CommandCenter";

const { Title } = Typography

export default () => <CommandCenter
  commandORoperation="Command"
  name="Waycross"
  address={[
    '2095 Central Avenue',
    'WAYCROSS, Georgia 31503'
  ]}
  campingAddress={[
    '2095 Central Avenue',
    'WAYCROSS, Georgia 31503'
  ]}
  campingAddressNote={
    <>
      RV and Heavy Equipment Parking<br />
      <Address address={[
        '2095 Central Avenue',
        'WAYCROSS, Georgia 31503'
      ]} />
    </>
  }
  email="ian.venicecc@gmail.com"
  assignedStakes={[
    'Kingsland, GA',
    'Newnan, GA',
  ]}
  phoneNumber="904-902-8063"
  registrationLink=""
  closeoutFormLink=""
  bigmessage="Report to Sara Ker at 303-847-6428 or Sara.Ker@hotmail.com"
  areaOversight={[{
    name: 'Jaremie Woodruff',
    phoneNumber: '904-864-0623'
  },
  {
    name: 'Daryl Blount',
    phoneNumber: '678-641-5957'
  }
  ]}
  director={{
    name: 'Shaw McVeigh',
    phoneNumber: '912-617-7946'
  }}
  afterAssignments={<>
    <p>
      Teams should meet at the campsite location.
      There are showers, restrooms, water, gloves, and t-shirts available there.
      The Church building will only be used for picking up supplies.
      There is no parking at the church building.
    </p>
  </>}
  additionalInformation={<>
    <section style={{ marginTop: 24 }}>
      <Title level={4}>Camping</Title>
      <p>Camping for the Waycross Commmand Center is located at:</p>
      <Address address={[
        'do not know',
        'WAYCROSS, Georgia 31503'
      ]} />
    </section>
  </>}
  sundayServices={<section style={{ marginTop: '40px' }}>
    <Title level={4}>Sunday Services</Title>
    <p>
      A short Sacrament meeting will be held at the church on Sunday morning at 8:00 AM. Members should come in clean work clothes. Following the meeting, crews should plan to continue working.
    </p>
  </section>}
   fuelAvailability="limited" 
/>
