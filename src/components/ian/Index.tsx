import { Alert, Space, Typography } from "antd"
import PopoutLink from "../PopoutLink"

const { Paragraph, Title } = Typography

export default () => {
  const S3 = "https://nase-erc-assets.s3.amazonaws.com"
  return <Space direction="vertical" size="large">
    <Title level={2}>Hurricane Ian</Title>

    <Space direction="vertical">
      <img 
        src={`${S3}/ian/ian-satellite-800w.jpg`} 
        alt="Hurricane Ian Satellite View"
        style={{maxWidth: '100%'}} />
      <cite>Image courtesy of <PopoutLink href="https://earthobservatory.nasa.gov/images/150408/hurricane-ian-reaches-florida">NASA</PopoutLink></cite>
    </Space>

    <Alert showIcon type="info" message="Weekend of October 1, 2022" description={
      <Paragraph>
        A limited number of units will be working  on Saturday, October 1, 2022.
        All vehicles must display the <PopoutLink href={`${S3}/ian/EF-15-signage.pdf`}>EF-15 placard.</PopoutLink>
      </Paragraph>
    } />
  </Space>
}