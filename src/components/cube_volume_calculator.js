import React from "react"
import units from "../components/units"
import VolumeCalculatorInput from "../model/volume_calculator_input"
import BaseVolumeCalculator from "../components/base_volume_calculator"
import cube from "../images/cube.png"

class CubeVolumeCalculator extends React.Component {
  constructor(props) {
    super(props)
  }

  getVolume(state) {
    var a = state.a
    if (a == null || a.value == "") {
      return [""]
    } else if (isNaN(a.value)) {
      return ["Error"]
    } else {
      var volume =
        parseFloat(a.value) * parseFloat(a.value) * parseFloat(a.value)
      return [[volume, a.cubeUnit]]
    }
  }

  render() {
    var input1 = new VolumeCalculatorInput("Edge Length (a)", "a", null)
    return (
      <BaseVolumeCalculator
        inputs={[input1]}
        name={"Cube Calculator"}
        description={
          "A cube is the three-dimensional analog of a square. volume = a3"
        }
        shapeImage={cube}
        getVolume={this.getVolume}
      />
    )
  }
}

export default CubeVolumeCalculator
