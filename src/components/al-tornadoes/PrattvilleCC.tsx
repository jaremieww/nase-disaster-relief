import { Space } from 'antd'
import { CompassOutlined } from '@ant-design/icons';
import { S3Link } from '../S3';
import CommandCenter from './CommandCenter';

export default () => <CommandCenter
  address={[
    '2200 Cobbs Ford Road',
    'Prattville, Alabama 36066-7702'
  ]}
  campingAddress={[
    'YMCA of Prattville',
    '972 McQueen Smith Rd S',
    'Prattville, AL 36066'
  ]}
  campingAddressNote={
    <S3Link path="al-tornadoes/camping-maps.pdf"><Space><CompassOutlined />Campsite, RV, and Large Equipment Maps</Space></S3Link>
  }
  areaOversight={[
    {
      name: '',
      phoneNumber: ''
    },
    {
      name: '',
      phoneNumber: ''
    }
  ]}
  director={{
    name: '',
    phoneNumber: ''
  }}
  assignedStakes={[
    'Birmingham, AL',
    'Columbus, GA',
    'Dothan, AL',
    'Gadsden, AL',
    'Mobile, AL',
    'Montgomery, AL',
    'Tuscaloosa, AL',
    'Other'

  ]}
  email="nase.command1@gmail.com"
  name="Prattville"
  phoneNumber="(941) 876-8088"
  registrationLink="https://forms.gle/Y4dhzLbzcgsWUw4b9"
/>