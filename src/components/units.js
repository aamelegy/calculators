class Meter {
  constructor(value){
    this.value = value;
    this.cubeUnit = "m³";
  }
  static label(){
    return "Meters";
  }
  label(){
    return "Meters";
  }
  toMeter() {
    return this.value;
  }
  to(type){
    if (type === Centimeter) {
      return this.value * 100;
    }
    else if (type === Meter) {
      return this.value;
    }
    else if (type === Kilometer) {
      return this.value / 1000;
    }
  }
}

class Centimeter {
  constructor(value){
    this.value = value;
    this.cubeUnit = "cm³";
  }
  static label() {
    return "Centimeters";
  }
  label() {
    return "Centimeters";
  }
  toMeter(){
    return this.value / 100;
  }
}

class Inches {
  constructor(value){
    this.value = value;
    this.cubeUnit = "in³";
  }
  static label() {
    return "Inches";
  }
  label() {
    return "Inches";
  }
  toMeter(){
    return this.value / 39.37;
  }
}

class Feet {
  constructor(value){
    this.value = value;
    this.cubeUnit = "ft³";
  }
  static label() {
    return "Feet";
  }
  label() {
    return "Feet";
  }
  toMeter(){
    return this.value / 3.281;
  }
}

class Yards {
  constructor(value){
    this.value = value;
    this.cubeUnit = "yd³";
  }
  static label() {
    return "Yards";
  }
  label() {
    return "Yards";
  }
  toMeter(){
    return this.value / 1.094;
  }
}


class Miles {
  constructor(value){
    this.value = value;
    this.cubeUnit = "mi³";
  }
  static label() {
    return "Miles";
  }
  label() {
    return "Miles";
  }
  toMeter(){
    return this.value / 1609;
  }
}

class Kilometer {
  constructor(value){
    this.value = value;
    this.cubeUnit = "km³";
  }
  static label() {
    return "Kilometers";
  }
  label() {
    return "Kilometers";
  }
  toMeter(){
    return this.value * 1000;
  }

}

class Unit {
  constructor(label, type, key){
    this.label = label;
    this.type = type;
    this.key = key;
  }
}

class MetersCube{
  constructor(value){
    this.value = value;
  }
  static label(){
    return "MetersCube";
  }
  label(){
    return "MetersCube";
  }
  toMetersCube() {
    return this.value;
  }
  toFormatted(type){
    if (type === Centimeter) {
      var value = this.value * 1000000;
      value = +value.toFixed(10);
      return [value, " cm³"];
    }
    else if (type === Meter) {
      return [(this.value), " m³"];
    }
    else if (type === Kilometer) {
      var value = this.value / 1000000000;
      value = +value.toFixed(10);
      return [value, " km³"];
    }
    else if (type === Inches) {
      var value = this.value * 61024;
      value = +value.toFixed(10);
      return [value, " in³"];
    }
    else if (type === Feet) {
      var value = this.value * 35.315;
      value = +value.toFixed(10);
      return [value, " ft³"];
    }
    else if (type === Yards) {
      var value = this.value * 1.308;
      value = +value.toFixed(10);
      return [value, " yd³"];
    }
    else if (type === Miles) {
      var value = this.value / 4.168e+9;
      value = +value.toFixed(10);
      return [value, " mi³"];
    }
  }
}

var units = {0: new Unit("Meters", Meter, 0), 1: new Unit("Kilometers", Kilometer, 1), 2: new Unit("Centimeter", Centimeter, 2), 3: new Unit("MetersCube", MetersCube,3)
, 4: new Unit("Inches", Inches,4)
, 5: new Unit("Feet", Feet,5)
, 6: new Unit("Yards", Yards,6)
, 7: new Unit("Miles", Miles,7)};
export default units;
