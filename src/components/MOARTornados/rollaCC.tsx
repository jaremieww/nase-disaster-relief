import { Typography } from 'antd'
import Address from "../Address";
import CommandCenter from "./CommandCenter";

const { Title } = Typography

export default () => <CommandCenter
  commandORoperation="Command"
  name="Rolla MO"
  address={[
    ''
  ]}
  campingAddress={[
    ''
  ]}
  campingAddressNote={
    <>
      RV and Heavy Equipment Parking<br />
      <Address address={[
        ''
      ]} />
    </>
  }
  email=""
  assignedStakes={[
    'Home Stake Only',
  ]}
  phoneNumber=""
  registrationLink="https://forms.gle/A9ABzJfV9F9REjf99"
  closeoutFormLink=""
  areaOversight={[{
    name: 'Dan Seegmiller',
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
      <p>No Camping this weekend</p>
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
