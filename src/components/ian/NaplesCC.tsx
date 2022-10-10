import CommandCenter from './CommandCenter'

export default () => {
  return <CommandCenter
    address={[
      '4935 23rd Ct SW',
      'Naples, FL 34116'
    ]}
    assignedStakes={[
      'Miama, FL',
      'Naples, FL'
    ]}
    email="Ian.naplescc@gmail.com"
    name="Naples"
    phoneNumber="941-702-2102"
    registrationLink="https://forms.gle/5HYEV36VHNbqzDwE9"
    areaOversight={[]}
    director={{
      name: 'President Joseph Lindsey',
      phoneNumber: '239-877-7250'
    }}
  />
}