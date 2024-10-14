import { Typography } from 'antd'
import Address from "../Address";
import CommandCenter from "./CommandCenter";

const { Title } = Typography

export default () => <CommandCenter
  commandORoperation="Operations"
  name="St Petersburg"
  address={[
    '9001 106th Ave N',
    'Largo FL 33777'
  ]}
  campingAddress={[
    'do not know',
    'Largo FL 33777'
  ]}
  campingAddressNote={
    <>
      RV and Heavy Equipment Parking<br />
      <Address address={[
        'NONE',
        'Largo FL 33777'
      ]} />
    </>
  }
  email=""
  assignedStakes={[
    '*Brandon, FL',
    'St Petersburg, FL',
    'Tampa, FL',
  ]}
  phoneNumber="813-344-4926"
  registrationLink=""
  closeoutFormLink=""
  areaOversight={[{
    name: '',
    phoneNumber: ''
  },
  ]}
  director={{
    name: 'Joe Caceres',
    phoneNumber: '813-419-2246'
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
      <p>Camping for the St Peterburg Operations Center is located at:</p>
      <Address address={[
        'do not know',
        'DUNEDIN, Florida 34698'
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
