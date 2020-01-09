import React from "react"
import Flexbox from "flexbox-react"
import InputGroup from "react-bootstrap/InputGroup"
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"
import UnitSelector from "../components/unit_selector"

class NewCalculationResult extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Flexbox>
        <InputGroup>
          <FormControl
            placeholder="Result will show here"
            aria-label="Result will show here"
            aria-describedby="basic-addon2"
            value={this.props.result}
            ref={textarea => (this.textarea = textarea)}
            readOnly
          />
          <InputGroup.Append>
            <Button
              variant="outline-secondary"
              onClick={() => {
                const el = this.textarea
                el.select()
                document.execCommand("copy")
              }}
            >
              Copy
            </Button>
            <UnitSelector
              onUnitSelect={this.props.onUnitChange}
              unitLabel={this.props.unit}
              units={this.props.units}
            />
          </InputGroup.Append>
        </InputGroup>
      </Flexbox>
    )
  }
}

export default NewCalculationResult
