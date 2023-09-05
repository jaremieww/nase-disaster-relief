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
    'Cocoa, FL',
    'Jacksonville, FL South',
    'Lake City, FL',
    'Lakeland, FL',
    'Orlando, FL South',
    'Stuart, FL',
    'Vero Beach, FL',
  ]}
  phoneNumber="(352) 558-9605"
  registrationLink="https://forms.gle/zNmj6crPgsRbzZgz9"
  closeoutFormLink="https://forms.gle/hqcPSsqRYtzTy15fA"
  areaOversight={[
    {
      name: 'Craig Bell',
      phoneNumber: '(801) 616-1015'
    }
  ]}
  director={{
    name: 'Pres. Jeff Oldham',
    phoneNumber: '(386) 361-3334'
  }}
  additionalInformation={
    <section>
      <h3>Command Center Layout</h3>
      <img src={s3Url('/idalia/lake-city-command-center.jpg')} alt="Lake City Command Center Layout" style={{maxWidth: '100%'}} />
      <h3>Campsite Map</h3>
      <img src={s3Url('/idalia/lake-city-camping.jpg')} alt="Lake City Campsite Map" style={{maxWidth: '100%'}} />
      <p>Campsite has men's and women's restrooms—two stalls each. <strong>No Showers</strong></p>
    </section>
  }
  sacramentLocation='command-center'

/>
