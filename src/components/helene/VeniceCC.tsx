import { Typography } from 'antd'
import Address from "../Address";
import CommandCenter from "./CommandCenter";

const { Title } = Typography

export default () => <CommandCenter
  commandORoperation="Operations"
  name="Venice"
  address={[
    '3000 East Venice Avenue',
    'VENICE, Florida 34292-2529'
  ]}
  campingAddress={[
    '3000 East Venice Avenue',
    'VENICE, Florida 34292-2529'
  ]}
  campingAddressNote={
    <>
      RV and Heavy Equipment Parking<br />
      <Address address={[
        '3000 East Venice Avenue',
        'VENICE, Florida 34292-2529'
      ]} />
    </>
  }
  email="ian.venicecc@gmail.com"
  assignedStakes={[
    'Coral Springs FL*',
    'Miami FL',
    'Miami Lakes FL',
    'Naples FL',
    'Sarasota FL ^',
  ]}
  phoneNumber="904-990-5797"
  registrationLink="https://forms.gle/5DvjkRJ78bJRZoQ1A"
  closeoutFormLink=""
  areaOversight={[{
    name: 'Keith Nash',
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
      <p>Camping for the Venice Commmand Center is located at:</p>
      <Address address={[
        '3000 East Venice Avenue',
        'VENICE, Florida 34292-2529'
      ]} />
    </section>
  </>}
  sundayServices={<section style={{ marginTop: '40px' }}>
    <Title level={4}>Sunday Services</Title>
    <p>
      A short Sacrament meeting will be held at the campsite on Sunday morning at 7:30 AM. Members should come in clean work clothes. Following the meeting, crews should plan to continue working.
    </p>
  </section>}
   fuelAvailability="limited"
/>
