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
      <p>Camping for the Greenville Command Center is located at:</p>
      <Address address={[
        'Pelham Road Baptist Church',
        '1108 Pelham Road',
        'Greenville, SC 29615'
      ]} />
      
      <p>Portable toilets and places for tents are available at the campsite, 2.5 miles from the command center.  Bring all your own needed supplies for the camping experience.  No one will be permitted inside the church.</p>

      <p>No portable showers at the campsite.  Showers are available at the 3 YMCAs and 3 Planet Fitness gyms listed below SATURDAY 5-7pm ONLY!  Please bring your shower supplies with you to your worksites on Saturday so that you can shower between 5 and 7 pm at the facility that is closest to your worksite.</p>
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

      <Address address={[
        'Planet Fitness',
        '101 Verdae Blvd',
        'Greenville, SC 29607'
      ]} />

      
      <Title level={4}>Campsite Parking</Title>
      <p>Pelham Road Baptist Church needs full access to their parking lot on Saturday for a funeral.  Any cars that will not be taken to work sites on Saturday need to be parked at Pelham Road Elementary School (100 All Star Way, Greenville - less than a mile from the campsite).</p>
    </div>
    </>
  }
  
  afterAssignments={<>
    <Title level={4}>Command Center Hours</Title>
    <p>
      The Command Center will be open:
    </p>
      <li>Friday, 5:30 pm to 9:30 pm</li>
      <li>Saturday, 7:00 am to 9:30 pm</li>
      <li>Sunday, 7:00 am to 4:00 pm</li>
    
    <p>
      Teams should find a meeting place that is not the Command Center. If camping, they can meet at the campsite location. If not camping, they can meet at their first work order site. 
      There are restrooms available at the campsite.
      The Church building will only be used for picking up supplies by team captains.
      There is no long term team parking at the church building.
    </p>
  </>}
  additionalInformation={<>
    <section style={{ marginTop: 24 }}>
      <p>If you need additional information, feel free to contact the Command Center director, David Ladner at 217-493-8150 or davidaladner@gmail.com.</p>

    </section>
  </>}
  sundayServices={<section style={{ marginTop: '40px' }}>
    <Title level={4}>Sunday Services</Title>
    <p>
      Because teams are spread over a large area, sacrament meetings will be held at various locations at 7:30 am on Sunday morning. 
      Locations include the Stake Center (Command Center location); Anderson, Greenwood, Seneca, and Simpsonville ward buildings; 
      and the Laurens Branch building. Each team may choose the location most convenient for them.
      Team members should come in clean work clothes, if possible. Following the meeting, crews should plan to continue working.
    </p>
  </section>}
   fuelAvailability="severely limited"
/>
