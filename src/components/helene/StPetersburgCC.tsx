import { Typography } from 'antd'
import Address from "../Address";
import CommandCenter from "./CommandCenter";

const { Title } = Typography

export default () => <CommandCenter
  commandORoperation="Command"
  name="St Petersburg"
  address={[
    '9001 106th Avenue',
    'LARGO, Florida 33777'
  ]}
  campingAddress={[
    'TBD'
  ]}
  campingAddressNote={
    <>
      RV and Heavy Equipment Parking<br />
      <Address address={[
        'TBD'
      ]} />
    </>
  }
  email=""
  assignedStakes={[
    'Orlando FL',
    'Orlando FL West',
    'Ft Myers FL',
    'Lakeland FL',
    'St Petersburg FL',
    'Tampa FL *'
  ]}
  phoneNumber="904-990-5769"
  registrationLink="https://forms.gle/shiTNQJC8sMGUdcJ8"
  closeoutFormLink=""
  areaOversight={[{
    name: 'Brent Barnes',
    phoneNumber: '865-748-4260'
  },
  ]}
  director={{
    name: 'Kasey Hess',
    phoneNumber: '813-830-3223'
  }}
  afterAssignments={<>
    <p>
      Teams should meet at the campsite location.
      The campsite amenities are yet to be determinted.
      The Church building will only be used for picking up supplies and some limited parking while using the shower units.
      There is no parking at the church building.
    </p>
  </>}
  
  sundayServices={<section style={{ marginTop: '40px' }}>
    <Title level={4}>Sunday Services</Title>
    <p>
      A short Sacrament meeting will be held at TBD on Sunday morning at 7:00 AM. Members should come in clean work clothes. Parking TBD. Following the meeting, crews should plan to continue working.
    </p>
  </section>}
   fuelAvailability="limited"
/>
