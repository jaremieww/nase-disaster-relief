import CommandCenter from "./CommandCenter";

export default () => <CommandCenter
  name="Lake City"
  address={[
    '909 SE Country Club Rd',
    'Lake City, FL 32025-3301'
  ]}
  email="nase.idalia2@gmail.com"
  assignedStakes={[
    'Deland, FL',
    'Jacksonville, FL East',
    'Jacksonville, FL South',
    'Lake City, FL',
    'Orland, FL',
  ]}
  phoneNumber="(352) 405-5764"
  registrationLink="https://forms.gle/aaNQdeAetRFqeQhT6"
  closeoutFormLink="https://forms.gle/hqcPSsqRYtzTy15fA"
  areaOversight={[
    {
      name: 'Eric Andres',
      phoneNumber: '(801) 854-8368'
    }
  ]}
  director={{
    name: 'Pres. Michael Lavoie',
    phoneNumber: '(352) 672-0455'
  }}
/>
