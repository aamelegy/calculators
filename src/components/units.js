class Meter {
  constructor(value){
    this.value = value;
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

class Kilometer {
  constructor(value){
    this.value = value;
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
  }
}

var units = {0: new Unit("Meters", Meter, 0), 1: new Unit("Kilometers", Kilometer, 1), 2: new Unit("Centimeter", Centimeter, 2), 3: new Unit("MetersCube", MetersCube,3)};
export default units;
