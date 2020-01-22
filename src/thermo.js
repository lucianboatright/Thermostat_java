function Thermostat(){
  this.temperature = 20;
};

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.up = function() {
  return this.temperature += 1;
};

Thermostat.prototype.down = function() {
  return this.temperature -= 1;
};

// function Thermostat(temp) = {
//   this.temperature = temp;
// };

// Thermostat.prototype.show = function(){
//   return this.temperature;
// };

// var test_thermo = new Thermostat(20);

// test_thermo.temp();
// Thermostat.prototype.temperature = function(){
//   reutrn this.temperature;
// };