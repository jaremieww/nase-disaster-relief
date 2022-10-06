import CommandCenter from './CommandCenter'

export default () => {
  return <CommandCenter
    address={[
      '4935 23rd Ct SW',
      'Naples, FL 34116'
    ]}
    assignedStakes={[
      'Ft. Lauderdale, FL',
      'Miama, FL South',
      'Miami Lakes, FL',
      'Vero Beach, FL',
      'Orland, FL West',
      'Orland, FL',
      'Coral Springs, FL',
      'Boynton Beach, FL'
    ]}
    email="Ian.naplescc@gmail.com"
    name="Naples"
    phoneNumber="941-702-2102"
    registrationLink="https://forms.gle/cwper6ypi3TXL4Kj8"
    areaOversight={{
      name: 'Mike Dohm',
      phoneNumber: '985-718-9753'
    }}
    director={{
      name: 'President Troy Zirker',
      phoneNumber: '754-245-5946'
    }}
  />
}