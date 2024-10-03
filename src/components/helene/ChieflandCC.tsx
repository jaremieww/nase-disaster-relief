import { Typography } from 'antd'
import Address from "../Address";
import CommandCenter from "./CommandCenter";

const { Title } = Typography

export default () => <CommandCenter
  commandORoperation="Command"
  name="Chiefland"
  address={[
    '215 Northeast 8th Street',
    'CHIEFLAND, Florida 32626'
  ]}
  campingAddress={[
    '2340 Old Fannin Rd',
    'Chiefland, FL 32626'
  ]}
  campingAddressNote={
    <>
      RV and Heavy Equipment Parking<br />
      <Address address={[
        '2340 Old Fannin Rd',
        'Chiefland, FL 32626'
      ]} />
    </>
  }
  email="Ian.BrandonStkCC@gmail.com"
  assignedStakes={[
    'Gainesville, FL',
    '*Jacksonville FL West',
    'Lake Mary, FL',
    'Orlando, FL',
    'Orlando FL West',
  ]}
  phoneNumber="904-990-5797"
  registrationLink="https://forms.gle/kyCtiqYEckTEtF8m8"
  closeoutFormLink=""
  areaOversight={[{
    name: 'Keith Nash',
    phoneNumber: '770-820-8085'
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
      <p>Camping for the Chiefland Commmand Center is located at:</p>
      <Address address={[
        'do not know',
        'CHIEFLAND, Florida 32626'
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
