import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
import VolumeCalculators from "../components/volume_calculators"
import 'bootstrap/dist/css/bootstrap.min.css';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div style = {{fontSize:"200%", color:"darkblue", justifyContent:"center", display:"flex"}}>Volume Calculator</div>
        <VolumeCalculators/>
      </div>
    );
  }
}


export default Main
