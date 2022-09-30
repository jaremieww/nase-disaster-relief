import { Space, Alert } from 'antd'
import PopoutLink from "../../PopoutLink"

export default function Training() {
  return <Space direction="vertical" style={{marginBottom: '24px'}}>
    <h3>Training</h3>
    <ul>
      <li><PopoutLink href="https://www.youtube.com/watch?v=ot4LZjtK0xo">Crisis Cleanup</PopoutLink></li>
      <li><PopoutLink href="https://www.churchofjesuschrist.org/media/video/2015-10-0100-emergency-response-volunteer-training?lang=eng">General Safety Video</PopoutLink></li>
      <li>
        <PopoutLink href="https://www.churchofjesuschrist.org/callings/church-safety-and-health/chainsaw-safety?lang=eng">
          Chainsaw Safety Video
        </PopoutLink>
        —Quiz included. See note below. View and <strong>print certificate.</strong>
      </li>
      <li><PopoutLink href="https://www.youtube.com/watch?v=vXWMj_TbDp4&amp;t=1s">Tarping a Roof</PopoutLink></li>
      <li><PopoutLink href="https://www.youtube.com/watch?v=eZWShxk4OSo">Mucking Out a House</PopoutLink></li>
    </ul>
    
    <Alert type="info" message="Note" showIcon description={<>
      First time or novice users of chainsaws cannot operate chainsaws during church emergency relief efforts, with or without the instruction above. 
      No one under the age of 18 may operate a chainsaw. 
      All users, regardless of experience, must view the instruction, take the quiz, and receive a certificate to operate at a Church sponsored event. 
      All crew members accepting work orders where tree work will be done must complete the&nbsp;
      <PopoutLink href="https://www.google.com/url?q=https%3A%2F%2Fwww.churchofjesuschrist.org%2Fcallings%2Fchurch-safety-and-health%2Fchainsaw-safety%3Flang%3Deng&sa=D&sntz=1&usg=AOvVaw0YzKiTLeqgJsKa-HtNnvu0">mandatory online chainsaw instruction</PopoutLink> or show a certificate. 
      The command center will be the one who assigns you work orders. 
    </>} />
  </Space>
}