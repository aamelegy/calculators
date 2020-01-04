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
      <div  style={{height: "100vh",marginTop: "10%",}}>
        <div style = {{display:"flex",alignItems:"center",justifyContent: "center",flexDirection:"column",fontSize:"300%", color:"darkblue"}}>Volume Calculator</div>
        <VolumeCalculators/>
      </div>
    );
  }
}


export default Main
