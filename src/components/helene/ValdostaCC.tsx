import { Typography } from 'antd'
import Address from "../Address";
import CommandCenter from "./CommandCenter";

const { Title } = Typography

export default () => <CommandCenter
  commandORoperation="Command"
  name="Valdosta"
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
        '3766 Old Clyattville Rd',
        'Valdosta, GA 31601'
      ]} />
    </>
  }
  email="ian.venicecc@gmail.com"
  assignedStakes={[
    'Birmingham, AL',
    'Gadsden, AL',
    'Montgomery, AL',
    'Tuscaloosa, AL',
    'Dothan, AL',
    'Tifton, GA',
    'Columbus, GA',
  ]}
  phoneNumber="904-902-8063"
  registrationLink="https://forms.gle/NCcinpVYRKeHtuY66"
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
      <p>Camping for the Valdosta Commmand Center is located at:</p>
      <Address address={[
        '158-166 Prison-Farm Rd',
        'Valdosta, GA 31601'
      ]} />
    </section>
  </>}
  sundayServices={<section style={{ marginTop: '40px' }}>
    <Title level={4}>Sunday Services</Title>
    <p>
      A short Sacrament meeting will be held at the church building on Sunday morning at <bold>7:00 AM</bold>. (Sorry, I thought I updated this earlier.) Members should come in clean work clothes. Following the meeting, crews should plan to continue working.
    </p>
  </section>}
   fuelAvailability="limited"
/>
