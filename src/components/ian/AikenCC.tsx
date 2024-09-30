import { Typography } from 'antd'
import Address from "../Address";
import CommandCenter from "./CommandCenter";

const { Title } = Typography

export default () => <CommandCenter
  name="Aiken"
  address={[
    '358 East Pine Log Road',
    'AIKEN, South Carolina 29803'
  ]}
  campingAddress={[
    'do not know',
    'AIKEN, South Carolina 29803'
  ]}
  campingAddressNote={
    <>
      RV and Heavy Equipment Parking<br />
      <Address address={[
        'unknown',
        'AIKEN, South Carolina 29803'
      ]} />
    </>
  }
  email="nase.command1@gmail.com"
  assignedStakes={[
    'Aiken, SC',
    'Augusta, GA',
  ]}
  phoneNumber="add phone here"
  registrationLink="https://forms.gle/CCgUS8mxFoy443eg9"
  closeoutFormLink="https://forms.gle/H8LAkr32NU1HYshM6"
  areaOversight={[{
    name: 'none',
    phoneNumber: 'n/a'
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
      <p>Camping for the Valdosta commmand center is located at:</p>
      <Address address={[
        'do not know',
        'AIKEN, South Carolina 29803'
      ]} />
    </section>
  </>}
  sundayServices={<section style={{ marginTop: '40px' }}>
    <Title level={4}>Sunday Services</Title>
    <p>
      A short Sacrament meeting will be held at the campsite on Sunday morning at 7:30 AM. Members should come in clean work clothes. Following the meeting, crews should plan to continue working.
    </p>
  </section>}
/>
