import CommandCenter from './CommandCenter'

export default () => {
  return <CommandCenter
    address={<>
      315 Richmond Ave N<br />
      Lehigh Acres, FL 33936<br />
    </>}
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