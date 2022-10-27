import CommandCenter from "./CommandCenter";
import { Typography } from "antd";
import Address from "../Address";

const { Title } = Typography

const overflowCampingAddress = <Address address={[
  'Suncoast Baptist Church',
  '410 Warrington Blvd',
  'Port Charlotte, FL'
]} />

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
  campingAddressNote={<>
    Overflow camping available at<br/>
    {overflowCampingAddress}
  </>}
  email="nase.command2@gmail.com"
  assignedStakes={[
    'Boynton Beach, FL',
    'Jacksonville, FL East',
    'Jacksonville, FL South',
    'Jacksonville, FL West',
    'Lake City, FL',
    'Ocala, FL',
  ]}
  phoneNumber="850-912-9756"
  registrationLink="https://forms.gle/9ZvBiXV59XHGd3JAA"
  areaOversight={[
    {
      name: 'Michael Lavoie',
      phoneNumber: '352-672-0455'
    },
    {
      name: 'Eric Andres',
      phoneNumber: '801-854-8368'
    }
  ]}
  director={{
    name: 'Kieffer Marino',
    phoneNumber: '904-609-4644'
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
      <p>Overflow camping is available at</p>
      {overflowCampingAddress}
    </section>
  </>}
/>
