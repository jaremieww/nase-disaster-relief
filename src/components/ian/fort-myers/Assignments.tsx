import { Space, Typography, Row, Col } from 'antd'
// import { CheckCircleOutlined } from '@ant-design/icons'
import React from 'react'

const { Text } = Typography

type Props = {
  assignedStakes: string[]
  commandCenterName: string,
}

const Assignments = ({ assignedStakes, commandCenterName }: Props) => <section>
  <Space direction='vertical' style={{ marginBottom: '24px' }}>
    {/* <Space style={{marginBottom: '16px'}}>
      <strong>Team Captains:</strong>
      <Button type="primary" icon={<CheckCircleOutlined />} href="https://forms.gle/BfpTdBsCejFKyy146" target="_blank">Register your Team</Button>
    </Space> */}

    <p>
      <Text type="success">All teams must check into the Command Center assigned&mdash;<em>No exceptions</em></Text><br />
      Remember to pick up your helping hands T-shirts and register (if not done so)
    </p>

    {/* <p>Teams can start showing up Friday evening and get checked in starting at 8pm.</p> */}
    <p>Teams should arrive at the command center by 9 AM on Saturday.</p>

    <h3>Stakes assigned to {commandCenterName} Command Center</h3>
    <Row>
      {assignedStakes.map(x => <Col span={8} key={x}>{x}</Col>)}
    </Row>

    <p>
      All volunteers must be organized into teams with a team captain and assistant team captain before arriving at the Command Center.
      We recommend teams of 10-15. If you have not been assigned a team, please check with your Ward or Branch leadership.
    </p>

  </Space>
</section>

export default Assignments
