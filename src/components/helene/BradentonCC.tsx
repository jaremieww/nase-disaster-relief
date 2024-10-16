import { Typography } from 'antd'
import Address from "../Address";
import CommandCenter from "./CommandCenter";

const { Title } = Typography

export default () => <CommandCenter
  commandORoperation="Command"
  name="Bradenton"
  address={[
    '3400 CortezRoad',
    'BRADENTON, Florida 34210-3101'
  ]}
  campingAddress={[
    'Yet to be determined'
  ]}
  campingAddressNote={
    <>
      RV and Heavy Equipment Parking<br />
      <Address address={[
        ''
      ]} />
    </>
  }
  email="ian.venicecc@gmail.com"
  assignedStakes={[
    'Cocoa FL *',
    'Palm Bay FL',
    'St Cloud FL',
    'Naples FL'
  ]}
  phoneNumber="904-990-5797"
  registrationLink="https://forms.gle/vq8qhQztrsduu8xu7"
  closeoutFormLink=""
  areaOversight={[{
    name: 'Krista Donohoe',
    phoneNumber: '(850)982-8499'
  },
  ]}
  director={{
    name: 'Andrew Miner',
    phoneNumber: '(786)877-2831'
  }}
  afterAssignments={<>
    <p>
      Teams should meet at the campsite location.
      There are showers, restrooms, water, gloves, and t-shirts available there.
      The Church building will only be used for picking up supplies.
      There is no parking at the church building.
    </p>
  </>}

  sundayServices={<section style={{ marginTop: '40px' }}>
    <Title level={4}>Sunday Services</Title>
    <p>
      A short Sacrament meeting will be held at the church building on Sunday morning at 7:30 AM. Members should come in clean work clothes. Following the meeting, crews should plan to continue working.
    </p>
  </section>}
   fuelAvailability="limited"
/>
