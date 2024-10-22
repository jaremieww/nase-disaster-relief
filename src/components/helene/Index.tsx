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
          <div className="stakesAssigned">Sugar Hill GA *, Lexington KY North, Lexington KY, Asheville NC, Cookeville TN, Knoxville TN, (Fort Mills TN ^)</div>
          {/* <a href="https://sites.google.com/view/greenville-command-center/home"><Space><ApartmentOutlined />Greenville</Space></a>
          <div className="stakesAssigned">Charlotte NC Central, Greenville SC East, Durham NC, Goldsboro NC, Greenville NC, Raleigh NC South, Raleigh NC, Wake Forest NC, Greenville SC</div>
          <a href="helene/augusta"><Space><ApartmentOutlined />Augusta</Space></a>
          <div className="stakesAssigned">Fayetteville NC, Fayetteville NC West, Charleston SC, Morehead City NC, Myrtle Beach SC, Wilmington NC, Aiken SC, Augusta GA, Hartsville SC, Chattanooga TN</div> */}
          <a href="helene/douglas"><Space><ApartmentOutlined />Douglas</Space></a>
          <div className="stakesAssigned">Lake City FL *, Pensacola FL, Tifton GA, Atlanta GA, Conyers GA, Fayetteville GA, Newnan GA, Powder Springs GA, Athens GA, Cartersville GA, Marietta GA, Winder GA</div>
          {/* <a href="helene/daytonabeach"><Space><ApartmentOutlined />Daytona Beach</Space></a>
          <div className="stakesAssigned">DeLand FL, Jacksonville FL South</div>
          <a href="helene/newportrichey"><Space><ApartmentOutlined />New Port Richey</Space></a>
          <div className="stakesAssigned">Leesburg FL, Ocala FL, Odessa FL, Tampa FL</div> */}
          <a href="helene/stpetersburg"><Space><ApartmentOutlined />St. Petersburg</Space></a>
          <div className="stakesAssigned">Miami Lakes FL, Naples FL, Jacksonville FL East, Jacksonville FL South, Jacksonville FL West, Lake Mary FL, Orlando FL South, Brandon FL, Lakeland FL, St Petersburg FL ^, Tampa FL *</div>
          <a href="helene/bradenton"><Space><ApartmentOutlined />Bradenton</Space></a>
          <div className="stakesAssigned">Cocoa FL, Leesburg FL, Orlando FL, Orlando FL West, Palm Bay FL, St Cloud FL, (Sarasota FL *)</div>
          <a href="helene/venice"><Space><AimOutlined />Venice</Space></a> 
          <div className="stakesAssigned">Boynton Beach FL, Coral Springs FL, Miami FL, Stuart FL, Ft Myers FL, Sarasota FL *</div>
          {/* <a href="helene/ftmyers"><Space><AimOutlined />Ft. Myers</Space></a> 
          <div className="stakesAssigned"></div>
          <a href="helene/naples"><Space><AimOutlined />Naples</Space></a>
          <div className="stakesAssigned"></div>   */}
        </Space>
      </section> 
     </div>
     <div className="column">
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
