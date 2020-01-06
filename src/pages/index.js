import React from "react"
import VolumeCalculators from "../components/volume_calculators"
import "bootstrap/dist/css/bootstrap.min.css"
import Flexbox from "flexbox-react"
import { Helmet } from "react-helmet"

class Main extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Flexbox height="100vh" flexDirection="column">
        <div className="application">
          <Helmet>
            <meta charSet="utf-8" />
            <title>Volume Calculators</title>
          </Helmet>
        </div>
        <Flexbox
          style={{
            fontSize: "250%",
            color: "darkblue",
            justifyContent: "center",
            display: "flex",
          }}
        >
          Volume Calculator
        </Flexbox>
        <VolumeCalculators />
      </Flexbox>
    )
  }
}

export default Main
