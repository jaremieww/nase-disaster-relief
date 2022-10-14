import { Typography } from 'antd'
import Address from "../Address";
import CommandCenter from "./CommandCenter";

const { Title } = Typography

export default () => <CommandCenter
  name="Cape Coral"
  address={[
    '1928 Chiquita Blvd S',
    'Cape Coral, FL 33991'
  ]}
  campingAddress={[
    '528 Cultural Park Blvd',
    'Cape Coral, FL 33990',
    '',
    'RV and Heavy Equipment Parking',
    '1020 Cultural Park Blvd',
    'Cape Coral, FL 33990'
  ]}
  campingAddressLink="https://www.google.com/maps/place/Cultural+Park,+528+Cultural+Park+Blvd,+Cape+Coral,+FL+33990/@26.6413562,-81.9615016,17z/data=!4m5!3m4!1s0x88db46b60cb3890b:0x4f9ff967c2d41f2!8m2!3d26.6413562!4d-81.9593129"
  email="nase.command1@gmail.com"
  assignedStakes={[
    'Gainesville, FL',
    'Jacksonville, FL East',
    'Jacksonville, FL West',
    'Kingsland, GA',
    'Fort Myers, FL',
    'Panama City, FL',
    'Tifton, GA',
    'Tallahassee, FL'
  ]}
  phoneNumber="941-876-8088"
  registrationLink="https://forms.gle/zX1kYSLhRZCyQtAdA"
  areaOversight={[
    {
      name: 'Keith Nash',
      phoneNumber: '770-820-8085'
    },
    {
      name: 'Daryl Blount',
      phoneNumber: '678-641-5957'
    }
  ]}
  director={{
    name: 'President Kurt Scherer',
    phoneNumber: '352-219-1317'
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
      <p>Camping for the Cape Coral commmand center is located at:</p>
      <Address address={[
        '528 Cultural Park Blvd',
        'Cape Coral, FL 33990'
      ]} />
    </section>
  </>}
/>
