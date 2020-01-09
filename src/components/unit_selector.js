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
    var unitLabel = convert().describe(this.props.unitLabel).plural
    var inputUnits = this.props.units
    return (
      <Flexbox>
        <Dropdown onSelect={this.props.onUnitSelect}>
          <Dropdown.Toggle variant="secondary">{unitLabel}</Dropdown.Toggle>
          <Dropdown.Menu>
            {Object.values(inputUnits).map(function(unit) {
              return (
                <Dropdown.Item
                  active={unit.plural === unitLabel}
                  eventKey={unit.abbr}
                >
                  {unit.plural}
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
