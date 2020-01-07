class Meter {
  constructor(value) {
    this.value = value
    this.cubeUnit = MetersCube
  }
  static label() {
    return "Meters"
  }
  label() {
    return "Meters"
  }
  toMeter() {
    return this.value
  }
  to(type) {
    if (type === Centimeter) {
      return this.value * 100
    } else if (type === Meter) {
      return this.value
    } else if (type === Kilometer) {
      return this.value / 1000
    }
  }
}

class Centimeter {
  constructor(value) {
    this.value = value
    this.cubeUnit = CubicCentimeters
  }
  static label() {
    return "Centimeters"
  }
  label() {
    return "Centimeters"
  }
  toMeter() {
    return this.value / 100
  }
}

class Inches {
  constructor(value) {
    this.value = value
    this.cubeUnit = CubicInches
  }
  static label() {
    return "Inches"
  }
  label() {
    return "Inches"
  }
  toMeter() {
    return this.value / 39.37
  }
}

class Feet {
  constructor(value) {
    this.value = value
    this.cubeUnit = "ft³"
  }
  static label() {
    return "Feet"
  }
  label() {
    return "Feet"
  }
  toMeter() {
    return this.value / 3.281
  }
}

class Yards {
  constructor(value) {
    this.value = value
    this.cubeUnit = CubicYards
  }
  static label() {
    return "Yards"
  }
  label() {
    return "Yards"
  }
  toMeter() {
    return this.value / 1.094
  }
}

class Miles {
  constructor(value) {
    this.value = value
    this.cubeUnit = CubicMiles
  }
  static label() {
    return "Miles"
  }
  label() {
    return "Miles"
  }
  toMeter() {
    return this.value / 1609
  }
}

class Kilometer {
  constructor(value) {
    this.value = value
    this.cubeUnit = CubicKilometers
  }
  static label() {
    return "Kilometers"
  }
  label() {
    return "Kilometers"
  }
  toMeter() {
    return this.value * 1000
  }
}

class Unit {
  constructor(label, type, key) {
    this.label = label
    this.type = type
    this.key = key
  }
}

class MetersCube {
  constructor(value) {
    this.value = value
  }
  static label() {
    return "m³"
  }
  label() {
    return "m³"
  }
  toMetersCube() {
    return this.value
  }
  toUKGallons() {
    return new UKGallons(this.value * 219.969)
  }
  toUSGalloms() {
    return new USGallons(this.value * 264.172)
  }
  toLitres() {
    return new Litres(this.value * 1000)
  }
  toFormatted(type) {
    if (type === Centimeter) {
      var value = this.value * 1000000
      value = +value.toFixed(10)
      return new CubicCentimeters(value)
    } else if (type === Meter) {
      return this
    } else if (type === Kilometer) {
      var value = this.value / 1000000000
      value = +value.toFixed(10)
      return new CubicKilometers(value)
    } else if (type === Inches) {
      var value = this.value * 61024
      value = +value.toFixed(10)
      return new CubicInches(value)
    } else if (type === Feet) {
      var value = this.value * 35.315
      value = +value.toFixed(10)
      return new CubicFeet(value)
    } else if (type === Yards) {
      var value = this.value * 1.308
      value = +value.toFixed(10)
      return new CubicYards(value)
    } else if (type === Miles) {
      var value = this.value / 4.168e9
      value = +value.toFixed(10)
      return new CubicMiles(value)
    }
  }
}

class CubicMiles {
  constructor(value) {
    this.value = value
  }
  static label() {
    return "mi³"
  }
  label() {
    return "mi³"
  }
}

class CubicCentimeters {
  constructor(value) {
    this.value = value
  }
  static label() {
    return "cm³"
  }
  label() {
    return "cm³"
  }
}

class CubicYards {
  constructor(value) {
    this.value = value
  }
  static label() {
    return "km³"
  }
  label() {
    return "km³"
  }
}

class CubicKilometers {
  constructor(value) {
    this.value = value
  }
  static label() {
    return "km³"
  }
  label() {
    return "km³"
  }
}

class CubicInches {
  constructor(value) {
    this.value = value
  }
  static label() {
    return "in³"
  }
  label() {
    return "in³"
  }
}
class CubicFeet {
  constructor(value) {
    this.value = value
  }
  static label() {
    return "ft³"
  }
  label() {
    return "ft³"
  }
}

class Barrels {
  constructor(value) {
    this.value = value
  }
  static label() {
    return "Barrels"
  }
  label() {
    return "Barrels"
  }
}

class Litres {
  constructor(value) {
    this.value = value
  }
  static label() {
    return "Litres"
  }
  label() {
    return "Litres"
  }
}

class USGallons {
  constructor(value) {
    this.value = value
  }
  static label() {
    return "Gallons (US)"
  }
  label() {
    return "Gallons (US)"
  }
}

class UKGallons {
  constructor(value) {
    this.value = value
  }
  static label() {
    return "Gallons (UK)"
  }
  label() {
    return "Gallons (UK)"
  }
}

var units = {
  Meters: new Unit("Meters", Meter, 0),
  Kilometers: new Unit("Kilometers", Kilometer, 1),
  Centimeters: new Unit("Centimeter", Centimeter, 2),
  MetersCube: new Unit("MetersCube", MetersCube, 3),
  Inches: new Unit("Inches", Inches, 4),
  Feet: new Unit("Feet", Feet, 5),
  Yards: new Unit("Yards", Yards, 6),
  Miles: new Unit("Miles", Miles, 7),
}
export default units
