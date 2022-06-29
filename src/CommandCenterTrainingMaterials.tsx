import { Typography } from 'antd'
import DirectoryListing from './components/DirectoryListing'

const { Title } = Typography

export default function CallCenterTrainingMaterials() {
  return <>
    <Title level={2}>Command Center Training Materials</Title>
    <DirectoryListing directory='command-center' />
  </>
}