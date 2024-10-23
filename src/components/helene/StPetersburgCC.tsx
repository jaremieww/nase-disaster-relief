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
    '9400 98th Ave',
    'LARGO, Florida 33777'
  ]}
  campingAddressNote={
    <>
      RV and Heavy Equipment Parking<br />
      <Address address={[
        '9001 106th Avenue',
        'LARGO, Florida 33777'
      ]} />
    </>
  }
  email=""
  assignedStakes={[
    'Miami Lakes FL',
    'Naples FL',
    'Jacksonville FL East',
    'Jacksonville FL South',
    'Jacksonville FL West',
    'Lake Mary FL',
    'Orlando FL South*',
    'Brandon FL',
    'Lakeland FL',
    'St Petersburg FL ^',
    'Tampa FL *'
  ]}
  phoneNumber="904-990-5769"
  registrationLink="https://forms.gle/Xu52Qap1XXbw5iaQ6"
  closeoutFormLink=""
  areaOversight={[{
    name: 'Mike Dohm',
    phoneNumber: '985-718-9753'
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
        <p>Camping for the St Peterburg Command Center is located minutes away from the curch building at: </p>
      <Address address={[
        '9400 98th Avenue',
        'LARGO, Florida 33777'
      ]} />     
      <p>Porta potties and a shower trailer will be provided at the campsite.  Egress and parking is limited at the campsite, so please no RVs and heavy equipment.<br/></p>
      <p>RV and Heavy Equipment can park and camp at the church building. A toilet trailer is provided there.<br/></p>
      <Address address={[
        '9001 106th Avenue',
        'LARGO, Florida 33777'
      ]} />
      </section>
    </>}
  sundayServices={<section style={{ marginTop: '40px' }}>
    <Title level={4}>Sunday Services</Title>
    <p>
    A short Sacrament meeting will be held at the Command Center church building (9001 106th Avenue, Largo, FL 33777) on Sunday morning at 7:00 AM. Members should come in clean work clothes. Teams should carpool from the campsite as parking is limited at the church. Following the meeting, crews should plan to continue working. 
    </p>
  </section>}
   fuelAvailability="limited"
/>
