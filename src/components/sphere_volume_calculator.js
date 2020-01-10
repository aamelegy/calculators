import React from "react"
import VolumeCalculatorInput from "../model/volume_calculator_input"
import BaseVolumeCalculator from "../components/base_volume_calculator"
import sphere from "../images/sphere.png"
import ReactGA from "react-ga"
var convert = require("convert-units")

class SphereVolumeCalculator extends React.Component {
  constructor(props) {
    super(props)
  }

  getVolume(state) {
    var r = state.r
    if (r == null || r[0] == "") {
      return [""]
    } else {
      var volume =
        (4 / 3) *
        Math.PI *
        parseFloat(r[0]) *
        parseFloat(r[0]) *
        parseFloat(r[0])
      var unit = state.resultUnit
      var volumeInResultUnit = convert(volume)
        .from(r[1] + "3")
        .to(unit)
      ReactGA.event({
        category: "finishInput",
        action: "calculateSameUnits",
        label: "sphere",
      })
      return volumeInResultUnit
    }
  }

  render() {
    var input1 = new VolumeCalculatorInput("Radius (r)", "r", null)
    return (
      <BaseVolumeCalculator
        inputs={[input1]}
        name={"Sphere Volume Calculator"}
        description={
          "A sphere is the three-dimensional counterpart of the two-dimensional circle. volume = (4/3)πr3"
        }
        shapeImage={sphere}
        getVolume={this.getVolume}
      />
    )
  }
}

export default SphereVolumeCalculator
