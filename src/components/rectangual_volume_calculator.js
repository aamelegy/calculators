import React from "react"
import VolumeCalculatorInput from "../model/volume_calculator_input"
import BaseVolumeCalculator from "../components/base_volume_calculator"
import cuboid from "../images/cuboid.png"
import ReactGA from "react-ga"
import ReactPixel from "react-facebook-pixel"

var convert = require("convert-units")

class RectangularVolumeCalculator extends React.Component {
  constructor(props) {
    super(props)
  }

  getVolume(state) {
    var x = state.l
    var y = state.w
    var z = state.h
    if (
      x == null ||
      y == null ||
      z == null ||
      x[0] == "" ||
      y[0] == "" ||
      z[0] == ""
    ) {
      return [""]
    } else {
      ReactPixel.track("finishInput", { value: 0.01, currency: "usd" })
      var allSelectedUnits = new Set()
      allSelectedUnits.add(x[1])
      allSelectedUnits.add(y[1])
      allSelectedUnits.add(z[1])
      if (
        allSelectedUnits.size > 1 ||
        !convert()
          .possibilities("volume")
          .includes(x[1] + "3")
      ) {
        var xc = convert(x[0])
          .from(x[1])
          .to("m")
        var yc = convert(y[0])
          .from(y[1])
          .to("m")
        var zc = convert(z[0])
          .from(z[1])
          .to("m")
        var volume = xc * yc * zc
        var volumeInResultUnit = convert(volume)
          .from("m3")
          .to(state.resultUnit)
        ReactGA.event({
          category: "finishInput",
          action: "calculateDifferentUnits",
          label: "calculateDifferentUnitsCuboid",
        })
        return volumeInResultUnit
      } else {
        var volume = x[0] * y[0] * z[0]
        var volumeInResultUnit = convert(volume)
          .from(x[1] + "3")
          .to(state.resultUnit)
        ReactGA.event({
          category: "finishInput",
          action: "calculateSameUnits",
          label: "calculateSameUnitsCuboid",
        })
        return volumeInResultUnit
      }
    }
  }

  getDescription() {
    return " A generalized form of a cube. volume = length × width × height"
  }
  getName() {
    return "Cuboid Volume Calculator"
  }
  render() {
    var input1 = new VolumeCalculatorInput("Length (l)", "l", null)
    var input2 = new VolumeCalculatorInput("Width (w)", "w", null)
    var input3 = new VolumeCalculatorInput("Height (h)", "h", null)
    return (
      <BaseVolumeCalculator
        inputs={[input1, input2, input3]}
        name={this.getName()}
        description={this.getDescription()}
        shapeImage={cuboid}
        getVolume={this.getVolume}
      />
    )
  }
}

export default RectangularVolumeCalculator
