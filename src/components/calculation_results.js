import React from "react"
import Flexbox from "flexbox-react"
import InputGroup from "react-bootstrap/InputGroup"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import OverlayTrigger from "react-bootstrap/OverlayTrigger"
import Tooltip from "react-bootstrap/Tooltip"

class CalculationResults extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    var resultBoxes = {}
    return (
      <Flexbox>
        <Flexbox flex={7}>
          <InputGroup className="mb-3">
            <Form.Control
              readOnly
              defaultValue={this.props.result[0]}
              ref={textarea => (resultBoxes[this.props.result[0]] = textarea)}
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
                    const el = resultBoxes[this.props.result[0]]
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
        <Flexbox
          flex={1}
          marginLeft="8px"
          justifyContent="center"
          alginItems="center"
        >
          {this.props.result[1] ? this.props.result[1] : "Units"}
        </Flexbox>
      </Flexbox>
    )
  }
}

export default CalculationResults
