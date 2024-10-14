import { List, Space, Typography } from "antd"
import { S3Link, formatS3Url } from "../S3"
import './Index.css'
//import PopoutLink from "../PopoutLink"
import { AimOutlined, ApartmentOutlined } from '@ant-design/icons'


const { Title } = Typography

const files = [
  { title: 'Crisis Cleanup Flier - English', path: 'helene/Helene_social_media_8449651386_en-US.png' },
  { title: 'Folleto de Crisis Cleanup - Español', path: 'helene/Helene_social_media_8449651386_es-MX.png' },
  { title: 'Vehicle Placard - REQUIRED IN FLORIDA ONLY', path: 'ian/florida-dashboard-placard.pdf' }
]

export default () => {
  return <Space direction="vertical" size="large">
    <Title level={2}>Hurricanes Helene and Milton</Title>

    <Title level={3}>Command Centers</Title>
    <div className="row">
      <div className="column">     
      <section className="ccenter">
        <Space direction="vertical">
          {/* <a href="helene/johnsoncity"><Space><AimOutlined />Johnson City</Space></a>
          <div className="stakesAssigned">Johnson City, TN</div>
          <a href="helene/lenoir"><Space><AimOutlined />Lenoir</Space></a>
          <div className="stakesAssigned">Hickory NC</div> */}
          <a  href="https://sites.google.com/view/ashevillecommandcenter/home"><Space><ApartmentOutlined />Asheville</Space></a>
          <div className="stakesAssigned">Charlotte NC South, Fort Mill SC, Gastonia NC, Greensboro NC, High Point NC, Lake Norman NC, Winston-Salem NC, Asheville NC</div>
          <a href="helene/greenville"><Space><ApartmentOutlined />Greenville</Space></a>
          <div className="stakesAssigned">Charlotte NC Central, Greenville SC East, Durham NC, Goldsboro NC, Greenville NC, Raleigh NC South, Raleigh NC, Wake Forest NC, Greenville SC</div>
          <a href="helene/augusta"><Space><ApartmentOutlined />Augusta</Space></a>
          <div className="stakesAssigned">Fayetteville NC, Fayetteville NC West, Charleston SC, Morehead City NC, Myrtle Beach SC, Wilmington NC, Aiken SC, Augusta GA, Hartsville SC, Chattanooga TN</div>
          <a href="helene/douglas"><Space><ApartmentOutlined />Douglas</Space></a>
          <div className="stakesAssigned">Kingsland GA, Fort Walton Beach FL, Panama City FL, Tifton GA, Columbus GA, Macon GA</div>
          <a href="helene/daytonabeach"><Space><ApartmentOutlined />Daytona Beach</Space></a>
          <div className="stakesAssigned">DeLand FL, Lake Mary FL</div>
          <a href="helene/newportrichey"><Space><ApartmentOutlined />New Port Richey</Space></a>
          <div className="stakesAssigned">Leesburg FL, Ocala FL, Odessa FL, Tampa FL</div>
          <a href="helene/stpetersburg"><Space><ApartmentOutlined />St. Petersburg</Space></a>
          <div className="stakesAssigned">Orlando FL, Orlando FL West, Brandon FL, Ft Myers FL, Lakeland FL, St Petersburg FL</div>
          <a href="helene/bradenton"><Space><ApartmentOutlined />Bradenton</Space></a>
          <div className="stakesAssigned">Boynton Beach FL, Stuart FL, Cocoa FL, Palm Bay FL, St Cloud FL</div>
          <a href="helene/venice"><Space><AimOutlined />Venice</Space></a> 
          <div className="stakesAssigned"></div>
          <a href="helene/ftmyers"><Space><AimOutlined />Ft. Myers</Space></a> 
          <div className="stakesAssigned"></div>
          <a href="helene/naples"><Space><AimOutlined />Naples</Space></a>
          <div className="stakesAssigned"></div>  
        </Space>
      </section> 
     </div>
     <div className="column">
      <section>
          <Space direction="vertical">
            <img
              src={formatS3Url('helene/Helene-Week2.png')}
              alt="Command Centers Map" 
              style={{ maxWidth: 500 }}
             />
            <cite>Screenshot</cite>
          </Space>
        </section>
      </div>
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
