import CommandCenter from './CommandCenter';

export default () => <CommandCenter
  address={[
    '2200 Cobbs Ford Road',
    'Prattville, Alabama 36066-7702'
  ]}
  campingAddress={[
    'TBD',
    //'(tentative) YMCA of Prattville',
    //'972 McQueen Smith Rd S',
    //'Prattville, AL 36066'
  ]}
  areaOversight={[
    {
      name: 'Krista Donohoe',
      phoneNumber: '850-982-8499'
    },
    {
      name: 'Brent Barnes',
      phoneNumber: '865-748-4260'
    }
  ]}
  director={{
    name: 'President Greg Spears',
    phoneNumber: '334-717-6666'
  }}
  assignedStakes={[
    'Birmingham, AL',
    'Columbus, GA',
    'Dothan, AL',
    'Gadsden, AL',
    'Mobile, AL',
    'Montgomery, AL',
    'Tuscaloosa, AL',
    'Other'

  ]}
  email="nase.command1@gmail.com"
  name="Prattville"
  phoneNumber="(941) 876-8088"
  registrationLink="https://forms.gle/Y4dhzLbzcgsWUw4b9"
/>