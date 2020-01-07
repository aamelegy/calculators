import React from "react"
import units from "../components/units"
import VolumeCalculatorInput from "../model/volume_calculator_input"
import BaseVolumeCalculator from "../components/base_volume_calculator"
import cuboid from "../images/cuboid.png"

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
      x.value == "" ||
      y.value == "" ||
      z.value == ""
    ) {
      return [""]
    } else {
      var allSelectedUnits = new Set()
      allSelectedUnits.add(x.constructor)
      allSelectedUnits.add(y.constructor)
      allSelectedUnits.add(z.constructor)
      if (allSelectedUnits.size > 1) {
        var resultInMetersCube = new units.MetersCube.type(
          parseFloat(x.toMeter()) *
            parseFloat(y.toMeter()) *
            parseFloat(z.toMeter())
        )
        var result = []
        allSelectedUnits.forEach(unit => {
          result.push(resultInMetersCube.toFormatted(unit))
        })
        return result
      } else {
        var volume =
          parseFloat(x.value) * parseFloat(y.value) * parseFloat(z.value)
        var resultInMetersCube = new units.MetersCube.type(
          parseFloat(x.toMeter()) *
            parseFloat(y.toMeter()) *
            parseFloat(z.toMeter())
        )
        return [new x.cubeUnit(volume), resultInMetersCube.toLitres()]
      }
    }
  }

  render() {
    var input1 = new VolumeCalculatorInput("length (l)", "l", null)
    var input2 = new VolumeCalculatorInput("width (w)", "w", null)
    var input3 = new VolumeCalculatorInput("height (h)", "h", null)
    return (
      <BaseVolumeCalculator
        inputs={[input1, input2, input3]}
        name={"Cuboid Volume Calculator"}
        description={
          " A generalized form of a cube. volume = length × width × height"
        }
        shapeImage={cuboid}
        getVolume={this.getVolume}
      />
    )
  }
}

export default RectangularVolumeCalculator
