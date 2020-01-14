import React from "react"
import VolumeCalculatorInput from "../model/volume_calculator_input"
import BaseVolumeCalculator from "../components/base_volume_calculator"
import cube from "../images/cube.png"
import ReactGA from "react-ga"
import ReactPixel from "react-facebook-pixel"

var convert = require("convert-units")

class CubeVolumeCalculator extends React.Component {
  constructor(props) {
    super(props)
  }

  getVolume(state) {
    var a = state.a
    if (a == null || a[0] == "") {
      return [""]
    } else {
      ReactPixel.track("finishInput", { value: 0.01, currency: "usd" })
      if (
        !convert()
          .possibilities("volume")
          .includes(a[1] + "3")
      ) {
        var ac = convert(a[0])
          .from(a[1])
          .to("m")
        var volume = parseFloat(ac) * parseFloat(ac) * parseFloat(ac)
        var volumeInResultUnit = convert(volume)
          .from("m3")
          .to(state.resultUnit)
        return volumeInResultUnit
      } else {
        var volume = parseFloat(a[0]) * parseFloat(a[0]) * parseFloat(a[0])
        var unit = state.resultUnit
        var volumeInResultUnit = convert(volume)
          .from(a[1] + "3")
          .to(unit)
        ReactGA.event({
          category: "finishInput",
          action: "calculateSameUnits",
          label: "calculateSameUnitsCube",
        })
        return volumeInResultUnit
      }
    }
  }

  render() {
    var input1 = new VolumeCalculatorInput("Edge Length (a)", "a", null)
    return (
      <BaseVolumeCalculator
        inputs={[input1]}
        name={"Cube Volume Calculator"}
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
