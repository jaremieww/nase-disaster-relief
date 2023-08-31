import { List, Space, Typography } from "antd"
import { S3Link, formatS3Url } from "../S3"
import PopoutLink from "../PopoutLink"

const { Title } = Typography

const files = [
  { title: 'Crisis Cleanup Flier - English', path: 'idalia/cc_idalia_en.jpg' },
  { title: 'Folleto de Crisis Cleanup - Español', path: 'idalia/cc_idalia_es.jpg' },
]

export default () => {
  return <Space direction="vertical" size="large">
    <Title level={2}>Hurricane Idalia</Title>

    <Space direction="vertical">
      <img
        src={formatS3Url('idalia/idalia.jpeg')}
        alt="Hurricane Idalia Satellite View"
        style={{ maxWidth: 600 }} />
      <cite>Image courtesy of <PopoutLink href="https://nhc.noaa.gov">NHC</PopoutLink></cite>
    </Space>

    <section>
      <Title level={3}>Command Centers</Title>
      <Space direction="vertical">
        <a href="/idalia/cc1">Madison Command Center</a>
        <a href="/idalia/cc2">Lake City Command Center</a>
        <a href="/idalia/cc3">Chiefland Command Center</a>
      </Space>
    </section>

    <section>
      <Title level={3}>Files</Title>
      <List
        dataSource={files}
        renderItem={item => <List.Item><S3Link path={item.path}>{item.title}</S3Link></List.Item>}
        rowKey={item => item.path} />
    </section>
  </Space>
}