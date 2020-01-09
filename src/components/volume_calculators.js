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
        <Tab eventKey="home" title="Cuboid">
          <Flexbox>
            <RectangularVolumeCalculator />
          </Flexbox>
        </Tab>
        <Tab eventKey="profile" title="Cylinder">
          <Flexbox>
            <CylinderVolumeCalculator />
          </Flexbox>
        </Tab>
        <Tab eventKey="contact" title="Cube">
          <Flexbox>
            <CubeVolumeCalculator />
          </Flexbox>
        </Tab>
        <Tab eventKey="home1" title="Cuboid">
          <Flexbox>
            <RectangularVolumeCalculator />
          </Flexbox>
        </Tab>
        <Tab eventKey="profile1" title="Cylinder">
          <Flexbox>
            <CylinderVolumeCalculator />
          </Flexbox>
        </Tab>
        <Tab eventKey="contact1" title="Cube">
          <Flexbox>
            <CubeVolumeCalculator />
          </Flexbox>
        </Tab>
        <Tab eventKey="home2" title="Cuboid">
          <Flexbox>
            <RectangularVolumeCalculator />
          </Flexbox>
        </Tab>
        <Tab eventKey="profile2" title="Cylinder">
          <Flexbox>
            <CylinderVolumeCalculator />
          </Flexbox>
        </Tab>
        <Tab eventKey="contact2" title="Cube">
          <Flexbox>
            <CubeVolumeCalculator />
          </Flexbox>
        </Tab>
      </Tabs>
    )
  }
}

export default VolumeCalculators
