import { Typography } from 'antd'
import Address from "../Address";
import CommandCenter from "./CommandCenter";

const { Title } = Typography

export default () => <CommandCenter
  commandORoperation="Command"
  name="Waycross"
  address={[
    '2095 Central Avenue',
    'WAYCROSS, Georgia 31503'
  ]}
  campingAddress={[
    'do not know',
    'WAYCROSS, Georgia 31503'
  ]}
  campingAddressNote={
    <>
      RV and Heavy Equipment Parking<br />
      <Address address={[
        'unknown',
        'WAYCROSS, Georgia 31503'
      ]} />
    </>
  }
  bigmessage="NOTICE: Please stop by Douglas GA command center located at 200 N Chester Ave Douglas, GA 31533 to pick up shirts and supplies before coming to Waycross!" 
  email="ian.venicecc@gmail.com"
  assignedStakes={[
    'Kingsland, GA',
    'Newnan, GA',
  ]}
  phoneNumber="904-902-8063"
  registrationLink="https://forms.gle/9tVrQSi3hvyRSYjV6"
  closeoutFormLink=""
  areaOversight={[{
    name: 'Jaremie Woodruff',
    phoneNumber: '904-864-0623'
  },
  {
    name: 'Daryl Blount',
    phoneNumber: '678-641-5957'
  }
  ]}
  director={{
    name: 'Greg Spears',
    phoneNumber: '334-717-6666'
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
      <p>Camping for the Waycross Commmand Center is located at:</p>
      <Address address={[
        'do not know',
        'WAYCROSS, Georgia 31503'
      ]} />
    </section>
  </>}
  sundayServices={<section style={{ marginTop: '40px' }}>
    <Title level={4}>Sunday Services</Title>
    <p>
      A short Sacrament meeting will be held at the church on Sunday morning at 8:00 AM. Members should come in clean work clothes. Following the meeting, crews should plan to continue working.
    </p>
  </section>}
   fuelAvailability="limited" 
/>
