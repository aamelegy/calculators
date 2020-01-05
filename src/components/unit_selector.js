import React from "react"
import units from "../components/units"
import Dropdown from 'react-bootstrap/Dropdown'

class UnitSelector extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var unitLabel = this.props.unitLabel;
    var inputUnits =  this.props.units;
    return (
      <div>
        <Dropdown onSelect = {this.props.onUnitSelect} >
          <Dropdown.Toggle variant="secondary" size="sm">
            {this.props.unitLabel}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {Object.values(inputUnits).map(function(key){ return <Dropdown.Item active = {units[key].label === unitLabel} eventKey = {key}>{units[key].label}</Dropdown.Item>})}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
}

export default UnitSelector
