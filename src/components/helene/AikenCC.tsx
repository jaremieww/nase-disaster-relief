import { Typography } from 'antd'
import Address from "../Address";
import CommandCenter from "./CommandCenter";

const { Title } = Typography

export default () => <CommandCenter
  commandORoperation="Operations"
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
  email=""
  assignedStakes={[
    'Aiken, SC',
    'Augusta, GA',
    'West Columbia, SC',
    'Columbia, SC',
    'Hartsville, SC',
    'Myrtle Beach, SC',
  ]}
  phoneNumber="555-555-5555"
  registrationLink="https://forms.gle/dx4UHdZMg2XL1FMx9"
  closeoutFormLink=""
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
      <p>Camping for the Aiken Operations Center is located at:</p>
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
