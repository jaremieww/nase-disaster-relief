import { Typography } from 'antd'
import Address from "../Address";
import CommandCenter from "./CommandCenter";

const { Title } = Typography

export default () => <CommandCenter
  commandORoperation="Command"
  name="Douglas"
  address={[
    '200 Chester Avenue North',
    'DOUGLAS, Georgia 31533'
  ]}
  campingAddress={[
    'Davis Wade Park',
    '807 W Bryan Street',
    'Douglas, GA'
  ]}
  campingAddressNote={
    <>
      RV and Heavy Equipment Parking<br />
      <Address address={[
        '200 Chester Avenue North',
        'DOUGLAS, Georgia 31533'
      ]} />
    </>
  }
  email="idastorm25@gmail.com"
  assignedStakes={[
    '*Jacksonville FL South',
    'Atlanta, CA',
    'Fayetteville, GA',
    'Powder Springs, GA',
    'Athens, GA',
    'Cartersville, GA',
    'Coal Mountain, GA',
    'Lilburn, GA',
    'Marietta, GA',
    'Roswell, GA',
    'Winder, GA',
  ]}
  phoneNumber="555-555-5555"
  registrationLink="https://forms.gle/KSMMmj116JZ45vKq5"
  closeoutFormLink=""
  areaOversight={[{
    name: '',
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
      <p>Camping for the Valdosta commmand center is located at:</p>
      <Address address={[
        'do not know',
        'DOUGLAS, Georgia 31533'
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
