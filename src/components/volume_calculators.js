import React from "react"
import RectangularVolumeCalculator from "../components/rectangual_volume_calculator"
import CylinderVolumeCalculator from "../components/cylinder_volume_calculator"
import CubeVolumeCalculator from "../components/cube_volume_calculator"
import Flexbox from "flexbox-react"
import Tabs from "react-bootstrap/Tabs"
import Tab from "react-bootstrap/Tab"
import PondVolumeCalculator from "../components/pond_volume_calculator"
import ConeVolumeCalculator from "../components/cone_volume_calculator"
import SphereVolumeCalculator from "../components/sphere_volume_calculator"
class VolumeCalculators extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Tabs defaultActiveKey="cuboid" id="uncontrolled-tab-example">
        <Tab eventKey="cuboid" title="Cuboid">
          <Flexbox>
            <Flexbox>
              <RectangularVolumeCalculator />
            </Flexbox>
            <Flexbox
              alignItems={"flex-start"}
              maxWidth={"600px"}
              margin={"10px"}
            >
              {`A rectangular tank is a generalized form of a cube, where the sides can have varied lengths. It is bounded by six faces, three of which meet at its vertices, and all of which are perpendicular to their respective adjacent faces. The equation for calculating the volume of a rectangle is shown below:

              volume= length × width × height
              
              EX: Darby likes cake. She goes to the gym for 4 hours a day, every day, to compensate for her love of cake. She plans to hike the Kalalau Trail in Kauai and though extremely fit, Darby worries about her ability to complete the trail due to her lack of cake. She decides to pack only the essentials and wants to stuff her perfectly rectangular pack of length, width, and height 4 ft, 3 ft and 2 ft respectively, with cake. The exact volume of cake she can fit into her pack is calculated below:
              
              volume = 2 × 3 × 4 = 24 ft3`}
            </Flexbox>
          </Flexbox>
        </Tab>
        <Tab eventKey="cylinder" title="Cylinder">
          <Flexbox>
            <Flexbox flex={1}>
              <CylinderVolumeCalculator />
            </Flexbox>
            <Flexbox flex={2} alignItems={"flex-start"}>
              {`A rectangular tank is a generalized form of a cube, where the sides can have varied lengths. It is bounded by six faces, three of which meet at its vertices, and all of which are perpendicular to their respective adjacent faces. The equation for calculating the volume of a rectangle is shown below:

              volume= length × width × height
              
              EX: Darby likes cake. She goes to the gym for 4 hours a day, every day, to compensate for her love of cake. She plans to hike the Kalalau Trail in Kauai and though extremely fit, Darby worries about her ability to complete the trail due to her lack of cake. She decides to pack only the essentials and wants to stuff her perfectly rectangular pack of length, width, and height 4 ft, 3 ft and 2 ft respectively, with cake. The exact volume of cake she can fit into her pack is calculated below:
              
              volume = 2 × 3 × 4 = 24 ft3`}
            </Flexbox>
          </Flexbox>
        </Tab>
        <Tab eventKey="cube" title="Cube">
          <Flexbox>
            <CubeVolumeCalculator />
          </Flexbox>
        </Tab>
        <Tab eventKey="pond" title="Pond">
          <Flexbox>
            <PondVolumeCalculator />
          </Flexbox>
        </Tab>
        <Tab eventKey="cone" title="Cone">
          <Flexbox>
            <ConeVolumeCalculator />
          </Flexbox>
        </Tab>
        <Tab eventKey="sphere" title="Sphere">
          <Flexbox>
            <SphereVolumeCalculator />
          </Flexbox>
        </Tab>
      </Tabs>
    )
  }
}

export default VolumeCalculators
