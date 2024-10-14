import { Typography } from 'antd'
import Address from "../Address";
import CommandCenter from "./CommandCenter";

const { Title } = Typography

export default () => <CommandCenter
  commandORoperation="Command"
  name="Asheville"
  address={[
    '3401 Sweeten Creek Road',
    'ARDEN, North Carolina 28704-2507'
  ]}
  campingAddress={[
    'do not know',
    'ARDEN, North Carolina 28704'
  ]}
  campingAddressNote={
    <>
      RV and Heavy Equipment Parking<br />
      <Address address={[
        'unknown',
        'ARDEN, North Carolina 28704'
      ]} />
    </>
  }
  email="NASECommandCenter1@gmail.com"
  assignedStakes={[
    '*Sugar Hill, GA',
    'Greenville SC East',
    'Greenville SC',
    'Asheville, NC',
  ]}
  phoneNumber="555-555-5555"
  registrationLink=""
  closeoutFormLink=""
  areaOversight={[{
    name: '',
    phoneNumber: ''
  },
  ]}
  director={{
    name: '',
    phoneNumber: ''
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
      <p>Camping for the Asheville Commmand Center is located at:</p>
      <Address address={[
        'do not know',
        'ARDEN, North Carolina 28704'
      ]} />
    </section>
  </>}
  sundayServices={<section style={{ marginTop: '40px' }}>
    <Title level={4}>Sunday Services</Title>
    <p>
      A short Sacrament meeting will be held at the campsite on Sunday morning at 7:30 AM. Members should come in clean work clothes. Following the meeting, crews should plan to continue working.
    </p>
  </section>}
   fuelAvailability="severely limited"
/>
