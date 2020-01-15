import React from "react"
import UnitSelector from "../components/unit_selector"
import Flexbox from "flexbox-react"
import InputGroup from "react-bootstrap/InputGroup"
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"

class NumberInput extends React.Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.state = { error: false }
  }

  handleChange(event) {
    this.setState({ error: isNaN(event.target.value) })
    this.props.onChange(event)
  }

  render() {
    var unitLabel = this.props.unitLabel
    return (
      <Flexbox marginTop={"8px"} flexDirection="column">
        <InputGroup>
          <Flexbox flexDirection="column">
            <Flexbox flex={1} style={{ fontWeight: "bold", fontSize: "20px" }}>
              {this.props.label}
            </Flexbox>
            <Flexbox>
              <FormControl
                type="number"
                value={this.props.value}
                onChange={this.handleChange}
                ref={textarea => (this.textarea = textarea)}
              />
              <InputGroup.Append>
                <UnitSelector
                  onUnitSelect={this.props.onUnitSelect}
                  unitLabel={unitLabel}
                  units={this.props.units}
                />
              </InputGroup.Append>
            </Flexbox>
          </Flexbox>
        </InputGroup>
      </Flexbox>
    )
  }
}

export default NumberInput
