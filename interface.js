
$(document).ready(function(){

  var thermostat = new Thermostat();
  updateEnergyUsage()

  $('#temperature').text(thermostat.temperature)

  $('#temp-up').click(function(){
    thermostat.up();
    updateEnergyUsage()
    updateTemperature()
  })

  $('#temp-down').click(function(){
    thermostat.down();
    updateEnergyUsage()
    updateTemperature()
  })

  $('#temp-reset').click(function(){
    thermostat.resetTemp();
    updateEnergyUsage()
    updateTemperature()
  })

  $('#powerswitch').click(function(){
    thermostat.powerSaveSwitch();
    if (thermostat.powerSaveMode === true){
      $('#powerswitch').css('color','green');
    } else {
      $('#powerswitch').css('color','red');
    }
  })

  // if(thermostat.usage === 'low-usage'){
  //   $('#usage').text(thermostat.usage)
  // } else if (thermostat.usage === 'mid-usage'){
  //   $('#usage').text(thermostat.usage)
  // } else {
  //   $('#usage').text(thermostat.usage)
  // }

  // function updateFunction(){ ##### does not work due to calling two in one
  //   $('#usage').text(thermostat.energyUsage())
  //   $('#temperature').text(thermostat.temperature);   
  // }

  function updateEnergyUsage() {
    $('#usage').text(thermostat.energyUsage())
  }

  function updateTemperature(){
    $('#temperature').text(thermostat.temperature);
  }

  
})