import React from 'react'
import { Collapse, Empty, Space, Typography } from 'antd'
import { Link } from 'react-router-dom'
import { AlertOutlined, PhoneOutlined, QuestionOutlined } from '@ant-design/icons'

const { Title } = Typography
const { Panel } = Collapse

type CleanupEvent = { name: string, link: string }
const currentEvents: CleanupEvent[] = [
  { name: 'MO/AR Tornados', link: 'matornados' },
]
const previousEvents: CleanupEvent[] = [
  { name: 'Hurricanes Helene and Milton', link: 'helene' },

]

const EventList = ({ events }: { events: CleanupEvent[] }) => {
  return events.length
    ? <Space direction="vertical">
      {events.map(e => {
        return <Link to={e.link} key={e.link}>{e.name}</Link>
      })}
    </Space>
    : <Empty description="Nothing to report" />
}

export default function Home() {
  return <>
    <Title level={2}>NASE Disaster Relief</Title>

    <Title level={3}>Cleanup Efforts</Title>
    <Collapse ghost defaultActiveKey="current">
      <Panel header="Current Cleanup Efforts" key="current">
        <EventList events={currentEvents} />
      </Panel>
      {previousEvents.length > 0 &&
        <Panel header="Previous Cleanup Efforts" key="previous">
          <EventList events={previousEvents} />
        </Panel>
      }
    </Collapse>

    <Title level={3}>Leadership Training Materials</Title>
    <Space direction="vertical">
      <Link to="faqs"><Space><QuestionOutlined />Frequently Asked Questions</Space></Link>
      <Link to="bestpractices"><Space><QuestionOutlined />Best Practices</Space></Link>
      <Link to="suggestionbox"><Space><QuestionOutlined />Suggestion Box</Space></Link>
      <Link to="command-center"><Space><AlertOutlined />Command Center</Space></Link>
      <Link to="call-center"><Space><PhoneOutlined />Call Center</Space></Link>
      <Link to="communications"><Space>Communications</Space></Link>
      <Title level={4}>Version 2.0.1 Updated 10/08/2024 7:16 pm ET</Title>
    </Space>
  </>
}
