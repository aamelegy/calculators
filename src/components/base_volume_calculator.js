import React from "react"
import NumberInput from "../components/number_input"
import Card from "react-bootstrap/Card"
import units from "../components/units"
import UnitSelector from "../components/unit_selector"
import CalculationResults from "../components/calculation_results"
import Flexbox from "flexbox-react"
import Button from "react-bootstrap/Button"

class BaseVolumeCalculator extends React.Component {
  constructor(props) {
    super(props)
    var initState = {}
    this.props.inputs.forEach(element => {
      initState[element.name] = new units.Meters.type("")
    })
    initState.allUnits = units.Meters.label
    this.state = { ...initState }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.onUnitSelect = this.onUnitSelect.bind(this)
    this.onAllUnitsChange = this.onAllUnitsChange.bind(this)
  }

  handleInputChange(inputName, event) {
    var value = event.target.value
    var newState = {}
    newState[inputName] = new this.state[inputName].constructor(value)
    this.setState({ ...newState })
  }
  onUnitSelect(inputName, eventKey) {
    var currentValue = this.state[inputName].value
    var newState = {}
    newState[inputName] = new units[eventKey].type(currentValue)
    this.setState({ ...newState })
  }
  onAllUnitsChange(eventKey) {
    var newState = {}
    this.props.inputs.forEach(element => {
      newState[element.name] = new units[eventKey].type(
        this.state[element.name].value
      )
    })
    newState.allUnits = units[eventKey].label
    this.setState({ ...newState })
  }
  clearAll() {
    var newState = {}
    this.props.inputs.forEach(element => {
      newState[element.name] = new units.Meters.type("")
    })
    newState.allUnits = units.Meters.label
    this.setState({ ...newState })
  }

  render() {
    var unitsUsed = [
      "Meters",
      "Kilometers",
      "Centimeters",
      "Inches",
      "Feet",
      "Yards",
      "Miles",
    ]
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
            maxHeight="600px"
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
                    value={this.state[element.name].value}
                    label={element.label}
                    onChange={this.handleInputChange.bind(this, element.name)}
                    unitLabel={this.state[element.name].label()}
                    onUnitSelect={this.onUnitSelect.bind(this, element.name)}
                    units={unitsUsed}
                  />
                </Flexbox>
              )
            })}

            <Flexbox marginTop={"10px"} justifyContent="center">
              <img src={this.props.shapeImage} width="100" height="100" />
            </Flexbox>
            <Flexbox>Volume equals:</Flexbox>
            <Flexbox>
              <Flexbox alignItems="center" justifyContent="center">
                <div style={{ color: "green" }}>
                  {" "}
                  {this.props.getVolume(this.state).map(result => {
                    return <CalculationResults result={result} />
                  })}
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
