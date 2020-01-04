import React from "react"
import units from "../components/units"
import Dropdown from 'react-bootstrap/Dropdown'

class UnitSelector extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var unitLabel = this.props.unitLabel;
    return (
      <div>
        <Dropdown onSelect = {this.props.onUnitSelect} size="sm">
          <Dropdown.Toggle variant="secondary" style={{width:"70%"}}>
            {this.props.unitLabel}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {Object.keys(this.props.units).map(function(key){ return <Dropdown.Item active = {units[key].label === unitLabel} eventKey = {key}>{units[key].label}</Dropdown.Item>})}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
}

export default UnitSelector
