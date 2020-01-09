import React from "react"
import NumberInput from "../components/number_input"
import Card from "react-bootstrap/Card"
import units from "../components/units"
import UnitSelector from "../components/unit_selector"
import CalculationResults from "./calculation_results"
import NewCalculationResult from "./new_calculation_result"
import Flexbox from "flexbox-react"
import Button from "react-bootstrap/Button"
var convert = require("convert-units")

class BaseVolumeCalculator extends React.Component {
  constructor(props) {
    super(props)
    var initState = {}
    this.props.inputs.forEach(element => {
      initState[element.name] = ["", "cm"]
    })
    initState.allUnits = "cm"
    initState.resultUnit = "cm3"
    this.state = { ...initState }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.onUnitSelect = this.onUnitSelect.bind(this)
    this.onAllUnitsChange = this.onAllUnitsChange.bind(this)
    this.getInputUnits = this.getInputUnits.bind(this)
    this.onResultUnitChange = this.onResultUnitChange.bind(this)
  }
  onResultUnitChange(eventKey) {
    this.setState({ resultUnit: eventKey })
  }
  getInputUnits() {
    var units = []
    this.props.inputs.forEach(element => {
      units.push(this.state[element.name].constructor)
    })
    return units
  }
  handleInputChange(inputName, event) {
    var value = event.target.value
    var newState = {}
    var currentValueUnit = this.state[inputName][1]
    newState[inputName] = [value, currentValueUnit]
    this.setState({ ...newState })
  }
  onUnitSelect(inputName, eventKey) {
    var currentValue = this.state[inputName][0]
    var newState = {}
    newState[inputName] = [currentValue, eventKey]
    this.setState({ ...newState })
  }
  onAllUnitsChange(eventKey) {
    var newState = {}
    this.props.inputs.forEach(element => {
      var currentValue = this.state[element.name][0]
      newState[element.name] = [currentValue, eventKey]
    })
    newState.allUnits = eventKey
    this.setState({ ...newState })
  }
  clearAll() {
    var newState = {}
    this.props.inputs.forEach(element => {
      newState[element.name] = ["", "cm"]
    })
    newState.allUnits = "cm"
    console.log(newState)
    this.setState({ ...newState })
  }

  render() {
    var unitsUsed = convert().list("length")
    var volumeUnits = convert().list("volume")
    return (
      <Card bg="light">
        <Card.Header as="h5">{this.props.name}</Card.Header>
        <Card.Body>
          <Card.Text>{this.props.description}</Card.Text>
          <Flexbox
            flexGrow={1}
            flexDirection="column"
            style={{ padding: 3 }}
            maxWidth="500px"
            maxHeight="800px"
          >
            <Flexbox>
              <Flexbox flex={2}>All units:</Flexbox>
              <Flexbox flex={1}>
                <UnitSelector
                  onUnitSelect={this.onAllUnitsChange}
                  unitLabel={this.state.allUnits}
                  units={unitsUsed}
                />
              </Flexbox>
            </Flexbox>
            {this.props.inputs.map(element => {
              return (
                <Flexbox>
                  <NumberInput
                    value={this.state[element.name][0]}
                    label={element.label}
                    onChange={this.handleInputChange.bind(this, element.name)}
                    unitLabel={this.state[element.name][1]}
                    onUnitSelect={this.onUnitSelect.bind(this, element.name)}
                    units={unitsUsed}
                  />
                </Flexbox>
              )
            })}

            <Flexbox marginTop={"10px"} justifyContent="center">
              <img
                src={this.props.shapeImage}
                width="90"
                height="90"
                alt="Shape Image"
              />
            </Flexbox>
            <Flexbox>Volume equals:</Flexbox>
            <Flexbox>
              <Flexbox alignItems="center" justifyContent="center">
                <div style={{ color: "green" }}>
                  {" "}
                  <NewCalculationResult
                    result={this.props.getVolume(this.state)}
                    unit={this.state.resultUnit}
                    units={volumeUnits}
                    onUnitChange={this.onResultUnitChange}
                  />
                </div>
              </Flexbox>
            </Flexbox>
            <Button
              variant="outline-secondary"
              onClick={() => {
                this.clearAll()
              }}
            >
              Clear all
            </Button>
          </Flexbox>
        </Card.Body>
      </Card>
    )
  }
}

export default BaseVolumeCalculator
