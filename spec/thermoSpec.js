// 'use strict';
describe ('Thermostate', function() {
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });
  it('it returns temperature (20)', function() {
    expect(thermostat.getCurrentTemperature()).toEqual(20)
  });
  it('increases temperature by (1)', function() {
    thermostat.up()
    expect(thermostat.getCurrentTemperature()).toEqual(21)
  });
  it('decreases temperature by (1)', function() {
    thermostat.down()
    expect(thermostat.getCurrentTemperature()).toEqual(19)
  });
  it('minimum temperature is (10)', function() {
    for (var i=0; i<11; i++) {
      thermostat.down()
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10)
  });
});