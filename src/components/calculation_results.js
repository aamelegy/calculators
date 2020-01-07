import React from "react"
import Flexbox from "flexbox-react"
import CalculationResult from "./calculation_result"
import units from "../components/units"

class CalculationResults extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    var results = []
    var resultInCubicMeters = 0
    if (this.props.result !== "") {
      if (this.props.result.constructor === units.MetersCube.type) {
        resultInCubicMeters = this.props.result
      } else {
        resultInCubicMeters = this.props.result.toCubicMeters()
      }
      results.push(this.props.result)
      var resultUnits = [...new Set(this.props.units)]
      resultUnits.forEach(unit => {
        if (unit.cubeUnit() !== this.props.result.constructor) {
          results.push(resultInCubicMeters.toFormatted(unit))
        }
      })
      results.push(resultInCubicMeters.toLitres())
      results.push(resultInCubicMeters.toUKGallons())
      results.push(resultInCubicMeters.toUSGallons())
    }

    return (
      <Flexbox alignItems="center" justifyContent="center">
        <div style={{ color: "green" }}>
          {" "}
          {results.map(result => {
            return <CalculationResult result={result} />
          })}
        </div>
      </Flexbox>
    )
  }
}

export default CalculationResults
