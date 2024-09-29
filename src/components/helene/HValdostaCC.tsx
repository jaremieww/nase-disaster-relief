import { s3Url } from '../../lib/s3';
import CommandCenter from './CommandCenter';

export const HValdostaCC = () => <CommandCenter 
  address={[]}
  areaOversight={[]}
  director={{
    name: '',
    phoneNumber: '',
  }}
  assignedStakes={[]}
  email=''
  name='Command Center Three'
  phoneNumber=''
  registrationLink=''
  closeoutFormLink=''
  campingAddress={[]}
  sacramentLocation='command-center'
  sacramentTime='7:00 AM'
  additionalInformation={
    <section>
      <h3>Command Center Layout</h3>
      <img src={s3Url('/idalia/valdosta-cc-layout.jpg')} alt="Valdosta Command Center Layout" style={{maxWidth: '100%'}} />
      <h3>Campsite Map</h3>
      <img src={s3Url('/idalia/valdosta-camping.png')} alt="Valdosta Campsite" style={{maxWidth: '100%'}} />
    </section>
  }
/>
export default HValdostaCC
