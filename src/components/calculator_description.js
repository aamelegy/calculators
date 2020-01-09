import React from "react"
import Flexbox from "flexbox-react"

class CalculatorDescription extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Flexbox flexDirection={"column"}>
        <Flexbox style={{ fontSize: "30px", fontWeight: "bold" }}>
          {this.props.title}
        </Flexbox>
        {this.props.paragraphs.map(paragraph => {
          return (
            <Flexbox marginBottom="20px" flexDirection={"column"}>
              <Flexbox style={{ fontSize: "20px" }}>{paragraph[0]}</Flexbox>
              {paragraph[1]}
            </Flexbox>
          )
        })}
      </Flexbox>
    )
  }
}

export default CalculatorDescription
