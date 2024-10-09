import { Typography } from 'antd'
import DirectoryListing from './components/DirectoryListing'
//import PopoutLink from './components/PopoutLink'
//import { Icon } from '@ant-design/icons'
//import { FaFile } from 'react-icons/fa'


const { Title } = Typography

export default function CallCenterTrainingMaterials() {
  return 
  <>
    {/* <Title level={2}>Call Center Training Materials</Title>
    <Space direction="vertical">
      <PopoutLink href="https://docs.google.com/document/d/1VH9Ha17pUrznSEfVedwzbHcaAksDtZkd4Gxot2FHO_c/edit?usp=sharing">
        <FaFile />
          "2024 - NASE Phone Volunteer - Training Guide"
      </PopoutLink>
      <PopoutLink href="https://docs.google.com/document/d/1bWB7qaHWlzdb-YSvA1x-3S9ehfwKTDCaJDgCqRG6b98/edit">
      <FaFile />
          "2024 - NASE Stake Call Center Leadership Guide"
      </PopoutLink>
    </Space> */}
           
    <DirectoryListing directory='call-center' />
  </>
}
