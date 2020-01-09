import React from "react"
import RectangularVolumeCalculator from "../components/rectangual_volume_calculator"
import CylinderVolumeCalculator from "../components/cylinder_volume_calculator"
import CubeVolumeCalculator from "../components/cube_volume_calculator"
import Flexbox from "flexbox-react"
import Tabs from "react-bootstrap/Tabs"
import Tab from "react-bootstrap/Tab"

class VolumeCalculators extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="home" title="Cuboid Volume Calculator">
          <RectangularVolumeCalculator />
        </Tab>
        <Tab eventKey="profile" title="Cylinder Volume Calculator">
          <CylinderVolumeCalculator />
        </Tab>
        <Tab eventKey="contact" title="Cube Volume Calculator">
          <CubeVolumeCalculator />
        </Tab>
      </Tabs>
    )
  }
}

export default VolumeCalculators
