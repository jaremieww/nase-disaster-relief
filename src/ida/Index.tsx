import React from 'react'
import { Space, Typography } from 'antd'
import { Link } from 'react-router-dom'

const { Title } = Typography

export default function Index() {
  return <>
    <Title level={2}>Hurricane Ida</Title>
    <Title level={3}>Command Centers</Title>

    <Space direction="vertical">
      <Link to="slidell">Slidell</Link>
      <Link to="Hammond">Hammond</Link>
    </Space>
  </>
}