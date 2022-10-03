import React from 'react'
import { Space, Typography } from 'antd'
import PopoutLink from "./components/PopoutLink"

const { Title } = Typography

export default function Training() {
  return <>

    <Title level={2}>Training Materials</Title>
    <Space direction="vertical" size="large">
      <section>
        <Title level={3}>Chainsaws</Title>
        <p>All crew members accepting work orders where tree work will be done must complete the&nbsp;
          <PopoutLink href="https://www.churchofjesuschrist.org/callings/church-safety-and-health/chainsaw-safety?lang=eng">
            mandatory online chainsaw instruction
          </PopoutLink>
          &nbsp;and show the completion certificate.</p>
        <p>
          First time or novice users of chainsaws cannot operate chainsaws during church emergency relief efforts, with or without the instruction above. 
          No one under the age of 18 may operate a chainsaw. 
          All users, regardless of experience, must view the instruction, take the quiz, and receive a certificate to operate at a Church sponsored event.
          
        </p>
      </section>

      <section>
        <Title level={3}>Crisis Cleanup</Title>
        <PopoutLink href="https://www.youtube.com/watch?v=ot4LZjtK0xo">Crisis Cleanup Basic Training</PopoutLink>
      </section>

      <section>
        <Title level={3}>Roof Tarping</Title>
        <PopoutLink href="https://www.youtube.com/watch?v=vXWMj_TbDp4&amp;t=1s">Tarping a Roof</PopoutLink>
      </section>

      <section>
        <Title level={3}>Mucking and Mold Remediation</Title>
        <PopoutLink href="/MoldRemediation.pdf">Mold Remediation Fact Sheet</PopoutLink>
      </section>
    </Space>
  </>
}