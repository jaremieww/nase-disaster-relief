import { Typography } from 'antd'
import Address from "../Address";
import { S3Link } from '../S3';
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
    'Cape Coral, FL 33990'
  ]}
  email="nase.command1@gmail.com"
  assignedStakes={[
    'Stuart, FL',
    'Brandon, FL',
    'Lakeland, FL',
    'Ocala, FL',
    'Odessa, FL',
    'Orlando, FL South',
    'St. Petersburg, FL',
    'Tampa, FL',
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
      <p>Camping for the Cape Coral commmand center is located at:</p>
      <Address address={[
        '528 Cultural Park Blvd',
        'Cape Coral, FL 33990'
      ]} />
    </section>
    <section style={{ marginTop: 24 }}>
      <Title level={4}>Fuel</Title>
      <p>Fuel is available at the state filling station for emergency response. In order to get fuel from the filling station, you must:</p>
      <ul>
        <li>Be wearing Helping Hands shirts.</li>
        <li>Print the <S3Link path="ian/florida-dashboard-placard.pdf">placard</S3Link> and place it in the front window of the vehicle.</li>
        <li>If there are any issues, we are partners with the state VOAD and this is an agreement with Christy at Volunteer Florida.</li>
      </ul>
      <p>The address for the filling station is:</p>
      <Address address={[
        'Lee County Sports Complex',
        '14100 6 Mile Cypress Parkway',
        'Fort Myers, FL 33912'
      ]} />
    </section>
  </>}
/>
