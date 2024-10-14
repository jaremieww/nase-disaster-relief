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
      Secondary Camping<br/>
      <Address address={[
        'Devenger Road Presbyterian Church',
        '1200 Devenger Road',
        'Greer, SC 29650'
      ]} />
    </>
  }
  email=""
  assignedStakes={[
    'Charlotte NC Central ^',
    'Greenville SC East *',
    'Durham NC',
    'Goldsboro NC',
    'Greenville NC',
    'Raleigh NC South',
    'Raleigh NC',
    'Wake Forest NC',
    'Greenville SC'
  ]}
  phoneNumber="904-990-5769"
  registrationLink="https://forms.gle/NxXjS6sq3zWwb3dK9"
  closeoutFormLink=""
  areaOversight={[{
    name: 'Craig Bell',
    phoneNumber: ''
  },
  ]}
  director={{
    name: 'David Ladner',
    phoneNumber: '217-493-8150'
  }}

  campingInfo={
    <> 
    <p>
      <Title level={4}>Camping Information</Title>
      <p>Camping for the Greenville Command Center is located at:</p>
      <Address address={[
        'Pelham Road Baptist Church',
        '1108 Pelham Road',
        'Greenville, SC 29615'
      ]} />

      <p>Secondary location:</p>
      <Address address={[
        'Devenger Road Presbyterian Church',
        '1200 Devenger Road',
        'Greer, SC 29650'
      ]} />
      <p>Portable toilets and places for tents are available at both campsites.  Bring all your own needed supplies for the camping experience.  No one will be permitted inside the church.</p>

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
      </p>
    </>
  }
  
  afterAssignments={<>
    <Title level={4}>Command Center Hours</Title>
    <p>
      The Command Center will be open:
    </p>
      <li>Friday, 6:00 pm to 9:30 pm</li>
      <li>Saturday, 7:00 am to 9:30 pm</li>
      <li>Sunday, 7:00 am to 4:00 pm</li>
    <p> </p>
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
      Sacrament meeting will be held at 7:30 at all of the following locations. Choose whichever is most convenient for your team.
      <li>Command Center: 1301 Boiling Spring Rd., Greer, 29650</li>
      <li>Anderson: 412 Harden Rd. Anderson 29621</li>
      <li>Greenwood: 1417 Cokesbury Rd., Greenwood 29649</li>
      <li>Seneca/Clemson: 5003 Wells Hwy, Seneca 29678</li>
      <li>Laurens: 627 East Main St., Laurens 29360</li>
      <li>Gaffney: 701 West Bouford St., Gaffney 29341</li>
      <li>Inman: 3691 Clark Rd, Boiling Springs 29316</li>
      <li>Spartanburg: 121 Quail Dr., Spartanburg 29302</li>
     We will not hold sacrament meeting at the campgrounds, as previously planned.
    </p>
  </section>}
   fuelAvailability="severely limited"
/>
