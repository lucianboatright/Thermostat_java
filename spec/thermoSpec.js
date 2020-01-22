// 'use strict';
describe ('Thermostate', function() {
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });
  it('it returns temperature (20)', function() {
    expect(thermostat.temperature).toEqual(20)
  });
});