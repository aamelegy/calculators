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
      <Container>
          <Row>
            <Col>
              {this.props.label}
            </Col>
              <Col>
              <input type="text" value={this.props.value}  onChange ={this.handleChange}/>
            </Col>
            <Col>
              <UnitSelector onUnitSelect = {this.props.onUnitSelect} unitLabel={unitLabel} units = {this.props.units}/>
            </Col>
          {this.state.error == true ?<div style ={{color:"red"}}>{this.props.label} should be a positve number</div>: null }
        </Row>
      </Container>
    );
  }
}

export default NumberInput
