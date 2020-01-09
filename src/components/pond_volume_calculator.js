import RectangularVolumeCalculator from "../components/rectangual_volume_calculator"
var convert = require("convert-units")

class PondVolumeCalculator extends RectangularVolumeCalculator {
  constructor(props) {
    super(props)
  }

  getDescription() {
    return "Enter the length, width and depth of your pond to figure out how much water it holds. volume = length × width × height"
  }

  getName() {
    return "Pond Volume Calculator"
  }
}

export default PondVolumeCalculator
