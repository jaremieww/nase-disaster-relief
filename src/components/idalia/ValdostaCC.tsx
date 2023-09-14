import { s3Url } from '../../lib/s3';
import CommandCenter from './CommandCenter';

export const ValdostaCC = () => <CommandCenter 
  address={[
    '2500 Jerry Jones Drive',
    'Valdosta, GA 31602-1250'
  ]}
  areaOversight={[
    {
      name: 'Brent Barnes',
      phoneNumber: '(865) 748-4260'
    }
  ]}
  director={{
    name: 'Pres. Jared Nelson',
    phoneNumber: '(678) 672-8142',
  }}
  assignedStakes={[
    'Cartersville, GA',
    'Coal Mountain, GA',
    'Fayetteville, GA',
    'Lilburn, GA',
    'Tifton, GA',
  ]}
  email='nase.idalia4@gmail.com'
  name='Valdosta'
  phoneNumber='(352) 320-3239'
  registrationLink='https://forms.gle/HCS6hPNKwKoWe2wZ8'
  closeoutFormLink='https://forms.gle/abYgJpKtE16VDJL99'
  campingAddress={[
    '120 Prison Farm Rd',
    'Valdosta, GA 31601'
  ]}
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
export default ValdostaCC