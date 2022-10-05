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
  assignedStakes={[
    'Stuart, FL',
    'Brandon, FL',
    'Lakeland, FL',
    'Ocala, FL',
    'Odessa, FL',
    'Orlando, FL South',
    'St. Petersburg, FL',
    'Tampa, FL',
    'St. Cloud, FL'
  ]}
  phoneNumber="941-876-8088"
  registrationLink="https://forms.gle/8MhC1hEZrRP7CHbc8"
  areaOversight={{
    name: 'Keith Nash',
    phoneNumber: '770-820-8085'
  }}
  director={{
    name: 'President Bradley Westover',
    phoneNumber: '561-644-1109'
  }}
  additionalInformation={<section style={{ marginTop: 24 }}>
    <Title level={4}>Camping</Title>
    <p>Camping for the Cape Coral commmand center is located at:</p>
    <Address address={[
      '528 Cultural Park Blvd',
      'Cape Coral, FL 33990'
    ]} />
  </section>}
/>