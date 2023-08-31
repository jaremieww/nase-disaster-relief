import { Typography } from 'antd'
import DirectoryListing from './components/DirectoryListing'

const { Title } = Typography

export default function CommunicationsTrainingMaterials() {
  return <>
    <Title level={2}>Communications Training Materials</Title>
    <DirectoryListing directory='communications' />
  </>
}