import React from "react"
import RectangularVolumeCalculator from "../components/rectangual_volume_calculator"
import Flexbox from 'flexbox-react';

class VolumeCalculators extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Flexbox style={{margin:3}} flexGrow={1} flexDirection={"row"} flexWrap="wrap">
        <Flexbox flex={1} justifyContent="center" margin="3px">
          <RectangularVolumeCalculator/>
        </Flexbox>
        <Flexbox flex={1} justifyContent="center" margin="3px" >
          <RectangularVolumeCalculator/>
        </Flexbox>
        <Flexbox flex={1} justifyContent="center"  margin="3px">
          <RectangularVolumeCalculator/>
        </Flexbox>
        <Flexbox flex={1} justifyContent="center"  margin="3px">
          <RectangularVolumeCalculator/>
        </Flexbox>
        <Flexbox flex={1} justifyContent="center"  margin="3px">
          <RectangularVolumeCalculator/>
        </Flexbox>
        <Flexbox flex={1} justifyContent="center"  margin="3px">
          <RectangularVolumeCalculator/>
        </Flexbox>
        <Flexbox flex={1} justifyContent="center"  margin="3px">
          <RectangularVolumeCalculator/>
        </Flexbox>
        <Flexbox flex={1} justifyContent="center"  margin="3px">
          <RectangularVolumeCalculator/>
        </Flexbox>
        <Flexbox flex={1} justifyContent="center"  margin="3px">
          <RectangularVolumeCalculator/>
        </Flexbox>
      </Flexbox>
    );
  }
}

export default VolumeCalculators
