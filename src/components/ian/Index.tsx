import { Alert, List, Space, Typography } from "antd"
import { S3Link, formatS3Url } from "../../S3"
import PopoutLink from "../PopoutLink"

const { Paragraph, Title } = Typography

const files = [
  { title: 'Crisis Cleanup Flier - English', path: 'ian/cc-ian-english.jpg' },
  { title: 'Folleto de Crisis Cleanup - Español', path: 'ian/cc-ian-spanish.jpg' },
  { title: 'Vehicle EF-15 Placard', path: 'ian/EF-15-signage.pdf' }
]

export default () => {
  return <Space direction="vertical" size="large">
    <Title level={2}>Hurricane Ian</Title>

    <Space direction="vertical">
      <img
        src={formatS3Url('ian/ian-satellite-800w.jpg')}
        alt="Hurricane Ian Satellite View"
        style={{ maxWidth: '100%' }} />
      <cite>Image courtesy of <PopoutLink href="https://earthobservatory.nasa.gov/images/150408/hurricane-ian-reaches-florida">NASA</PopoutLink></cite>
    </Space>

    <Alert showIcon type="info" message="Weekend of October 1, 2022" description={
      <Paragraph>
        A limited number of units will be working  on Saturday, October 1, 2022.
        All vehicles must display the <S3Link path="ian/EF-15-signage.pdf">EF-15 placard.</S3Link>
      </Paragraph>
    } />

    <section>
      <Title level={3}>Command Centers</Title>
      <Space direction="vertical">
        <a href="/ian/naples">Naples Command Center</a>
        {/* <a href="/ian/fort-myers">Fort Myers Command Center</a> */}
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