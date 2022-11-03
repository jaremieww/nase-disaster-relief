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
    '1303 Forrest Nelson Blvd',
    'Port Charlotte, FL 33952'
  ]}
  email="nase.command2@gmail.com"
  assignedStakes={[
    'Brandon, FL',
    'Cocoa, FL',
    'Leesburg, FL',
    'Orlando, FL West',
    'St. Cloud, FL',
  ]}
  phoneNumber="850-912-9756"
  registrationLink="https://forms.gle/3f6XaS4yeTv1A8ZZ7"
  closeoutFormLink="https://forms.gle/ZDcFXJVn3uMoccZJ6"
  areaOversight={[
    {
      name: 'Krista Donohoe',
      phoneNumber: '850-982-8499'
    }
  ]}
  director={{
    name: 'Jacob Crosby',
    phoneNumber: '813-763-0496'
  }}
  afterAssignments={<>
    <p>
      Teams should meet at the campsite location.
      There are showers, restrooms, water, gloves, and tshirts available there.
      The Church building will only be used for picking up supplies.
      There is no parking at the church building.
    </p>
    <p>
      Operation BBQ has donated a barbecue dinner for workers on Saturday evening that will be available at the campsite.
    </p>
  </>}
  additionalInformation={<>
    <section style={{ marginTop: 24 }}>
      <Title level={4}>Camping</Title>
      <p>Camping for the Port Charlotte commmand center is located at the command center.</p>
      <Address address={[
        '1303 Forrest Nelson Blvd',
        'Port Charlotte, FL 33952'
      ]} />
      <p>There is limited parking space at the command center. If you bring a camper or RV, please plan to find another location to park it.</p>
    </section>
  </>}
/>
