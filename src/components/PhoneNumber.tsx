import { PhoneOutlined } from "@ant-design/icons"
import { Space } from 'antd'
import PopoutLink from "./PopoutLink"
import platform from 'platform'

type Props = { phoneNumber: string }
export default ({ phoneNumber }: Props) => {
  const inside = <Space>
    <PhoneOutlined />
    <span>{phoneNumber}</span>
  </Space>

  if (platform.os?.family === 'iOS' || platform.os?.family === 'Android') {
    return <PopoutLink href={`tel:${phoneNumber}`}>
      {inside}
    </PopoutLink>
  }
  return inside
}