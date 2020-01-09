import React from "react"
import units from "../components/units"
import VolumeCalculatorInput from "../model/volume_calculator_input"
import BaseVolumeCalculator from "../components/base_volume_calculator"
import cylinder from "../images/cylinder.png"
var convert = require("convert-units")

class CylinderVolumeCalculator extends React.Component {
  constructor(props) {
    super(props)
  }

  getVolume(state) {
    var r = state.r
    var h = state.h
    if (r == null || h == null || r[0] == "" || h[0] == "") {
      return [""]
    } else {
      var allSelectedUnits = new Set()
      allSelectedUnits.add(r[1])
      allSelectedUnits.add(h[1])
      if (allSelectedUnits.size > 1) {
        var rc = convert(r[0])
          .from(r[1])
          .to("m")
        var hc = convert(h[0])
          .from(h[1])
          .to("m")
        var volume = Math.PI * rc * rc * hc
        var volumeInResultUnit = convert(volume)
          .from("m3")
          .to(state.resultUnit)
        return volumeInResultUnit
      } else {
        var volume =
          Math.PI * parseFloat(r[0]) * parseFloat(r[0]) * parseFloat(h[0])
        var volumeInResultUnit = convert(volume)
          .from(r[1] + "3")
          .to(state.resultUnit)
        return volumeInResultUnit
      }
    }
  }

  render() {
    var input1 = new VolumeCalculatorInput("Base Radius (r)", "r", null)
    var input2 = new VolumeCalculatorInput("height (h)", "h", null)
    return (
      <BaseVolumeCalculator
        inputs={[input1, input2]}
        name={"Cylinder Volume Calculator"}
        description={
          "Points at a fixed distance from a given straight line axis. volume = πr2h"
        }
        shapeImage={cylinder}
        getVolume={this.getVolume}
      />
    )
  }
}

export default CylinderVolumeCalculator
