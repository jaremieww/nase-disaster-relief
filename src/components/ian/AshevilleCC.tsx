import { Typography } from 'antd'
import Address from "../Address";
import CommandCenter from "./CommandCenter";

const { Title } = Typography

export default () => <CommandCenter
  name="Ashville"
  address={[
    '215 Northeast 8th Street',
    'CHIEFLAND, Florida 32626'
  ]}
  campingAddress={[
    'do not know',
    'CHIEFLAND, Florida 32626'
  ]}
  campingAddressNote={
    <>
      RV and Heavy Equipment Parking<br />
      <Address address={[
        'unknown',
        'Valdosta, GA'
      ]} />
    </>
  }
  email="nase.command1@gmail.com"
  assignedStakes={[
    'Gainesville, FL',
    'Jacksonville FL West',
    'Lake Mary, FL',
    'Leesburg, FL',
    'Orlando, FL',
    'Orlando FL West',
    'Ocala, FL',
  ]}
  phoneNumber="941-876-8088"
  registrationLink="https://forms.gle/CCgUS8mxFoy443eg9"
  closeoutFormLink="https://forms.gle/H8LAkr32NU1HYshM6"
  areaOversight={[{
    name: 'Keith Nash',
    phoneNumber: '904-555-0623'
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
        'CHIEFLAND, Florida 32626'
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
