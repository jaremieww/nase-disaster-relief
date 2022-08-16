import React from 'react'
import { Space, Typography } from 'antd'
import { Link } from 'react-router-dom'

const { Title } = Typography

export default function Index() {
  return <>
    <Title level={2}>East Kentucky Flooding</Title>
    <Title level={3}>Command Centers</Title>

    <Space direction="vertical">
      <Link to="martin">Martin</Link>
      <Link to="hazard">Hazard</Link>
    </Space>
  </>
}