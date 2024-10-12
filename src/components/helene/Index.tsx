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
          <a href="helene/johnsoncity"><Space><AimOutlined />Johnson City</Space></a>
          <div className="stakesAssigned">Johnson City, TN</div>
          <a href="helene/lenoir"><Space><AimOutlined />Lenoir</Space></a>
          <div className="stakesAssigned">Hickory NC</div>
          <a  href="https://sites.google.com/view/ashevillecommandcenter/home"><Space><ApartmentOutlined />Asheville</Space></a>
          <div className="stakesAssigned">Sugar Hill GA, Charlotte NC South, Fort Mill SC, Gastonia NC, Greensboro NC, High Point NC, Asheville NC</div>
          <a href="helene/greenville"><Space><ApartmentOutlined />Greenville</Space></a>
          <div className="stakesAssigned">Athens GA, Coal Mountain GA, Marietta GA, Winder GA, Charlotte NC Central, Greenville SC East, Greenville SC</div>
          <a href="helene/augusta"><Space><ApartmentOutlined />Augusta</Space></a>
          <div className="stakesAssigned">Conyers GA, Lilburn GA, Roswell GA, Aiken SC, Augusta GA, Columbia SC, Hartsville SC, West Columbia SC</div>
          <a href="helene/douglas"><Space><ApartmentOutlined />Douglas</Space></a>
          <div className="stakesAssigned">Birmingham AL, Gadsden AL, Montgomery AL, Tuscaloosa AL, Atlanta GA, Fayetteville GA, Powder Springs GA, Cartersville GA</div>
          <a href="helene/waycross"><Space><ApartmentOutlined />Waycross</Space></a>
          <div className="stakesAssigned">Kingsland GA, Newnan GA</div>
          <a href="helene/valdosta"><Space><ApartmentOutlined />Valdosta</Space></a>
          <div className="stakesAssigned">Dothan AL, Tifton GA, Columbus GA, Macon GA</div>
          <a href="helene/lakecity"><Space><ApartmentOutlined />Lake City</Space></a>
          <div className="stakesAssigned">Jacksonville FL East, Jacksonville FL West, Lake City FL, Pensacola FL</div>
          <a href="helene/madison"><Space><ApartmentOutlined />Madison</Space></a>
          <div className="stakesAssigned">Tallahassee FL, Gulfport MS, Hattiesburg MS, Slidell LA</div>
          <a href="helene/chiefland"><Space><ApartmentOutlined />Chiefland</Space></a>
          <div className="stakesAssigned">Mobile AL, Gainesville FL, Fort Walton Beach FL, Panama City FL</div>
          {/* <a href="helene/stpetersburg"><Space><ApartmentOutlined />St. Petersburg</Space></a>
          <div className="stakesAssigned">Lake Mary FL, Orlando FL West, Brandon FL, St Petersburg FL, Tampa FL</div> */}
          <a href="helene/venice"><Space><AimOutlined />Venice</Space></a> 
          <div className="stakesAssigned">Palm Bay FL, Ocala FL, Sarasota FL</div>
          <a href="helene/ftmyers"><Space><AimOutlined />Ft. Myers</Space></a> 
          <div className="stakesAssigned">Boynton Beach FL, Stuart FL, Ft Myers FL, Lakeland FL</div>
          <a href="helene/naples"><Space><AimOutlined />Naples</Space></a>
          <div className="stakesAssigned">Coral Springs FL, Miami FL, Miami Lakes FL, Naples FL</div>  
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
