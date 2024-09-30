import { List, Space, Typography } from "antd"
import { S3Link } from "../S3"
//import { S3Link, formatS3Url } from "../S3"
//import PopoutLink from "../PopoutLink"

const { Title } = Typography

const files = [
  { title: 'Crisis Cleanup Flier - English', path: 'ian/cc-ian-english.jpg' },
  { title: 'Folleto de Crisis Cleanup - Español', path: 'ian/cc-ian-spanish.jpg' },
  { title: 'Vehicle Placard', path: 'ian/florida-dashboard-placard.pdf' }
]

export default () => {
  return <Space direction="vertical" size="large">
    <Title level={2}>Hurricane Helene</Title>

    {/* <Space direction="vertical">
      <img
        src={formatS3Url('ian/ian-satellite-800w.jpg')}
        alt="Hurricane Ian Satellite View"
        style={{ maxWidth: 600 }} />
      <cite>Image courtesy of <PopoutLink href="https://earthobservatory.nasa.gov/images/150408/hurricane-ian-reaches-florida">NASA</PopoutLink></cite>
    </Space> */}

    <section>
      <Title level={3}>Command Centers</Title>
      <Space direction="vertical">
        <a href="/ian/asheville">Asheville</a>
        <a href="/ian/savannah">Vidalia</a>
        <a href="/ian/aiken">Aiken</a>
        <a href="/ian/lenior">Lenior</a> 
        <a href="/ian/douglas">Douglas</a>
        <a href="/ian/waycross">Waycross</a>
        <a href="/ian/valdosta">Valdosta</a>
        <a href="/ian/madison">Madison</a>
        <a href="/ian/lakecity">Lake City</a>
        <a href="/ian/chiefland">Chiefland</a>
        <a href="/ian/stpetersburg">St. Petersburg</a>   
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