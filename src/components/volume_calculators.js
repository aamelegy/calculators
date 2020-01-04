import React from "react"
import RectangularVolumeCalculator from "../components/rectangual_volume_calculator"
class VolumeCalculators extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <RectangularVolumeCalculator/>
      </div>
    );
  }
}

export default VolumeCalculators
