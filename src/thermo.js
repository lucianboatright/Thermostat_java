function Thermostat(){
  this.temperature = 20;
  this.powerSaveMode = true;
  this.usage ;
};

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.up = function() {
  if (this.powerSaveMode === true && this.temperature === 25){
    return this.temperature;
  }
  else if (this.powerSaveMode === false && this.temperature === 32){
    return this.temperature;
  }
  else {
    return this.temperature += 1
  }
  // this.energyUsage();
};

Thermostat.prototype.down = function() {
  if (this.temperature === 10) {
    return this.temperature
  } else {
    return this.temperature -= 1;
  }
  // this.energyUsage();
};

Thermostat.prototype.powerSaveSwitch = function() {
  this.powerSaveMode = !this.powerSaveMode
};

Thermostat.prototype.resetTemp = function() {
  return this.temperature = 20;
};

Thermostat.prototype.energyUsage = function() {

  if (this.temperature < 18){
    return this.usage = 'low-usage';
  } 
  else if (this.temperature > 17 && this.temperature < 25){
    return this.usage = 'mid-usage';
  }
  else {
    return this.usage = 'high-usage';
  }
};



  // if (this.power_save === true)
  //   if (this.temperature === 25){
  //     reutrn this.temperature
  //   }
  //   else if {this.temperature < 25
  //     return this.temperature += 1;
  //   }
  // else if (this.power_save === false)
  //   if (this.temperature === 32){
  //     return this.temperature
  //   }
  //   else {
  //     return this.temperature += 1;
  //   }
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