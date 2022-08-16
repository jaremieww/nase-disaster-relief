import { ExclamationCircleFilled } from '@ant-design/icons'
import { Alert, Space, List, Card } from 'antd'
import React from 'react'

type Props = {
  assignedStakes: string[]
  commandCenterName: string
}

const Assignments2 = ({ assignedStakes, commandCenterName }: Props) => <section>
  <h3>Stakes assigned to {commandCenterName} Command Center 8/19/2022</h3>
  <Space direction='vertical'>


    <Alert type="error" icon={<ExclamationCircleFilled />} showIcon={true}
      message={<>
        All teams must check into the Command Center assigned&mdash;<em>No exceptions</em>
      </>}
    />

    <p>Please go to your assigned command center. An assignment is required for you to participate.</p>

    <p>
      All volunteers must be organized into teams before arriving at the Command Center.
      If you have not been assigned a team, please check with your Ward or Branch leadership.
    </p>
    
    <Card title="Assigned Stakes">
      {assignedStakes.map(x => <Card.Grid key={x}>{x}</Card.Grid>)}
    </Card>
    
    <p>
      Teams are welcome to start showing up Friday evening and get checked in starting at 8pm.
      If you are coming earlier than planned on Saturday, please call or text the command center when you are one hour out.
    </p>
  </Space>
</section>

export default Assignments2

// export default function Assignments({ assignedStakes, commandCenterName }: Props) {
//   return <>

//       <Typography variant="h6" component="h3">Stakes assigned to {commandCenterName} Command Center 8/19/2022</Typography>
//       <p>Please go to your assigned command center. An assignment is required for you to participate.</p>

//       <Text type="danger">All teams must check into the Command Center assigned&mdash;<em>No exceptions</em></Text>

//       <Grid container maxWidth={'sm'} columns={{ xs: 1, sm: 3 }} sx={{ mt: 2 }}>
//         {
//           assignedStakes.map((stake, index) => (
//             <Grid item xs={1} key={index}>
//               {stake}
//             </Grid>
//           ))
//         }
//       </Grid>

//       <Typography variant="body1" component="p" sx={{ mt: 2 }}>
//         Teams are welcome to start showing up Friday evening and get checked in starting at 8pm.
//         If you are coming earlier than planned on Saturday, please call or text the command center when you are one hour out.
//       </Typography>
//   </>
// }