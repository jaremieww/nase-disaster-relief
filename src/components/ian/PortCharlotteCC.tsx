import CommandCenter from "./CommandCenter";
import { Image, Typography } from "antd";
import Address from "../Address";
import { formatS3Url } from "../S3";

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
    'Jacksonville, FL East',
    'Jacksonville, FL West',
    'Lake City, FL',
    'Lakeland, FL',
    'Leesburg, FL',
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
      <p>Camping for the Port Charlotte commmand center is located about &frac14; of a mile from the command center at:</p>
      <Address address={[
        'Franz Ross Park',
        '19333 Quesada Ave',
        'Port Charlotte, FL 33948'
      ]} />
      <Image src={formatS3Url("ian/port-charlotte-camping-week-4.jpg")} style={{maxWidth: 400}} />
      <p>Showers at the adjacent YMCA are available for use, as well as at the Command Center.</p>
    </section>
  </>}
/>
