import React from "react"

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import units from "../components/units"
import UnitSelector from "../components/unit_selector"
import InputGroup from 'react-bootstrap/InputGroup'
import Flexbox from 'flexbox-react';

class NumberInput extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.state = {error: false};
  }

  handleChange(event) {
    this.setState({error: isNaN(event.target.value)});
    this.props.onChange(event);
  }

  render() {
    var unitLabel = this.props.unitLabel
    return (
      <Flexbox flexGrow={1} style={{backgroundColor:"red"}}>
            <Flexbox flex={1} >
              {this.props.label}
            </Flexbox>
              <Flexbox flex={2} style={{backgroundColor:"green"}}>
              <input type="number" value={this.props.value}  onChange ={this.handleChange}/>
            </Flexbox>
            <Flexbox flex={2} style={{backgroundColor:"blue"}}>
              <UnitSelector onUnitSelect = {this.props.onUnitSelect} unitLabel={unitLabel} units = {this.props.units}/>
            </Flexbox>
          {this.state.error == true ?<div style ={{color:"red"}}>{this.props.label} should be a positve number</div>: null }
      </Flexbox>
    );
  }
}

export default NumberInput
