import { Typography } from 'antd'
import Address from "../Address";
import CommandCenter from "./CommandCenter";

const { Title } = Typography

export default () => <CommandCenter
  commandORoperation="Command"
  name="Lake City"
  address={[
    '909 Southeast Country Club Road',
    'LAKE CITY, FL 32025'
  ]}
  campingAddress={[
    '1689 NW Lake Jeffrey Rd',
    'Lake City, Fl 32055'
  ]}
  campingAddressNote={
    <>
      RV and Heavy Equipment Parking<br />
      <Address address={[
        '1689 NW Lake Jeffrey Rd',
        'Lake City, Fl 32055'
      ]} />
    </>
  }
  email="Lakecitycommandcenter2024@gmail.com"
  assignedStakes={[
    'Jacksonville FL East',
    'Lake City, FL',
    '*Cocoa, FL',
    'Orlando FL South',
    'DeLand, FL',
    'Leesburg, FL',
    'Palm Bay, FL',
    'Lakeland, FL',
    'St Cloud, FL',
  ]}
  phoneNumber="904.600.3378"
  registrationLink="https://forms.gle/8DEorLTyaf34jnCR8"
  closeoutFormLink=""
  areaOversight={[{
    name: 'Keith Nash',
    phoneNumber: '770.820.8085'
  },
  ]}
  director={{
    name: 'Brian Flynn',
    phoneNumber: '404-547-6203'
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
      <p>Camping for the Lake City Commmand Center is located at:</p>
      <Address address={[
        'do not know',
        'LAKE CITY, Florida 32025'
      ]} />
    </section>
  </>}
  sundayServices={<section style={{ marginTop: '40px' }}>
    <Title level={4}>Sunday Services</Title>
    <p>
      A short Sacrament meeting will be held at the Stake Center on Sunday morning at 8:00 AM. Members should come in clean work clothes. Following the meeting, crews should plan to continue working.
    </p>
  </section>}
   fuelAvailability="severely limited"
/>
