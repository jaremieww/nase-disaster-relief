import CommandCenter from "./CommandCenter";

export default () => <CommandCenter
  name="Chiefland"
  address={[
    '215 NE 8th St',
    'Chiefland, FL 32626-1051'
  ]}
  campingAddress={[
    '2340 Old Fannin Rd',
    'Chiefland, FL 32626'
  ]}
  campingAddressNote="Work crews should arrive to the camp site. The command center has limited space, so please keep traffic there to a minimum."
  email="nase.idalia3@gmail.com"
  assignedStakes={[
    'Boynton Beach, FL',
    'Coral Springs, FL',
    'Naples, FL',
    'Gainesville, FL',
    'Jacksonville, FL West',
    'St. Cloud, FL',
  ]}
  phoneNumber="(352) 559-2335"
  registrationLink="https://forms.gle/KEdyZfKF2aHZ7AbJ7"
  closeoutFormLink="https://forms.gle/zz1dPtjDF4nv8aSj8"
  areaOversight={[
    {
      name: 'Keith Nash',
      phoneNumber: '(770) 820-8085'
    },
    {
      name: 'Clay Hudgins',
      phoneNumber: '(904) 303-0007'
    }
  ]}
  director={{
    name: 'Pres. Brian Flynn',
    phoneNumber: '(404) 547-6203'
  }}
  sacramentLocation='campsite'
/>
