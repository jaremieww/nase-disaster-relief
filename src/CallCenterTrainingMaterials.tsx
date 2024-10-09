import { Typography, Space } from 'antd'
import DirectoryListing from './components/DirectoryListing'
import PopoutLink from './components/PopoutLink'
import Icon from '@ant-design/icons'
import {FaVideo} from 'react-icons/fa'


const { Title } = Typography

export default function CallCenterTrainingMaterials() {
  return <>
    <Title level={2}>Call Center Training Materials</Title>
    <PopoutLink href="https://www.youtube.com/watch?v=WnRuH7YMd4k">
      <Space>
      <Icon component={FaVideo}/>
        "Work Order Distribution for Command Center Staff"
      </Space>
    </PopoutLink>
           
    <DirectoryListing directory='call-center' />
  </>
}
