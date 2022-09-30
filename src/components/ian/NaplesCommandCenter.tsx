import { Typography } from "antd"
import PopoutLink from "../PopoutLink"

const { Paragraph, Title } = Typography

export default () => {
  return <>
    <Title level={2}>Hurricane Ian Naples Command Center</Title>
      <Paragraph>
        The work this weekend is Saturday only.
      </Paragraph>

      <Paragraph>
        There will be no camping this weekend.
      </Paragraph>

      <Paragraph>
        Workers are asked to be at the command center by 9 AM and plan to work all day.
      </Paragraph>

      <Paragraph>
        Please come self sufficient with your own tools, food, water, gas, etc. Tools needed are chain saw, shovels, pry bars,
        and other items that can help with a muck out, ladders for tarping. Rakes will also be needed for debris cleanup.
      </Paragraph>

      <Paragraph>
        The command center will have supplies to supplement what you have.
      </Paragraph>

      <Paragraph>
        Fuel is unavailable in the area. Please plan to refuel before arriving in the disaster zone. It is recommended that vehicles bring extra fuel.
      </Paragraph>

      <PopoutLink href="https://fl511.com">FL511 for traffic info</PopoutLink>
  </>
}