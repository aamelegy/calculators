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
    } else {
      var volume =
        parseFloat(a.value) * parseFloat(a.value) * parseFloat(a.value)
      var resultInMetersCube = new units.MetersCube.type(
        parseFloat(a.toMeter()) *
          parseFloat(a.toMeter()) *
          parseFloat(a.toMeter())
      )
      return [new a.cubeUnit(volume)]
    }
  }

  render() {
    var input1 = new VolumeCalculatorInput("Edge Length (a)", "a", null)
    return (
      <BaseVolumeCalculator
        inputs={[input1]}
        name={"Cube Volume sCalculator"}
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
