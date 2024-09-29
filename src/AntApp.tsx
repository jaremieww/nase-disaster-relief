import React from 'react'
import { Layout, Menu } from 'antd'
import 'antd/dist/antd.min.css'
import './AntApp.css'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { BsHurricane } from 'react-icons/bs'
import Icon from '@ant-design/icons'

const { Header, Content } = Layout

export default function AntApp() {
  const navigate = useNavigate()
  const location = useLocation()

  return <Layout className="layout">
    <Header>
      <div className="logo">
        <Link to="/" style={{ color: 'inherit' }}>NASE Disaster Relief</Link>
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        items={[
          { key: 'idalia', label: 'Hurricane Francine', icon: <Icon component={BsHurricane} />  },
          { key: 'crew-leader-checklist', label: 'Crew Leader Checklist' },
          { key: 'training', label: 'Training Materials' },
          { key: 'call-center', label: 'Call Center Training' },
          { key: 'command-center', label: 'Command Center Training' },
        ]}
        selectedKeys={[location.pathname.replace(/^\//, '')]}
        onSelect={item => { navigate(item.key) }} />
    </Header>
    <Content style={{ padding: '50px 50px', minHeight: 'calc(100vh - 64px)' }}>
      <div className="site-layout-content">
        <Outlet />
      </div>
    </Content>
  </Layout>
}
