import { s3Url } from '../../lib/s3';
import CommandCenter from "./CommandCenter";

export default () => <CommandCenter
  name="Lake City"
  address={[
    '909 SE Country Club Rd',
    'Lake City, FL 32025-3301'
  ]}
  campingAddress={[
    'Columbia County Fire and Rescue 51',
    '1579 NW Lake Jeffery Rd',
    'Lake City, FL 32055'
  ]}
  campingAddressNote="Camp site has plenty of room for RVs and campers"
  email="nase.idalia2+lakecity@gmail.com"
  assignedStakes={[
    'Aiken, SC',
    'DeLand, FL',
    'Lake City, FL',
    'Lake Mary, FL',
    'Orlando, FL',
    'Orlando, FL South',
    'St. Cloud, FL',
  ]}
  phoneNumber="(352) 558-9605"
  registrationLink="https://forms.gle/KAiaFAiGdZgctJRh6"
  closeoutFormLink="https://forms.gle/ehtzbmdgcJfxPW4U7"
  areaOversight={[
    {
      name: 'Craig Bell',
      phoneNumber: '(801) 616-1015'
    }
  ]}
  director={{
    name: 'Pres. Scott Hinson',
    phoneNumber: '(904) 631-7851'
  }}
  additionalInformation={
    <section>
      <h3>Command Center Layout</h3>
      <img src={s3Url('/idalia/lake-city-command-center.jpg')} alt="Lake City Command Center Layout" style={{maxWidth: '100%'}} />
      <h3>Campsite Map</h3>
      <img src={s3Url('/idalia/lake-city-camping.jpg')} alt="Lake City Campsite Map" style={{maxWidth: '100%'}} />
    </section>
  }
  sacramentLocation='command-center'
  sacramentTime='8:00 AM'
/>
