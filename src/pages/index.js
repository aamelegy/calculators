import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"


function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {x: 0,y:0};

    this.handleChangex = this.handleChangex.bind(this);
    this.handleChangey = this.handleChangey.bind(this);
  }

  handleChangex(event) {
    this.setState({x: event.target.value});
  }
  handleChangey(event) {
    this.setState({y: event.target.value});
  }


  render() {
    return (
      <div>
        <label>
          x:
          <input type="text" value={this.state.x} onChange={this.handleChangex} />
        </label>
        <label>
          y:
          <input type="text" value={this.state.y} onChange={this.handleChangey} />
        </label>
        <input type='text' value={parseInt(this.state.x) + parseInt(this.state.y)} readonly/>
      </div>
    );
  }
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Welcome name="ahmed"/>
     <input type="text" name="name" />
     <input type="text" name="name" />
     <input type="text" name="name" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default NameForm
