import React from "react"
import RectangularVolumeCalculator from "../components/rectangual_volume_calculator"
import Flexbox from 'flexbox-react';

class VolumeCalculators extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Flexbox style={{margin:3}} justifyContent="center" >
        <RectangularVolumeCalculator/>
      </Flexbox>
    );
  }
}

export default VolumeCalculators
