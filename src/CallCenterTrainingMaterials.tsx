import { Typography, Space } from 'antd'
import DirectoryListing from './components/DirectoryListing'
import PopoutLink from './components/PopoutLink'
import { Icon } from '@ant-design/icons'
import {FaVideo} from 'react-icons/fa'


const { Title } = Typography

export default function CallCenterTrainingMaterials() {
  return <>
    <Title level={2}>Call Center Training Materials</Title>
    <Space direction="vertical">
    <PopoutLink href="https://docs.google.com/document/d/1VH9Ha17pUrznSEfVedwzbHcaAksDtZkd4Gxot2FHO_c/edit?usp=sharing">
      <Space>
      <Icon component={FaVideo}/>
        "2024 - NASE Phone Volunteer - Training Guide"
      </Space>
    </PopoutLink>
    <PopoutLink href="https://docs.google.com/document/d/1bWB7qaHWlzdb-YSvA1x-3S9ehfwKTDCaJDgCqRG6b98/edit">
      <Space>
      <Icon component={FaVideo}/>
        "2024 - NASE Stake Call Center Leadership Guide"
      </Space>
    </PopoutLink>
    </Space>
           
    <DirectoryListing directory='call-center' />
  </>
}
