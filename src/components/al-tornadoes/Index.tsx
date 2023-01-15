import { Space, Typography } from "antd"
const { Title } = Typography

export default () => {
  return <Space direction="vertical" size="large">
    <Title level={2}>Central Alabama Tornadoes</Title>

    <section>
      <Title level={3}>Command Centers</Title>
      <Space direction="vertical">
        <a href="/al-tornadoes/prattville">Prattville Command Center</a>
      </Space>
    </section>
  </Space>
}