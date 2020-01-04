import React from "react"
import Dropdown from 'react-bootstrap/Dropdown'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CuboidImage from "../components/cuboid_image"
import NumberInput from "../components/number_input"
import Card from 'react-bootstrap/Card'
import units from "../components/units"
import UnitSelector from "../components/unit_selector"

class RectangularVolumeCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {x: new units[0].type("") ,y:new units[0].type(""), z:new units[0].type(""), allUnits : units[0].label};
    this.handleChangex = this.handleChangex.bind(this);
    this.onUnitSelectX = this.onUnitSelectX.bind(this);
    this.handleChangey = this.handleChangey.bind(this);
    this.onUnitSelectY = this.onUnitSelectY.bind(this);
    this.handleChangez = this.handleChangez.bind(this);
    this.onUnitSelectZ = this.onUnitSelectZ.bind(this);
    this.onAllUnitsChange = this.onAllUnitsChange.bind(this);
    this.getVolume = this.getVolume.bind(this);
  }

  handleChangex(event) {
    var value = event.target.value;
    this.setState({x: new this.state.x.constructor(value)});
  }
  onUnitSelectX(eventKey, event) {
    var currentValue = this.state.x.value;
    this.setState({x:new units[eventKey].type(currentValue)});
  }
  handleChangey(event) {
    var value = event.target.value;
    this.setState({y: new this.state.y.constructor(value)});
  }
  onUnitSelectY(eventKey, event) {
    var currentValue = this.state.y.value;
    this.setState({y: new units[eventKey].type(currentValue)});
  }
  handleChangez(event) {
    var value = event.target.value;
    this.setState({z: new this.state.z.constructor(value)});
  }
  onUnitSelectZ(eventKey, event) {
    var currentValue = this.state.z.value;
    this.setState({z: new units[eventKey].type(currentValue)});
  }
  onAllUnitsChange(eventKey, event){
    this.setState({x: new units[eventKey].type(this.state.x.value),
    y: new units[eventKey].type(this.state.y.value),
  z: new units[eventKey].type(this.state.z.value),
allUnits: units[eventKey].label});
  }

  getVolume(x,y,z){
    if (x == null || y == null || z == null || x.value == "" || y.value =="" || z.value =="")
    {
      return [""];
    }
    else if (isNaN(x.value) || isNaN(y.value) || isNaN(z.value)){
      return ["Error"];
    }
    else{
      var allSelectedUnits = new Set();
      allSelectedUnits.add(x.constructor);
      allSelectedUnits.add(y.constructor);
      allSelectedUnits.add(z.constructor);
      var resultInMetersCube = new units[3].type(parseFloat(x.toMeter()) * parseFloat(y.toMeter()) * parseFloat(z.toMeter()));
      var result = [];
      allSelectedUnits.forEach((unit) => {
        result.push(resultInMetersCube.toFormatted(unit))
      });
      return result;
    }
  }
  render() {
    return (

      <div>
        <Card>
    <Card.Body>
      <Container>
      <Row>
        <Col xs = {1}>
        </Col>
      <Col xs = {8}>
        <Row>
          <Col xs={8}>
            Change all units to:
          </Col>
          <Col xs={4}>
            <UnitSelector onUnitSelect = {this.onAllUnitsChange} unitLabel={this.state.allUnits} units={[0,1,2]}/>
          </Col>
        </Row>
        <Row>
          <NumberInput value = {this.state.x.value} label="Length" onChange={this.handleChangex} unitLabel={this.state.x.label()} onUnitSelect = {this.onUnitSelectX} units={[0,1,2]}/>
      </Row>
      <Row>
        <NumberInput value = {this.state.y.value} label="Width" onChange={this.handleChangey} unitLabel={this.state.y.label()} onUnitSelect = {this.onUnitSelectY} units={[0,1,2]}/>
    </Row>
    <Row>
      <NumberInput value = {this.state.z.value} label="Height" onChange={this.handleChangez} unitLabel={this.state.z.label()} onUnitSelect = {this.onUnitSelectZ} units={[0,1,2]} />
  </Row>
      <Row>
        <Col xs={4}>
        Volume equals =
      </Col>
        <Col xs={8} >
          <div style = {{color:"green"}}> {this.getVolume(this.state.x, this.state.y, this.state.z).map((result)=> {return <div>{result}</div>})}</div>
       </Col>
      </Row>
    </Col>
    <Col xs={2}>
      <CuboidImage/>
    </Col>
    <Col xs = {1}>
    </Col>
  </Row>
    </Container>
    </Card.Body>
  </Card>

  </div>
    );
  }
}

export default RectangularVolumeCalculator
