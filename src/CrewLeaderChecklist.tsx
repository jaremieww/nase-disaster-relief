import React from 'react'
import { Typography } from 'antd'
import { Link } from 'react-router-dom'
import PopoutLink from './components/PopoutLink'
const { Text, Title } = Typography

export default function CrewLeaderChecklist() {
  const links = {
    chainsaw: 'https://www.churchofjesuschrist.org/callings/church-safety-and-health/chainsaw-safety?lang=eng',
    crisisCleanup: 'https://crisiscleanup.org',
    crisisCleanupTraining: 'https://www.youtube.com/watch?v=ot4LZjtK0xo'
  }

  return <>
    <Title level={2}>Crew Leader Checklist</Title>

    <Title level={3}>Training</Title>
    <ul>
      <li>Review the <Link to="training">Training Materials</Link> and complete any necessary training required for the work you will be doing.</li>
      <li>All crew members accepting work orders where tree work will be done must complete the <PopoutLink href={links.chainsaw}>mandatory online chainsaw instruction</PopoutLink> or show a certificate.</li>
      <li>
        Every crew should have at least one person <PopoutLink href={links.crisisCleanupTraining}>trained</PopoutLink> to enter, view,
        and close work orders in <PopoutLink href={links.crisisCleanup}>Crisis Cleanup.</PopoutLink>&nbsp;
        <Text type="danger">Do not log in and claim your own work orders.</Text>
      </li>
    </ul>

    <Title level={3}>Check-In</Title>
    <p>When arriving at the command center, team captains check in and:</p>
    <ul>
      <li>Fill out crew registration form</li>
      <li>Obtain placards paper to put in dash of each vehicle if needed</li>
      <li>Pick up work order and blank work order forms</li>
      <li>Receive mandatory training at the Command Center in Slidell, Louisiana</li>
      <li>Meanwhile, your remaining crew members will gather T-shirts and supplies (including water to leave with those you help).</li>
      <li>
        Ideally, every crew should have at least one person trained to enter, view, and close work orders in <a href="https://crisiscleanup.org">Crisis Cleanup</a>.
        Additionally, all crew members accepting work orders where tree work will be done must complete the&nbsp;
        <a href="https://www.churchofjesuschrist.org/callings/church-safety-and-health/chainsaw-safety?lang=eng">mandatory online chainsaw instruction</a> or show a certificate.
        The command center will be the one who assigns you work orders.&nbsp;
      </li>
      <li><a href="https://www.youtube.com/watch?v=ot4LZjtK0xo">Crisis Cleanup Basic Training</a></li>
    </ul>

    <Title level={3}>Share a photo or story with North America Southeast Area leadership</Title>
    <p>Disaster relief volunteers may have photos or stories to share. We encourage you to post those photos and stories to your stake Facebook page.
      You may also email your three best photos to Area leaderhsip for consideration in use for Area reports, media, and social media publishing.
    </p>

    <p>
      <PopoutLink href="mailto:mwestenhofer@comm.churchofjesuschrist.org?subject= Creative Works Photographer Permission&body=I ___(name)_______ give my permission to The Church of Jesus Christ of Latter-day Saints to use my materials, Image and quotes on the Church websites, Church social media websites, as well as for Church reports, print products, video, publications and training materials. Please include the following information:%0D%0AToday’s date %0D%0AYour Name  %0D%0AMailing Address %0D%0APhone number %0D%0AEmail address">
        Those using an email client like outlook may click this link and the email will auto populate.
      </PopoutLink>
    </p>

    <p>If the above link does not open your email client with a pre-populated email body, please email the text below with your answers directly to <PopoutLink href="mailto:mwestenhofer@comm.churchofjesuschrist.org">mwestenhofer@comm.churchofjesuschrist.org.</PopoutLink></p>

    <blockquote style={{ marginLeft: 16, borderLeft: '4px solid #ccc', paddingLeft: 24 }}>
      Subject:  Creative Works Photographer Permission<br/>
      <br/>
      I ___(name)_______ give my permission to The Church of Jesus Christ of Latter-day Saints to use my materials, Image and quotes on the Church websites, Church social media websites, as well as for Church reports, print products, video, publications and training materials.<br />
      <br />
      Today’s date<br />
      Your name<br />
      Mailing Address<br />
      Phone number<br />
      Email address<br />
    </blockquote>
  </>

}