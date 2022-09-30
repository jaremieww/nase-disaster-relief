import CommandCenter from './CommandCenter'

export default () => {
  return <CommandCenter
    address={<>
      4935 23rd Ct SW<br />
      Naples, FL 34116<br />
    </>}
    assignedStakes={[
      'Miami Lakes, FL',
      'Miami, FL',
      'Fort Lauderdale, FL',
    ]}
    name="Naples"
    phoneNumber="941-702-2102"
    registrationLink=""
    areaOversight={{
      name: 'Krista Donohoe',
      phoneNumber: '850-982-8499'
    }}
    director={{
      name: 'President Joseph Lindsey',
      phoneNumber: '239-877-7250'
    }}
  />
}