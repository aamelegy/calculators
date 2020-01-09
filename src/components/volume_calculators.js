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
import CalculatorDescription from "../components/calculator_description"

class VolumeCalculators extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Tabs defaultActiveKey="cuboid" id="uncontrolled-tab-example">
        <Tab eventKey="cuboid" title="Cuboid">
          <Flexbox flexWrap="wrap">
            <Flexbox>
              <RectangularVolumeCalculator />
            </Flexbox>
            <Flexbox
              alignItems={"flex-start"}
              maxWidth={"600px"}
              margin={"10px"}
              flexDirection={"column"}
            ></Flexbox>
          </Flexbox>
        </Tab>
        <Tab eventKey="cylinder" title="Cylinder">
          <Flexbox flexWrap="wrap">
            <Flexbox>
              <CylinderVolumeCalculator />
            </Flexbox>
            <Flexbox
              alignItems={"flex-start"}
              maxWidth={"600px"}
              margin={"10px"}
              flexDirection={"column"}
            ></Flexbox>
          </Flexbox>
        </Tab>
        <Tab eventKey="cube" title="Cube">
          <Flexbox flexWrap="wrap">
            <Flexbox>
              <CubeVolumeCalculator />
            </Flexbox>
            <Flexbox
              alignItems={"flex-start"}
              maxWidth={"600px"}
              margin={"10px"}
              flexDirection={"column"}
            ></Flexbox>
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
