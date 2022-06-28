import React from 'react'
import { Collapse, Empty, Space, Typography } from 'antd'
import { Link } from 'react-router-dom'
import { AlertOutlined, PhoneOutlined } from '@ant-design/icons'

const { Title } = Typography
const { Panel } = Collapse

type CleanupEvent = { name: string, link: string }
const currentEvents: CleanupEvent[] = []
const previousEvents = [
  { name: 'Hurricane Ida', link: 'ida' }
]

const EventList = ({events}: {events: CleanupEvent[]}) => {
    return events.length 
      ? <Space direction="vertical">
        {events.map(e => {
          return <Link to={e.link}>{e.name}</Link>
        })}
      </Space>
      : <Empty description="Nothing to report" />
}

export default function Home() {
  return <>
    <Title level={2}>Helping Hands</Title>

    <Title level={3}>Cleanup Efforts</Title>
    <Collapse ghost defaultActiveKey="current">
      <Panel header="Current Cleanup Efforts" key="current">
        <EventList events={currentEvents} />
      </Panel>
      <Panel header="Previous Cleanup Efforts" key="previous">
        <EventList events={previousEvents} />
      </Panel>
    </Collapse>

    <Title level={3}>Leadership Training Materials</Title>
    <Space direction="vertical">
      <Link to="command-center"><Space><AlertOutlined />Command Center</Space></Link>
      <Link to="call-center"><Space><PhoneOutlined />Call Center</Space></Link>
    </Space>
  </>
}