import React from "react"
import SEO from "../components/seo"
import VolumeCalculators from "../components/volume_calculators"
import 'bootstrap/dist/css/bootstrap.min.css';
import Flexbox from 'flexbox-react';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Flexbox height= "100vh"  flexDirection="column" >
        <Flexbox  style = {{fontSize:"250%", color:"darkblue", justifyContent:"center", display:"flex"}}>
          Volume Calculator
        </Flexbox>
        <VolumeCalculators/>
      </Flexbox>
    );
  }
}


export default Main
