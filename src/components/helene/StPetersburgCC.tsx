import { Typography } from 'antd'
import Address from "../Address";
import CommandCenter from "./CommandCenter";

const { Title } = Typography

export default () => <CommandCenter
  commandORoperation="Command"
  name="St Petersburg"
  address={[
    '9001 106th Avenue',
    'LARGO, Florida 33777'
  ]}
  campingAddress={[
    '9001 106th Avenue',
    'LARGO, Florida 33777'
  ]}
  campingAddressNote={
    <>
      RV and Heavy Equipment Parking<br />
      <Address address={[
        'RV Tech Training Center',
        '12949 66th St N',
        'Largo, FL 33773', 
        'This is a gravel lot, not ideal for tents'
      ]} />
    </>
  }
  email=""
  assignedStakes={[
    'Orlando FL',
    'Orlando FL West',
    'Ft Myers FL',
    'Lakeland FL',
    'St Petersburg FL',
    'Tampa FL *'
  ]}
  phoneNumber="904-990-5769"
  registrationLink="https://forms.gle/shiTNQJC8sMGUdcJ8"
  closeoutFormLink=""
  areaOversight={[{
    name: 'Brent Barnes',
    phoneNumber: '865-748-4260'
  },
  ]}
  director={{
    name: 'Kasey Hess',
    phoneNumber: '813-830-3223'
  }}
  afterAssignments={<>
    <p>
      Teams should meet at the campsite location.
      The campsite amenities are yet to be determinted.
      The Church building will only be used for picking up supplies and some limited parking while using the shower units.
      There is no parking at the church building.
    </p>
  </>}
    additionalInformation={<>
      <section style={{ marginTop: 24 }}>
        <Title level={4}>Camping</Title>
        <p>Camping for the St Peterburg Command Center is located at the curch: </p>
      <Address address={[
        '9001 106th Avenue',
        'LARGO, Florida 33777'
      ]} />     
      <p>If we run out of room we will send people to the RV and Heavy Equipment Parking</p>
      <Address address={[
        'RV Tech Training Center',
        '12949 66th St N',
        'Largo, FL 33773', 
        'This is a gravel lot, not ideal for tents'
      ]} />
      </section>
    </>}
  sundayServices={<section style={{ marginTop: '40px' }}>
    <Title level={4}>Sunday Services</Title>
    <p>
    A short Sacrament meeting will be held at the Command Center church building (9001 106th Avenue, Largo, FL 33777) on Sunday morning at 7:00 AM. Members should come in clean work clothes. Teams should carpool from the campsite as parking is limited at the church. Please no RVs and heavy equipment trailers. Following the meeting, crews should plan to continue working. 
    </p>
  </section>}
   fuelAvailability="limited"
/>
