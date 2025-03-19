import { List, Space, Typography } from "antd"
import { S3Link, formatS3Url } from "../S3"
import './Index.css'
//import PopoutLink from "../PopoutLink"
import { ApartmentOutlined } from '@ant-design/icons'


const { Title } = Typography

const files = [
  { title: 'Crisis Cleanup Flier - English', path: 'helene/Helene_social_media_8449651386_en-US.png' },
  { title: 'Folleto de Crisis Cleanup - Español', path: 'helene/Helene_social_media_8449651386_es-MX.png' },
  { title: 'Vehicle Placard - REQUIRED IN FLORIDA ONLY', path: 'ian/florida-dashboard-placard.pdf' }
]

export default () => {
  return <Space direction="vertical" size="large">
    <Title level={2}>MO/AR Tornados</Title>

    <Title level={3}>Command Centers</Title>
    <div className="row">
      <div className="column">     
      <section className="ccenter">
        <Space direction="vertical">
          <a href="rolla"><Space><AimOutlined />Rolla MO</Space></a>
          <div className="stakesAssigned">home stake only</div>
          <a href="scercy"><Space><AimOutlined />Scercy AR</Space></a>
          <div className="stakesAssigned">home stake only</div>
          
        </Space>
      </section> 
     </div>
     {/* <div className="column">
      <section>
          <Space direction="vertical">
            <img
              src={formatS3Url('helene/Helene-Week4.png')}
              alt="Command Centers Map" 
              style={{ maxWidth: 500 }}
             />
            <cite>Screenshot</cite>
          </Space>
        </section>
      </div> */}
    </div>



    <section>
      <Title level={3}>Files</Title>
      <List
        dataSource={files}
        renderItem={item => <List.Item><S3Link path={item.path}>{item.title}</S3Link></List.Item>}
        rowKey={item => item.path} />
    </section>
  </Space>
}
