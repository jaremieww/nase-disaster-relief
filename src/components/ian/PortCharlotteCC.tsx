import CommandCenter from "./CommandCenter";

export default () => <CommandCenter 
  name="Port Charlotte"
  address={<>
    1303 Forrest Nelson Blvd<br/>
    Port Charlotte, FL 33952
  </>}
  assignedStakes={[
    'Cocoa, FL',
    'Gainesville, FL',
    'Jacksonville, FL East',
    'Jacksonville, FL West',
    'Jacksonville, FL South',
    'Kingsland, FL',
    'Lake City, FL'
  ]}
  phoneNumber="850-912-9756"
  registrationLink=""
  areaOversight={{
    name: 'Kristas Donohoe',
    phoneNumber: '850-982-8499'
  }}
  director={{
    name: 'President Michael Fowler',
    phoneNumber: '321-794-9547'
  }}
/>