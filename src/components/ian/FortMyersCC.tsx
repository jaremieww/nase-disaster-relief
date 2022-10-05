import CommandCenter from './CommandCenter'

export default () => {
  return <CommandCenter
    address={[
      '1315 Richmond Ave N',
      'Lehigh Acres, FL 33936'
    ]}
    assignedStakes={[
      'Stuart, FL',
      'Coral Springs, FL',
      'Boynton Beach, FL',
    ]}
    name="Fort Myers"
    phoneNumber={'941-315-4245'}
    registrationLink=""
    areaOversight={{
      name: 'Keith Nash',
      phoneNumber: '770-820-8085'
    }}
    director={{
      name: 'President Christopher Thompson',
      phoneNumber: '239-265-2495'
    }} />
}