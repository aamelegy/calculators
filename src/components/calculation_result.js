import React from "react"
import Flexbox from "flexbox-react"
import InputGroup from "react-bootstrap/InputGroup"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import OverlayTrigger from "react-bootstrap/OverlayTrigger"
import Tooltip from "react-bootstrap/Tooltip"

class CalculationResult extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    var resultBoxes = {}
    return (
      <Flexbox>
        <Flexbox flex={7} justifyContent="center" alignItems="center">
          <InputGroup className="mb-3">
            <Form.Control
              readOnly
              value={this.props.result.value}
              ref={textarea =>
                (resultBoxes[this.props.result.value] = textarea)
              }
            />
            <InputGroup.Append>
              <OverlayTrigger
                placement="right"
                show={false}
                delay={{ show: 250, hide: 400 }}
                overlay={<Tooltip>Copy to clipboard</Tooltip>}
              >
                <Button
                  variant="outline-secondary"
                  onClick={() => {
                    const el = resultBoxes[this.props.result.value]
                    el.select()
                    document.execCommand("copy")
                  }}
                >
                  Copy
                </Button>
              </OverlayTrigger>
            </InputGroup.Append>
          </InputGroup>
        </Flexbox>
        <Flexbox flex={1} marginLeft="8px" marginTop="6px">
          {this.props.result ? this.props.result.label() : "Units"}
        </Flexbox>
      </Flexbox>
    )
  }
}

export default CalculationResult
