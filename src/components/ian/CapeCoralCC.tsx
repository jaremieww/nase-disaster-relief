import CommandCenter from "./CommandCenter";

export default () => <CommandCenter
  name="Cape Coral"
  address={<>
    1928 Chiquita Blvd S<br/>
    Cape Coral, FL 33991
  </>}
  assignedStakes={[
    'Stuart, FL',
    'Brandon, FL',
    'Lakeland, FL',
    'Ocala, FL',
    'Odessa, FL',
    'Orlando, FL South',
    'St. Petersburg, FL',
    'Tampa, FL',
    'St. Cloud, FL'
  ]}
  phoneNumber="941-876-8088"
  registrationLink="https://forms.gle/8MhC1hEZrRP7CHbc8"
  areaOversight={{
    name: 'Keith Nash',
    phoneNumber: '770-820-8085'
  }}
  director={{
    name: 'President Bradley Westover',
    phoneNumber: '561-644-1109'
  }}
/>