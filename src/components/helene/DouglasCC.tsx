import { Typography } from 'antd'
import Address from "../Address";
import CommandCenter from "./CommandCenter";
import {  formatS3Url } from "../S3"

const { Title } = Typography

export default () => <CommandCenter
  commandORoperation="Command"
  name="Douglas"
  address={[
    '200 Chester Avenue North',
    'DOUGLAS, Georgia 31533'
  ]}
  campingAddress={[
    'Davis Wade Park',
    '807 W Bryan Street',
    'Douglas, GA'
  ]}
  campingAddressNote={
    <>
      RV and Heavy Equipment Parking<br />
      <Address address={[
        '200 Chester Avenue North',
        'DOUGLAS, Georgia 31533'
      ]} />
    </>
  }
  bigmessage = {
    '

Topic: Douglas Week 4 Team Captain Meeting
Time: Oct 23, 2024 08:00 PM Eastern Time (US and Canada)

Join Zoom Meeting
https://zoom.us/j/94056543852?pwd=cyoEoZmwBx7x08Jac3kLaJ0EvPfMDZ.1

Meeting ID: 940 5654 3852
Passcode: 559921

---

One tap mobile
+13052241968,,94056543852#,,,,*559921# US
+16469313860,,94056543852#,,,,*559921# US

---

Dial by your location
• +1 305 224 1968 US
• +1 646 931 3860 US
• +1 929 205 6099 US (New York)
• +1 301 715 8592 US (Washington DC)
• +1 309 205 3325 US
• +1 312 626 6799 US (Chicago)
• +1 386 347 5053 US
• +1 507 473 4847 US
• +1 564 217 2000 US
• +1 669 444 9171 US
• +1 669 900 6833 US (San Jose)
• +1 689 278 1000 US
• +1 719 359 4580 US
• +1 253 205 0468 US
• +1 253 215 8782 US (Tacoma)
• +1 346 248 7799 US (Houston)
• +1 360 209 5623 US

Meeting ID: 940 5654 3852
Passcode: 559921

Find your local number: https://zoom.us/u/adLxOckRWZ

  
  }
  email="idastorm25@gmail.com"
  assignedStakes={[
    'Lake City FL *',
    'Pensacola FL',
    'Tifton GA',
    'Atlanta GA',
    'Conyers GA',
    'Fayetteville GA',
    'Newnan GA',
    'Powder Springs GA',
    'Athens GA',
    'Cartersville GA',
    'Marietta GA',
    'Winder GA',
  ]}
  phoneNumber="904-902-8063"
  registrationLink="https://forms.gle/9VVxrYKGsHoXp3Lx9"
  closeoutFormLink=""
  areaOversight={[{
    name: 'Jaremie Woodruff',
    phoneNumber: '904-864-0623'
  },
  ]}
  director={{
    name: 'Mark Duren',
    phoneNumber: '386-623-4498'
  }}
  afterAssignments={<>
    <p>
      Teams should meet at the campsite location.
      There are showers, restrooms, water, gloves, and t-shirts available there.
      The Church building will only be used for picking up supplies.
      There is no parking at the church building.
    </p>
  </>}
  additionalInformation={<>
    <section style={{ marginTop: 24 }}>
      <Title level={4}>Camping</Title>
      <p>Camping for the Douglas Commmand Center is located at:</p>
      <Address address={[
        'Davis Wade Park',
        '807 W Bryan Street',
        'Douglas, GA'
      ]} />
       <img
              src={formatS3Url('helene/Douglas1.jpg')}
              alt="Command Centers Map" 
              style={{ maxWidth: 500 }}
             />
          <img
              src={formatS3Url('helene/Douglas2.jpg')}
              alt="Command Centers Map" 
              style={{ maxWidth: 500 }}
             />     
    </section>
  </>}
  sundayServices={<section style={{ marginTop: '40px' }}>
    <Title level={4}>Sunday Services</Title>
    <p>
      A short Sacrament meeting will be held at the church on Sunday morning at 7:30 AM. Members should come in clean work clothes. Following the meeting, crews should plan to continue working.
    </p>
  </section>}
   fuelAvailability="limited"
/>
