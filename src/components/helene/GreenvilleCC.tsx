import { Typography } from 'antd'
import Address from "../Address";
import CommandCenter from "./CommandCenter";

const { Title } = Typography

export default () => <CommandCenter
  commandORoperation="Command"
  name="Greenville"
  address={[
    '1301 Boiling Springs Road',
    'Greer, SC 29050'
  ]}
  campingAddress={[
    'Pelham Road Baptist Church',
    '1108 Pelham Road',
    'Greenville, SC 29615'
  ]}
  campingAddressNote={
    <>
      RV and Heavy Equipment Parking<br />
      <Address address={[
        'at the same site.'
      ]} />
    </>
  }
  email=""
  assignedStakes={[
    'Athens GA',
    'Coal Mountain GA',
    'Marietta GA',
    'Winder GA',
    'Charlotte NC Central',
    'Greenville SC East',
    'Greenville SC *'
  ]}
  phoneNumber="904-990-5769"
  registrationLink="https://forms.gle/xtALZFXEDrtrJSNC6"
  closeoutFormLink=""
  areaOversight={[{
    name: 'Krista Donahoe',
    phoneNumber: '850-982-8499'
  },
  ]}
  director={{
    name: 'David Ladner',
    phoneNumber: '217-493-8150'
  }}

  campingInfo={
    <> 
    <div>
      <Title level={4}>Camping Information</Title>
      <p>Portable toilets and places for tents are available at the campsite, 2.5 miles from the command center.  Bring all your own needed supplies for the camping experience.  No one will be permitted inside the church.</p>

      <p>No portable showers at the campsite.  Showers are available at the 3 YMCAs and 2 Planet Fitness gyms listed below SATURDAY 5-7pm ONLY!  Please bring your shower supplies with you to your worksites on Saturday so that you can shower between 5 and 7 pm at the facility that is closest to your worksite.</p>
      <Address address={[
        'Eastside YMCA',
        '1250 Taylors Road',
        'Taylors, SC 29687'
      ]} />
      
      <Address address={[
        'Prisma Health YMCA',
        '550 Brookwood Point Place',
        'Simpsonville, SC 29681'
      ]} />

      <Address address={[
        'Caine Halter YMCA',
        '721 Cleveland Street',
        'Greenville, SC 29601'
      ]} />
      
      <Address address={[
        'Planet Fitness',
        '1818 Woodruff Road',
        'Greenville, SC 29607'
      ]} />
      
      <Address address={[
        'Planet Fitness',
        '2100 Wade Hampton Blvd',
        'Greenville, SC 29615'
      ]} />
      
      <Title level={4}>Campsite Parking</Title>
      <p>Pelham Road Baptist Church needs full access to their parking lot on Saturday for a funeral.  Any cars that will not be taken to work sites on Saturday need to be parked at Pelham Road Elementary School (100 All Star Way, Greenville - less than a mile from the campsite).</p>
    </div>
    </>
  }
  
  afterAssignments={<>
    <p>
      Teams should meet at the campsite location.  There are restrooms available at the campsite.
      The Church building will only be used for picking up supplies by team captains.
      There is no long term team parking at the church building.
    </p>
  </>}
  additionalInformation={<>
    <section style={{ marginTop: 24 }}>
      <Title level={4}>Camping</Title>
      <p>Camping for the Greenville Command Center is located at:</p>
      <Address address={[
        'Pelham Road Baptist Church',
        '1108 Pelham Road',
        'Greenville, SC 29615'
      ]} />
    </section>
  </>}
  sundayServices={<section style={{ marginTop: '40px' }}>
    <Title level={4}>Sunday Services</Title>
    <p>
      A short sacrament meeting will be held at the campsite on Sunday morning at 7:30 AM. Members should come in clean work clothes. Following the meeting, crews should plan to continue working.
      There will also be a sacrament meeting at the command center for those who are not camping and would like to attend there.
    </p>
  </section>}
   fuelAvailability="severely limited"
/>
