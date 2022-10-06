import { Space } from 'antd'
import { MailOutlined } from '@ant-design/icons'

type Props = { email: string }
export default ({email}: Props) => {
  return <a href={`mailto:${email}`}>
    <Space>
      <MailOutlined />
      {email}
    </Space>
  </a>
}