import { Typography } from 'antd'
import Address from "../Address";
import CommandCenter from "./CommandCenter";

const { Title } = Typography

export default () => <CommandCenter
  commandORoperation="Command"
  name="Bradenton"
  address={[
    '3400 CortezRoad',
    'BRADENTON, Florida 34210-3101'
  ]}
  campingAddress={[
    '3400 CortezRoad',
    'BRADENTON, Florida 34210-3101'
  ]}
  campingAddressNote={
    <>
      RV and Heavy Equipment Parking<br />
      <Address address={[
        '3400 CortezRoad',
        'BRADENTON, Florida 34210-3101'
      ]} />
    </>
  }
  email="ian.venicecc@gmail.com"
  assignedStakes={[
    'Cocoa FL',
    'Leesburg FL',
    'Orlando FL',
    'Orlando FL West',
    'Palm Bay FL',
    'Ft Myers FL',
    'St Cloud FL',
    '(Sarasota FL *)'
  ]}
  phoneNumber="904-990-5797"
  registrationLink="https://forms.gle/RuEYzfjcdPPJVkJa9"
  closeoutFormLink=""
  areaOversight={[{
    name: 'Keith Nash',
    phoneNumber: '770-820-8085'
  },
  ]}
  director={{
    name: 'Mike Meyers',
    phoneNumber: '813-966-8284'
  }}
  afterAssignments={<>
    <p>
      Teams should meet at the campsite location.
      There are showers, restrooms, water, gloves, and t-shirts available there.
      The Church building will only be used for picking up supplies.
      There is no parking at the church building.
    </p>
  </>}

  sundayServices={<section style={{ marginTop: '40px' }}>
    <Title level={4}>Sunday Services</Title>
    <p>
      A short Sacrament meeting will be held at the church building on Sunday morning at 7:30 AM. Members should come in clean work clothes. Following the meeting, crews should plan to continue working.
    </p>
  </section>}
   fuelAvailability="limited"
/>
