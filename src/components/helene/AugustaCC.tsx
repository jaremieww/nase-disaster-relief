import { Typography } from 'antd'
import Address from "../Address";
import CommandCenter from "./CommandCenter";

const { Title } = Typography

export default () => <CommandCenter
  commandORoperation="Command"
  name="Augusta"
  address={[
    '??',
    '??'
  ]}
  campingAddress={[
    '??',
    '??'
  ]}
  campingAddressNote={
    <>
      RV and Heavy Equipment Parking<br />
      <Address address={[
        '?',
        '?'
      ]} />
    </>
  }
  email="naseopcenteraugusta1@gmail.com"
  assignedStakes={[
    'Conyers GA',
    'Lilburn GA*',
    'Roswell GA', 
    'Aiken SC',
    'Augusta GA',
    'Columbia SC',
    'Hartsville SC',
    'West Columbia SC',
  ]}
  phoneNumber="904-902-0207"
  registrationLink="https://forms.gle/iG1MzRMzdNEEJjAD7"
  closeoutFormLink=""
  areaOversight={[{
    name: 'Mike Dohm',
    phoneNumber: '770-820-8085'
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
      <p>Camping for the Chiefland Commmand Center is located at:</p>
      <Address address={[
        '??',
        '??'
      ]} />
    </section>
  </>}
  sundayServices={<section style={{ marginTop: '40px' }}>
    <Title level={4}>Sunday Services</Title>
    <p>
      A short Sacrament meeting will be held at the campsite on Sunday morning at 7:30 AM. Members should come in clean work clothes. Following the meeting, crews should plan to continue working.
    </p>
  </section>}
   fuelAvailability="limited"
/>
