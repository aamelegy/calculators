import "bootstrap/dist/css/bootstrap.min.css"
import React from "react"
import VolumeCalculators from "../components/volume_calculators"
import Flexbox from "flexbox-react"
import { Helmet } from "react-helmet"
import ReactGA from "react-ga"

//export PATH=${HOME}/.brew/bin:${PATH}
class Main extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    ReactGA.initialize("UA-155271009-1")
    ReactGA.pageview(window.location.pathname + window.location.search)
    return (
      <Flexbox height="100vh" flexDirection="column" alignItems="center">
        <div className="application">
          <Helmet>
            <meta charSet="utf-8" />
            <meta
              name="description"
              content="A free fast volume calculator that can compute volumes of common shapes like cuboid, cube, sphere, cylinder, tank.."
            />
            <meta
              name="google-site-verification"
              content="GsSM6DgwCg7plHe8YkkB6Xjj6gL7_w1hGO76ZCsNhyk"
            />
            <meta name="robots" content="all"></meta>
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
