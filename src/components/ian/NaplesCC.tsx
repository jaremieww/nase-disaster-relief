import CommandCenter from './CommandCenter'

export default () => {
  return <CommandCenter
    address={<>
      4935 23rd Ct SW<br />
      Naples, FL 34116<br />
    </>}
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
    name="Naples"
    phoneNumber="941-702-2102"
    registrationLink=""
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