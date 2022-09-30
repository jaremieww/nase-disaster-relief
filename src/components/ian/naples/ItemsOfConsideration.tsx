import { Box, Typography } from "@mui/material"

export default function ItemsOfConsideration() {
  return <Box component="section" sx={{ mt: 4 }}>
    <Typography variant="h6" component="h3">Items of Consideration</Typography>

    
    <h4>Safety &amp; Skills</h4>
    <p>If a work team receives a work order or requrest to provide services that are beyond their skill set, appears to be unsafe, or just doesn't feel right, then please return that work order uncompleted.
      We are an unskilled volunteer workforce providing basic labor and moral support.
      <strong>There is no expectation that we undertake hazardous or specialized work.</strong>&nbsp;
      Ladders are needed for tarp jobs. Remember to <em>hydrate, hydrate, hydrate.</em>
    </p>

    <h4>Work Hours</h4>
    <p>Arrive Saturday morning by 9 AM. Plan to work all day and return home that night.</p>
    {/* <p>Arrive either Friday night or Saturday morning. Work all day Saturday, until at least 1pm on Sunday.
      Command Center hours are 7am-10pm.
    </p> */}

    <h4>Camping</h4>
    {/* <p>Portable toilets, shows, and places for tents are available near the command center. Bring all your own needed supplies for the camping experience. <em>No workers inside the building, please!</em></p> */}
    <p>No camping the weekend of October 1, 2022.</p>

    <h4>Be Self-Sustaining</h4>
    <p>Bring food, water, extra fuel, and camping supplies. Fuel is severely limited in the area. {/*Use portable toilets and avoid going into the building.*/}</p>

    <h4>Command Center Supplies</h4>
    <p>
      There will be bottled water, T-shirts, shovels, rakes, gloves, chainsaws (limited), tarps, fir strips, hammers, cleaning kits, first aid kits, eye protection, hand trucks/wheelbarrows, and sleds at the command center.
      Bring your own if possible. Water boots are recommended due to flooding in some areas.
    </p>

    <h4>Age &amp; Health Restrictions</h4>
    <p>Workers should be age 14 and up, and should be able to perform strenuous physical labor. If someone on a team is not able to perform physical labor they could help with ministering (see below) and do what they can to help.</p>

    <h4>Ministering</h4>
    <p>
      At least one member of the team should interface with the people we are helping, not to proselyte, but to offer comfort and hope and a message from the Savior.
      They will ask you who you are and where you come from.
      We have found it a good experience to offer to pray with the family and the work team as part of the process. Take pictures and video if appropriate. Ask for permission.
    </p>

    <h4>Work as a team</h4>
    <p>Be unified. Before arriving at the Command Center, organize the work teams each team should be around 10-15 members. Each team should have an assigned team captain and an assistant team captain.</p>

    <h4>Call ahead - Receive Permission - Close each Work Order</h4>
    <ul>
      <li>Check to see if the homeowner still needs help and is available to receive you</li>
      <li>Have the homeowner sign the work order if possible.</li>
      <li>Always receive permission of the homeowner before attempting any work at a property unless the work order states you can work without the owner present.</li>
      <li>
        Be sure to close each job in Crisis Cleanup when it is completed using one of the following methods

        <ol>
          <li>Use the QR code in the corner of each work order to access an online form where you can change the status of the job to "Closed, completed" (or the appropriate status).
            <strong>Be sure to enter the number of workers and the number of hours worked.</strong><br />
            <u>OR</u>
          </li>
          <li>
            Call or text the Command Center to report your information (502-438-8315).
          </li>
        </ol>
      </li>
    </ul>

    <h4>If you finish all of your work orders, choose one of the following options</h4>
    <ol>
      <li>Check crisiscleanup.org for other nearby jobs that might be unclaimed.</li>
      <li>Look for someone nearby who could use some help. Get their permission and be sure to fill out a paper work-order form (or use the intake for on crisiscleanup.org)</li>
      <li>Call the Command Center to receive another job (502-438-8315).</li>
      <li>Return to the command center to receive more work orders and supplies if needed.</li>
      <li><strong>Return and Report.</strong> It is so critical that you report your efforts to the command center!</li>
    </ol>
    
    <h4>Be sure to separate debris types on the side of the road</h4>
    <p>Keep the roadway clear.</p>
  </Box>
}