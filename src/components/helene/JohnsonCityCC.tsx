import { Typography } from 'antd'
import Address from "../Address";
import CommandCenter from "./CommandCenter";

const { Title } = Typography

export default () => <CommandCenter
  commandORoperation="Operations"
  name="Johnson City"
  address={[
    '211 Mayflower Rd', 
    'Johnson City, TN 37601'
  ]}
  campingAddress={[
    '211 Mayflower Rd', 
    'Johnson City, TN 37601'
  ]}
  campingAddressNote={
    <>
      RV and Heavy Equipment Parking<br />
      <Address address={[
        '211 Mayflower Rd', 
        'Johnson City, TN 37601'
      ]} />
    </>
  }
  email=""
  assignedStakes={[
    
  ]}
  phoneNumber="555-555-5555"
  registrationLink=""
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
        '211 Mayflower Rd', 
        'Johnson City, TN 37601'
      ]} />
    </section>
  </>}

  campingInfo = {
    <>
      <div>
        <p>Portable toilets, showers, and places for tents are at the campsite. Bring all your own needed supplies for the camping experience.</p>
      </div>
    </>
  }

  sundayServices={<section style={{ marginTop: '40px' }}>
    <Title level={4}>Sunday Services</Title>
    <p>
      A short Sacrament meeting will be held at the campsite on Sunday morning at 7:30 AM. Members should come in clean work clothes. Following the meeting, crews should plan to continue working.
    </p>
  </section>}
   fuelAvailability="severely limited"
/>
