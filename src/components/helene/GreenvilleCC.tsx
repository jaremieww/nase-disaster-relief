import { Typography } from 'antd'
import Address from "../Address";
import CommandCenter from "./CommandCenter";

const { Title } = Typography

export default () => <CommandCenter
  commandORoperation="Command"
  name="Greenville"
  address={[
    '1301 Boiling Springs Road',
    'Greer, SC 29050'
  ]}
  campingAddress={[
    'Pelham Road Baptist Church',
    '1108 Pelham Road Suite 201',
    'Greenville, SC 29615'
  ]}
  campingAddressNote={
    <>
      RV and Heavy Equipment Parking<br />
      <Address address={[
        'unknown',
        'Greer, South Carolina 29050'
      ]} />
    </>
  }
  email=""
  assignedStakes={[
    'Athens GA',
    'Coal Mountain GA',
    'Marietta GA',
    'Winder GA',
    'Charlotte NC Central',
    'Greenville SC East',
    'Greenville SC'
  ]}
  phoneNumber="904-990-5769"
  registrationLink="https://forms.gle/xtALZFXEDrtrJSNC6"
  closeoutFormLink=""
  areaOversight={[{
    name: 'Krista Donahoe',
    phoneNumber: '850-982-8499'
  },
  ]}
  director={{
    name: 'David Ladner',
    phoneNumber: '217-493-8150'
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
      <p>Camping for the Greenville Command Center is located at:</p>
      <Address address={[
        'Pelham Road Baptist Church',
        '1108 Pelham Road Suite 201',
        'Greenville, SC 29615'
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
