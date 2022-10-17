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
    'Brandon, FL West',
    'Columbus, GA',
    'Lake City, FL',
    'Lakeland, FL',
    'Macon, GA',
    'Newnan, GA',
    'St Cloud, FL',
    'St Petersburg, AL',
  ]}
  phoneNumber="850-912-9756"
  registrationLink="https://forms.gle/d1bUZiz929qmwZfA7"
  areaOversight={[
    {
      name: 'Krista Donohoe',
      phoneNumber: '850-982-8499'
    }
  ]}
  director={{
    name: 'President Dave Carlson',
    phoneNumber: '904-210-7064'
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
      <p>Camping for the Port Charlotte commmand center is located about &frac14; of a mile from the command center at:</p>
      <Address address={[
        'Franz Ross Park',
        '19333 Quesada Ave',
        'Port Charlotte, FL 33948'
      ]} />
      <p>Showers at the adjacent YMCA are available for use, as well as at the Command Center.</p>
    </section>
  </>}
/>
