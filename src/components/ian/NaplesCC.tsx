import CommandCenter from './CommandCenter'

export default () => {
  return <CommandCenter
    address={[
      '4935 23rd Ct SW',
      'Naples, FL 34116'
    ]}
    assignedStakes={[
      'Naples, FL'
    ]}
    email="Ian.naplescc@gmail.com"
    name="Naples"
    phoneNumber="941-702-2102"
    registrationLink="https://forms.gle/WZLCbGhoWfCfcxGf9"
    areaOversight={[]}
    director={{
      name: 'President Joseph Lindsey',
      phoneNumber: '239-877-7250'
    }}
  />
}