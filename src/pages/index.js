import "bootstrap/dist/css/bootstrap.min.css"
import React from "react"
import VolumeCalculators from "../components/volume_calculators"
import Flexbox from "flexbox-react"
import { Helmet } from "react-helmet"
import ReactGA from "react-ga"
import Button from "react-bootstrap/Button"
import ReactPixel from "react-facebook-pixel"

ReactGA.initialize("UA-155271009-1")

//export PATH=${HOME}/.brew/bin:${PATH}
class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = { contactFromVisible: false }

    const options = {
      autoConfig: true, // set pixel's autoConfig
      debug: false, // enable logs
    }
    ReactPixel.init("868124460307963", null, options)
    ReactPixel.pageView()
  }

  render() {
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
            color: "darkblue",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <h1>Volume Calculator</h1>
        </Flexbox>

        <VolumeCalculators />
        <Flexbox flexDirection="column" margin="15px">
          {this.state.contactFromVisible ? (
            <form
              method="post"
              action="https://getform.io/f/5e20d74d-922a-4102-a40d-bea225b8747e"
            >
              <Flexbox flexDirection="column">
                <input type="hidden" name="bot-field" />
                <label>
                  Something is not working or missing? Let us know. We'll do our
                  best to fix it
                </label>
                <label>Email</label>
                <input type="email" name="email" />
                <label>What is broken or missing?</label>
                <textarea name="message" id="message" rows="2" />
                <label></label>
                <button type="submit">Send</button>
              </Flexbox>
            </form>
          ) : null}
          <Button
            variant="primary"
            onClick={() => {
              this.setState(prevState => ({
                contactFromVisible: !prevState.contactFromVisible,
              }))
            }}
          >
            Something is not working or missing?{" "}
          </Button>
        </Flexbox>
      </Flexbox>
    )
  }
}

export default Main
