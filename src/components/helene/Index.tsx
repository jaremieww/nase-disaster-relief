import { List, Space, Typography } from "antd"
import { S3Link, formatS3Url } from "../S3"
import PopoutLink from "../PopoutLink"

const { Title } = Typography

const files = [
  { title: 'Florida ESF Vehicle Placard', path: 'idalia/esf-15.pdf' },
  { title: 'Crisis Cleanup Flier - English', path: 'idalia/cc_idalia_en.jpg' },
  { title: 'Folleto de Crisis Cleanup - Español', path: 'idalia/cc_idalia_es.jpg' },
  { title: 'Crisis Cleanup First Responders Flyer', path: 'idalia/first-responder-flyer.pdf' }
]

export default () => {
  return <Space direction="vertical" size="large" style={{ width: '100%' }}>
    <Title level={2}>Hurricane Helene</Title>
    <Space size="large" align="start">
      <Space direction="vertical">
        <img
          src={formatS3Url('idalia/idalia-satellite.jpeg')}
          alt="Hurricane Idalia Satellite View"
          style={{ maxWidth: 600 }} />
        <cite>Image courtesy of <PopoutLink href="https://earthobservatory.nasa.gov">NASA Earth Observatory</PopoutLink></cite>
      </Space>
      <Space direction="vertical" size="large">
        <section>
          <Title level={3}>Command Centers</Title>
          <Space direction="vertical">
            <a href="/helene/hmadison">Madison</a>
            <a href="/helene/hlake-city">Lake City</a>
            <a href="/helene/hvaldosta">Valdosta</a>
          </Space>
        </section>

        <section>
          <Title level={3}>Social Media</Title>
          <PopoutLink href="https://www.facebook.com/groups/disasterreliefnase/?ref=share_group_link">Facebook - Disaster Relief NASE</PopoutLink>
        </section>

        <section>
          <Title level={3}>Files</Title>
          <List
            dataSource={files}
            renderItem={item => <List.Item><S3Link path={item.path}>{item.title}</S3Link></List.Item>}
            rowKey={item => item.path} />
        </section>
      </Space>
    </Space>
  </Space>
}
