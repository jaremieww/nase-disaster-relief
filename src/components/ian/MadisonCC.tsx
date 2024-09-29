import { Typography } from 'antd'
import Address from "../Address";
import CommandCenter from "./CommandCenter";

const { Title } = Typography

export default () => <CommandCenter
  name="Madison"
  address={[
    '2500 Jerry Jones Drive',
    'VALDOSTA, Georgia 31602-1250'
  ]}
  campingAddress={[
    '158-166 Prison-Farm Rd',
    'Valdosta, GA 31601'
  ]}
  campingAddressNote={
    <>
      RV and Heavy Equipment Parking<br />
      <Address address={[
        'unknown',
        'Valdosta, GA'
      ]} />
    </>
  }
  email="nase.command1@gmail.com"
  assignedStakes={[
    'Birmingham, AL',
    'Gadsden, AL',
    'Montgomery, AL',
    'Tuscaloosa, AL',
    'Dothan, AL',
    'Tifton, GA',
    'Marietta, GA',
  ]}
  phoneNumber="941-876-8088"
  registrationLink="https://forms.gle/CCgUS8mxFoy443eg9"
  closeoutFormLink="https://forms.gle/H8LAkr32NU1HYshM6"
  areaOversight={[{
    name: 'Jaremie Woodruff',
    phoneNumber: '904-864-0623'
  },
  {
    name: 'Darryl Blount',
    phoneNumber: ''
  }
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
      <p>Camping for the Valdosta commmand center is located at:</p>
      <Address address={[
        '158-166 Prison-Farm Rd',
        'Valdosta, GA 31601'
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
