import { Typography } from 'antd'
import Address from "../Address";
import CommandCenter from "./CommandCenter";

const { Title } = Typography

export default () => <CommandCenter
  commandORoperation="Command"
  name="New Port Richey"
  address={[
    '10606 Hilltop Dr', 
    'New Port Richey, FL 34654'
  ]}
  campingAddress={[
    ''
  ]}
  campingAddressNote={
    <>
      No Campimg this weekend<br />
      <Address address={[
        ''
      ]} />
    </>
  }
  email="NASE.Command3@gmail.com"
  assignedStakes={[
    'Leesburg FL',
    'Ocala FL',
    'Odessa FL ^',
    'Tampa FL',
  ]}
  phoneNumber="904-902-8063"
  registrationLink="https://forms.gle/5bw4a4omF6KcnT4d9"
  closeoutFormLink=""
  areaOversight={[{
    name: 'Jaremie Woodruff',
    phoneNumber: '904-864-0623'
  },
  ]}
  director={{
    name: '',
    phoneNumber: ''
  }}
  afterAssignments={<>
    <p>
      The Church building will only be used for picking up supplies.
    </p>
  </>}
  additionalInformation={<>
    <section style={{ marginTop: 24 }}>
      <Title level={4}>Camping</Title>
      <p>There is no camping at this location this weekend.</p>
      <Address address={[
        ''
      ]} />
    </section>
  </>}
  sundayServices={<section style={{ marginTop: '40px' }}>
    <Title level={4}>Sunday Services</Title>
    <p>
      A short Sacrament meeting will be held at the church building on Sunday morning at 8:00 AM. Members should come in clean work clothes. Following the meeting, crews should plan to continue working.
    </p>
  </section>}
   fuelAvailability="limited"
/>
