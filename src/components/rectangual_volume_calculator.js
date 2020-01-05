import React from "react"
import Dropdown from 'react-bootstrap/Dropdown'
import Container from 'react-bootstrap/Container'
import CuboidImage from "../components/cuboid_image"
import NumberInput from "../components/number_input"
import Card from 'react-bootstrap/Card'
import units from "../components/units"
import UnitSelector from "../components/unit_selector"
import Flexbox from 'flexbox-react';
import cuboid from "../images/prism.png";
import "../components/layout.css";
import { Glyphicon } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Toast from 'react-bootstrap/Toast'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

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
        <Card bg="light">
          <Card.Header as="h5">Cuboid Calculator</Card.Header>
          <Card.Body>
            <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
        <Flexbox flexGrow={1} flexDirection="column" style={{ padding: 3}} maxWidth="500px" maxHeight="600px">
            <Flexbox>
            <Flexbox flex={2}>
              All units:
            </Flexbox>
            <Flexbox flex={1}>
              <UnitSelector onUnitSelect = {this.onAllUnitsChange} unitLabel={this.state.allUnits} units={[0,1,2]}/>
            </Flexbox>
        </Flexbox>

          <Flexbox>
            <NumberInput value = {this.state.x.value} label="Length (l)" onChange={this.handleChangex} unitLabel={this.state.x.label()} onUnitSelect = {this.onUnitSelectX} units={[0,1,2]}/>
        </Flexbox>
        <Flexbox>
          <NumberInput value = {this.state.y.value} label="Width (w)" onChange={this.handleChangey} unitLabel={this.state.y.label()} onUnitSelect = {this.onUnitSelectY} units={[0,1,2]}/>
      </Flexbox>
      <Flexbox>
        <NumberInput value = {this.state.z.value} label="Height (h)" onChange={this.handleChangez} unitLabel={this.state.z.label()} onUnitSelect = {this.onUnitSelectZ} units={[0,1,2]} />
      </Flexbox>
      <Flexbox marginTop={"10px"} justifyContent="center">
            <img src={cuboid} width="200" height="100" />
            </Flexbox>
            <Flexbox>
            Volume equals:
          </Flexbox>
            <Flexbox>

          <Flexbox alignItems="center" justifyContent="center" marginLeft="3px">
            <div style = {{color:"green"}}> {this.getVolume(this.state.x, this.state.y, this.state.z).map((result)=> {
              return <Flexbox>
                <Flexbox flex={7}>
                <InputGroup className="mb-3">
  <Form.Control  readOnly defaultValue={result[0]}  ref={(textarea) => this.textArea = textarea}/>
  <InputGroup.Append>
    <OverlayTrigger
    placement="right"
    show={false}
    delay={{ show: 250, hide: 400 }}
    overlay={<Tooltip>Copy to clipboard</Tooltip>}
  >
    <Button variant="outline-secondary" onClick={() => {
      const el = this.textArea
      el.select()
      document.execCommand("copy")
    }}>Copy</Button>
  </OverlayTrigger>


  </InputGroup.Append>
</InputGroup>
</Flexbox>
                <Flexbox flex={1} marginLeft="8px">{result[1]? result[1]: "Units"}</Flexbox>
              </Flexbox>})}</div>
         </Flexbox>
</Flexbox>

      </Flexbox>
    </Card.Body>
    </Card>


    );
  }
}

export default RectangularVolumeCalculator
