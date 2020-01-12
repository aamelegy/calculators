import React from "react"
import units from "../components/units"
import Dropdown from "react-bootstrap/Dropdown"
import Flexbox from "flexbox-react"
var convert = require("convert-units")

class UnitSelector extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    var unitLabel = this.props.unitLabel
    var inputUnits = this.props.units
    inputUnits.sort(function(a, b) {
      if (a.plural > b.plural) {
        return 1
      }
      if (b.plural > a.plural) {
        return -1
      }
      return 0
    })
    console.log(inputUnits)
    return (
      <Flexbox>
        <Dropdown onSelect={this.props.onUnitSelect} alignRight={true}>
          <Dropdown.Toggle variant="secondary">{unitLabel}</Dropdown.Toggle>
          <Dropdown.Menu>
            {Object.values(inputUnits).map(function(unit) {
              return (
                <Dropdown.Item
                  active={unit.plural === unitLabel}
                  eventKey={unit.abbr}
                >
                  {unit.plural + " (" + unit.abbr + ")"}
                </Dropdown.Item>
              )
            })}
          </Dropdown.Menu>
        </Dropdown>
      </Flexbox>
    )
  }
}

export default UnitSelector
