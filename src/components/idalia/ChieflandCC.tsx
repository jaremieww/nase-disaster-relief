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
    'Gainesville, FL',
    'Jacksonville, FL West',
    'Lake Mary, FL',
    'Leesburg, FL',
    'Orlando, FL West',
  ]}
  phoneNumber="(352) 559-2335"
  registrationLink="https://forms.gle/W18U1kCuA7nx8fCe8"
  closeoutFormLink="https://forms.gle/Z5fBjdNDVg25GLUG7"
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
    phoneNumber: '(334) 749-0951'
  }}
/>
