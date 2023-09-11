import CommandCenter from "./CommandCenter";

export default () => <CommandCenter
  name="Madison"
  address={[
    '1374 W Base St',
    'Madison, FL 32340-1416'
  ]}
  campingAddress={[
    'Lanier Field',
    '281 NW Crane Ave',
    'Madison, FL 32340'
  ]}
  email="nase.command1@gmail.com"
  assignedStakes={[
    'Dothan, AL',
    'Fort Walton Beach, FL',
    'Ft. Myers, FL',
    'Kingsland, GA',
    'Pensacola, FL',
    'Sarasota, FL',
    'Savannah, GA',
    'St. Petersburg, FL',
    'Tallahassee, FL',
    'Tampa, FL',
  ]}
  phoneNumber="(352) 247-2490"
  registrationLink="https://forms.gle/WYctWTgJJVqbZqrb9"
  closeoutFormLink="https://forms.gle/ibX5iiSenrkSkRLf8"
  areaOversight={[
    {
      name: 'Mike Dohm',
      phoneNumber: '(985) 718-9753'
    },
  ]}
  director={{
    name: 'Pres. Aaron Holloway',
    phoneNumber: '(850) 694-8555'
  }}
  sacramentLocation='campsite'
/>
