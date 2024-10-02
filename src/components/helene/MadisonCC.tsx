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
    'Lanier Field',
    '281 NW Crane Ave.',
    'MADISON, Florida 32340'
  ]}
  campingAddressNote={
    <>
      Secondary Camping with RV and Heavy Equipment Parking<br />
      <Address address={[
        'Williamson Property',
        '2529 NE Colin Kelly Hwy',
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
  phoneNumber="904-990-5769"
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
    Teams should meet at the campsite location. The campsite has porta-potties and wash stations, but not running
water. The Church building will only be used for picking up supplies and some limited parking while using the
shower units.
    </p>
  </>}
  additionalInformation={<>
    <section style={{ marginTop: 24 }}>
      <Title level={4}>Camping</Title>
      <p>Camping for the {name} {commandORoperation} Center is located at:</p>
      <Address address={[
        'Lanier Field',
        '281 NW Crane Ave.',
        'Madison, Florida 32340'
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
