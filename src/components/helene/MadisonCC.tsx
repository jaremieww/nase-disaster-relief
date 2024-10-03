import { Typography } from 'antd'
import Address from "../Address";
import { formatS3Url } from "../S3"
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
    'Primary Location with RV and Heavy Equipment Parking',
    'Lanier Field',
    '281 NW Crane Ave.',
    'MADISON, Florida 32340'
  ]}
  campingAddressNote={
    <>
      Secondary Camping<br />
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
    phoneNumber: '865-748-4260'
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
      <p>The primary location for camping at the Madison command center is at:</p>
      <Address address={[
        'Lanier Field',
        '281 NW Crane Ave.',
        'Madison, Florida 32340'
      ]} />
        <img
              src={formatS3Url('helene/MadisonLanierField.png')}
              alt="Lanier Field" 
              style={{ maxWidth: 500 }}
             />
      <p>Rules/Information for camping at Lanier Field: 
        <ul>
          <li>No Open Fires or Campfires</li>
          <li>No Camping or Driving on the football field</li>
          <li>No Water will be available</li>
          <li>Portable Toilets will be provided</li>
          <li>The paved area should be reserved for RVs and heavy equipment</li>
        </ul>
      </p>
      <p>Once the primary camping location is full, people we be redirected to a secondary camping location:</p>
      <Address address={[
        'Williamson Property',
        '2529 NE Colin Kelly Hwy', 
        'Madison, FL'
      ]} />
       <img
              src={formatS3Url('helene/MadisonWilliamsonProperty.png')}
              alt="Williamson Property" 
              style={{ maxWidth: 500 }}
             />
      <p>Rules/Information for camping at Williamson Property:
        <ul>
          <li>No Camping or Driving on the football field</li>
          <li>Water will be available</li>
          <li>Portable Toilets will be provided</li>
          <li>No RVs and heavy equipment at Williamson Property, please park at Lanier Field</li>
        </ul>
      </p>
    </section>
  </>}
  sundayServices={<section style={{ marginTop: '40px' }}>
    <Title level={4}>Sunday Services</Title>
    <p>
      A short Sacrament meeting will be held at the football stadium bleachers at Lanier Field for all teams on Sunday morning at 7:30 AM. Members should come in clean work clothes. Following the meeting, crews should plan to continue working.
    </p>
  </section>}
  fuelAvailability="generally available"
/>
