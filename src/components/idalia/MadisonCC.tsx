import CommandCenter from "./CommandCenter";

export default () => <CommandCenter
  name="Madison"
  address={[
    '1374 W Base St',
    'Madison, FL 32340-1416'
  ]}
  email="nase.command1@gmail.com"
  assignedStakes={[
    'Dothan, AL',
    'Fort Walton Beach, FL',
    'Panama City, FL',
    'Pensacola, FL',
    'Tallahassee, FL',
  ]}
  phoneNumber="TBD"
  registrationLink="https://forms.gle/immWuircbdi4asgu7"
  closeoutFormLink="https://forms.gle/abMTwz9bvZSvj8eu7"
  areaOversight={[
    {
      name: 'Krista Donohoe',
      phoneNumber: '(850) 982-8499'
    },
    {
      name: 'Mike Dohm',
      phoneNumber: '(985) 718-9753'
    }
  ]}
  director={{
    name: 'Pres. Jacob Fish',
    phoneNumber: '(850) 624-3055'
  }}
/>
