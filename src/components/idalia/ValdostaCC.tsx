import { s3Url } from '../../lib/s3';
import CommandCenter from './CommandCenter';

export const ValdostaCC = () => <CommandCenter 
  address={[
    '2500 Jerry Jones Drive',
    'Valdosta, GA 31602-1250'
  ]}
  areaOversight={[
    {
      name: 'Michael Lavoie',
      phoneNumber: '(352) 672-0455'
    }
  ]}
  assignedStakes={[
    'TBD'
  ]}
  email='nase.idalia4@gmail.com'
  name='Valdosta'
  phoneNumber='(352) 320-3239'
  registrationLink='https://forms.gle/LE2TJ7L79Md49z5y9'
  closeoutFormLink='https://forms.gle/Yfo4DPvk9GCinP3r5'
  campingAddress={[
    '120 Prison Farm Rd',
    'Valdosta, GA 31601'
  ]}
  // director={{
  //   name: 'Pres. Jordan Jewkes',
  //   phoneNumber: '(404) 803-1832',
  // }}
  sacramentLocation='campsite'
  sacramentTime='8:00 AM'
  additionalInformation={
    <section>
      <h3>Command Center Layout</h3>
      <img src={s3Url('/idalia/valdosta-cc-layout.jpg')} alt="Valdosta Command Center Layout" style={{maxWidth: '100%'}} />
      <h3>Campsite Map</h3>
      <img src={s3Url('/idalia/valdosta-camping.png')} alt="Valdosta Campsite" style={{maxWidth: '100%'}} />
    </section>
  }
/>
export default ValdostaCC