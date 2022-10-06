import CommandCenter from "./CommandCenter";
import { Typography } from "antd";
import Address from "../Address";

const { Title } = Typography

export default () => <CommandCenter
  name="Port Charlotte"
  address={[
    '1303 Forrest Nelson Blvd',
    'Port Charlotte, FL 33952'
  ]}
  campingAddress={[
    'Franz Ross Park',
    '19333 Quesada Ave',
    'Port Charlotte, FL 33948'
  ]}
  email="nase.command2@gmail.com"
  assignedStakes={[
    'Cocoa, FL',
    'Gainesville, FL',
    'Jacksonville, FL East',
    'Jacksonville, FL West',
    'Jacksonville, FL South',
    'Kingsland, FL',
    'Lake City, FL',
    'St. Cloud, FL'
  ]}
  phoneNumber="850-912-9756"
  registrationLink="https://forms.gle/K47foJX8MeiNjRJYA"
  areaOversight={{
    name: 'Krista Donohoe',
    phoneNumber: '850-982-8499'
  }}
  director={{
    name: 'President Michael Fowler',
    phoneNumber: '321-794-9547'
  }}
  additionalInformation={<section style={{ marginTop: 24 }}>
    <Title level={4}>Camping</Title>
    <p>Camping for the Port Charlotte commmand center is located at:</p>
    <Address address={[
      'Franz Ross Park',
      '19333 Quesada Ave',
      'Port Charlotte, FL 33948'
    ]} />
  </section>}
/>
