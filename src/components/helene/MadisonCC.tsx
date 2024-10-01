import { Typography } from 'antd'
import Address from "../Address";
import CommandCenter from "./CommandCenter";

const { Title } = Typography

export default () => <CommandCenter
  commandORoperation="Command"
  name="Madison"
  address={[
    '1374 West Base Street',
    'MADISON, Florida 32340'
  ]}
  campingAddress={[
    'not sure',
    'MADISON, Florida '
  ]}
  campingAddressNote={
    <>
      RV and Heavy Equipment Parking<br />
      <Address address={[
        'unknown',
        'MADISON, Florida 32340'
      ]} />
    </>
  }
  email="nase.command1@gmail.com"
  assignedStakes={[
    'Mobile, AL',
    'Ocala, FL',
    'Fort Walton Beach, FL',
    'Panama City, FL',
    'Pensacola, FL',
    '*Tallahassee, FL',
  ]}
  phoneNumber="555-555-5555"
  registrationLink="https://forms.gle/eQaf6yGFyAPF91nq7"
  closeoutFormLink=""
  areaOversight={[{
    name: 'Brent Barnes',
    phoneNumber: '904-864-0623'
  },
  ]}
  director={{
    name: 'Ben Smith',
    phoneNumber: '229-224-9952'
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
        'Madison, FL'
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
