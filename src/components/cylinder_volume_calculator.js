import React from "react"
import NumberInput from "../components/number_input"
import Card from "react-bootstrap/Card"
import units from "../components/units"
import UnitSelector from "../components/unit_selector"
import CalculationResults from "../components/calculation_results"
import Flexbox from "flexbox-react"
import cylinder from "../images/cylinder.png"
import Button from "react-bootstrap/Button"

class CylinderVolumeCalculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      r: new units.Meters.type(""),
      h: new units.Meters.type(""),
      allUnits: units.Meters.label,
    }
    this.handleChangeR = this.handleChangeR.bind(this)
    this.onUnitSelectR = this.onUnitSelectR.bind(this)
    this.handleChangeH = this.handleChangeH.bind(this)
    this.onUnitSelectH = this.onUnitSelectH.bind(this)
    this.onAllUnitsChange = this.onAllUnitsChange.bind(this)
  }

  handleChangeR(event) {
    var value = event.target.value
    this.setState({ r: new this.state.r.constructor(value) })
  }
  onUnitSelectR(eventKey, event) {
    var currentValue = this.state.x.value
    this.setState({ r: new units[eventKey].type(currentValue) })
  }
  handleChangeH(event) {
    var value = event.target.value
    this.setState({ h: new this.state.h.constructor(value) })
  }
  onUnitSelectH(eventKey, event) {
    var currentValue = this.state.y.value
    this.setState({ h: new units[eventKey].type(currentValue) })
  }
  onAllUnitsChange(eventKey, event) {
    this.setState({
      r: new units[eventKey].type(this.state.r.value),
      h: new units[eventKey].type(this.state.h.value),
      allUnits: units[eventKey].label,
    })
  }
  getVolume(r, h) {
    return [["12", "as"]]
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
        <Card.Header as="h5">Cylinder Calculator</Card.Header>
        <Card.Body>
          <Card.Text>
            A generalized form of a cube. volume = length × width × height
          </Card.Text>
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

            <Flexbox>
              <NumberInput
                value={this.state.r.value}
                label="Base Radius (r)"
                onChange={this.handleChangeR}
                unitLabel={this.state.r.label()}
                onUnitSelect={this.onUnitSelectR}
                units={unitsUsed}
              />
            </Flexbox>
            <Flexbox>
              <NumberInput
                value={this.state.h.value}
                label="Height (h)"
                onChange={this.handleChangeH}
                unitLabel={this.state.h.label()}
                onUnitSelect={this.onUnitSelectH}
                units={unitsUsed}
              />
            </Flexbox>
            <Flexbox marginTop={"10px"} justifyContent="center">
              <img src={cylinder} width="200" height="100" />
            </Flexbox>
            <Flexbox>Volume equals:</Flexbox>
            <Flexbox>
              <Flexbox
                alignItems="center"
                justifyContent="center"
                marginLeft="3px"
              >
                <div style={{ color: "green" }}>
                  {" "}
                  {this.getVolume(this.state.r, this.state.h).map(result => {
                    return <CalculationResults result={result} />
                  })}
                </div>
              </Flexbox>
            </Flexbox>
            <Button
              variant="outline-secondary"
              onClick={() => {
                this.setState({
                  r: new units.Meters.type(""),
                  hs: new units.Meters.type(""),
                  allUnits: units.Meters.label,
                })
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

export default CylinderVolumeCalculator
