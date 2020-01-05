import React from "react"
import UnitSelector from "../components/unit_selector"
import Flexbox from "flexbox-react"

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
      <Flexbox flexGrow={1}>
        <Flexbox flex={2} flexDirection="column">
          <Flexbox flex={1}>{this.props.label}</Flexbox>
          <Flexbox flex={2}>
            <input
              type="number"
              value={this.props.value}
              onChange={this.handleChange}
            />
          </Flexbox>
        </Flexbox>
        <Flexbox flexDirection="row" flex={1} alignItems="flex-end">
          <UnitSelector
            onUnitSelect={this.props.onUnitSelect}
            unitLabel={unitLabel}
            units={this.props.units}
          />
        </Flexbox>
      </Flexbox>
    )
  }
}

export default NumberInput
