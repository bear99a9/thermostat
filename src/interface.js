$(document).ready(function () {
    let thermostat = new Thermostat;
    updateTemperature();

    $('#up').click(function () {
      thermostat.increaseTemp();
      updateTemperature();
    });

    $('#down').click(function () {
      thermostat.decreaseTemp();
      updateTemperature();
    });

    $('#temperature-reset').click(function () {
      thermostat.reset();
      updateTemperature();
    });

    $('#power-saving-on').click(function () {
        thermostat.powerSavingOn();
        $('#power-saving-mode').text('on');
        updateTemperature();
      });

    $('#power-saving-off').click(function () {
        thermostat.powerSavingOff();
        $('#power-saving-mode').text('off');
      });

    function updateTemperature() {
      $('#current-temperature').text(thermostat.currentTemp());
      $('#power-usage').text(thermostat.energyUsage());
      $('#power-usage').attr('class', thermostat.energyUsage());
    }

  });
