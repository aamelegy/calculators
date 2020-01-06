import React from "react"
import units from "../components/units"
import VolumeCalculatorInput from "../model/volume_calculator_input"
import BaseVolumeCalculator from "../components/base_volume_calculator"

class CylinderVolumeCalculator extends React.Component {
  constructor(props) {
    super(props)
  }

  getVolume(state) {
    var r = state.r
    var h = state.h
    if (r == null || h == null || r.value == "" || h.value == "") {
      return [""]
    } else if (isNaN(r.value) || isNaN(h.value)) {
      return ["Error"]
    } else {
      var allSelectedUnits = new Set()
      allSelectedUnits.add(r.constructor)
      allSelectedUnits.add(h.constructor)
      if (allSelectedUnits.size > 1) {
        var resultInMetersCube = new units.MetersCube.type(
          Math.PI *
            parseFloat(r.toMeter()) *
            parseFloat(r.toMeter()) *
            parseFloat(h.toMeter())
        )
        var result = []
        allSelectedUnits.forEach(unit => {
          result.push(resultInMetersCube.toFormatted(unit))
        })
        return result
      } else {
        var volume =
          Math.PI *
          parseFloat(r.value) *
          parseFloat(r.value) *
          parseFloat(h.value)
        return [[volume, r.cubeUnit]]
      }
    }
  }

  render() {
    var input1 = new VolumeCalculatorInput("Base Radius (r)", "r", null)
    var input2 = new VolumeCalculatorInput("height (h)", "h", null)
    return (
      <BaseVolumeCalculator
        inputs={[input1, input2]}
        name={"Cylinder Calculator"}
        description={
          " A generalized form of a cube. volume = length × width × height"
        }
        getVolume={this.getVolume}
      />
    )
  }
}

export default CylinderVolumeCalculator
