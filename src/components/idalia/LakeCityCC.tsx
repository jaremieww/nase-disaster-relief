import { s3Url } from '../../lib/s3';
import PopoutLink from '../PopoutLink';
import CommandCenter from "./CommandCenter";

export default () => <CommandCenter
  name="Lake City"
  address={[]}
  campingAddress={[]}
  campingAddressNote="Camp site has plenty of room for RVs and campers"
  email=""
  assignedStakes={[]}
  phoneNumber=""
  registrationLink=""
  closeoutFormLink=""
  areaOversight={[]}
  director={{
    name: '',
    phoneNumber: ''
  }}
  additionalInformation={
    <section>
      <h3>Command Center Layout</h3>
      <img src={s3Url('/idalia/lake-city-command-center.jpg')} alt="Lake City Command Center Layout" style={{maxWidth: '100%'}} />
      <h3>Campsite Map</h3>
      <img src={s3Url('/idalia/lake-city-camping.png')} alt="Lake City Campsite Map" style={{maxWidth: '100%'}} />
    </section>
  }
  sacramentLocation='command-center'
  sacramentTime='8:00 AM'
  additionalTraining={<>
    <li><PopoutLink href="https://sites.google.com/view/nase-command-center/home">Lake City Command Center Training</PopoutLink></li>
  </>}
/>
