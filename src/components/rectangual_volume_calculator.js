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
import Flexbox from 'flexbox-react';

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
      <Flexbox flexGrow={1}  flexDirection="row" style={{backgroundColor:"lightgrey", padding: 3, borderWidth:1, borderStyle:"solid"}} maxWidth="900px" maxHeight="350px">
        <Flexbox flexGrow={1} flexDirection="column">
            <Flexbox>
            <Flexbox flex={2}>
              All units:
            </Flexbox>
            <Flexbox flex={1}>
              <UnitSelector onUnitSelect = {this.onAllUnitsChange} unitLabel={this.state.allUnits} units={[0,1,2]}/>
            </Flexbox>
        </Flexbox>

          <Flexbox>
            <NumberInput value = {this.state.x.value} label="Length" onChange={this.handleChangex} unitLabel={this.state.x.label()} onUnitSelect = {this.onUnitSelectX} units={[0,1,2]}/>
        </Flexbox>
        <Flexbox>
          <NumberInput value = {this.state.y.value} label="Width" onChange={this.handleChangey} unitLabel={this.state.y.label()} onUnitSelect = {this.onUnitSelectY} units={[0,1,2]}/>
      </Flexbox>
      <Flexbox>
        <NumberInput value = {this.state.z.value} label="Height" onChange={this.handleChangez} unitLabel={this.state.z.label()} onUnitSelect = {this.onUnitSelectZ} units={[0,1,2]} />
      </Flexbox>
<Flexbox>
          <Flexbox>
          Volume equals
        </Flexbox>
          <Flexbox>
            <div style = {{color:"green"}}> {this.getVolume(this.state.x, this.state.y, this.state.z).map((result)=> {return <div>{result}</div>})}</div>
         </Flexbox>
</Flexbox>
      </Flexbox>
      <Flexbox>
        <CuboidImage/>
      </Flexbox>

      </Flexbox>
    );
  }
}

export default RectangularVolumeCalculator
