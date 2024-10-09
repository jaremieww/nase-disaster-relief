import { Typography } from 'antd'
import Address from "../Address";
import CommandCenter from "./CommandCenter";

const { Title } = Typography

export default () => <CommandCenter
  commandORoperation="Command"
  name="Augusta"
  address={[
    '835 North Belair Road',
    'Evans, GA 30809'
  ]}
  campingAddress={[
    'For Georgia Stakes',
    '2000 Camp Helaman Trail',
    'Evans, Georgia 30809',
    'www.thecamphelaman.org'
  ]}
  campingAddressNote={
    <>
      Campground for Georgia Stakes<br />
      <Address address={[
        '2000 Camp Helaman Trail',
        'Evans, Georgia 30809',
        'www.thecamphelaman.org'
      ]} />
      Campground for South Carolina Stakes<br />
      <Address address={[
        'Aiken Stake Center',
        '358 E Pine Log Rd',
        'Aiken, SC 29803'
      ]} />

    </>
  }
  email="naseopcenteraugusta1@gmail.com"
  assignedStakes={[
    'Conyers GA',
    'Lilburn GA*',
    'Roswell GA', 
    'Aiken SC',
    'Augusta GA',
    'Columbia SC',
    'Hartsville SC',
    'West Columbia SC',
  ]}
  phoneNumber="904-902-0207"
  registrationLink="https://forms.gle/iG1MzRMzdNEEJjAD7"
  closeoutFormLink=""
  areaOversight={[{
    name: 'Mike Dohm',
    phoneNumber: '770-820-8085'
  },
  ]}
  director={{
    name: 'Mark Judson (Hartsville Stake)',
    phoneNumber: '805-701-4801'
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
      <p>Campground for Georgia Stakes is located at:</p>
      <Address address={[
        'Campground for Georgia Stakes',
        '2000 Camp Helaman Trail',
        'Evans, Georgia 30809',
        'www.thecamphelaman.org'
      ]} />
      <p>Campground for South Carolina Stakes is located at:</p>
      <Address address={[
        'Aiken Stake Center',
        '358 E Pine Log Rd',
        'Aiken, SC 29803'
      ]} />
    </section>
  </>}
  sundayServices={<section style={{ marginTop: '40px' }}>
    <Title level={4}>Sunday Services</Title>
    <p>
      A short Sacrament meeting will be held at the Command Center on Sunday morning at 7:45 AM. Members should come in clean work clothes. Following the meeting, crews should plan to continue working.
    </p>
  </section>}
   fuelAvailability="limited"
/>
