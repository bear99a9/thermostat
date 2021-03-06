$(document).ready(function () {
    let thermostat = new Thermostat;
    updateTemperature();

    $('#up').click(function () {
      thermostat.up();
      updateTemperature();
    });

    $('#down').click(function () {
      thermostat.down();
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

    displayWeather('London');

    $('#select-city').submit(function (event) {
      event.preventDefault();
      let city = $('#current-city').val();
      displayWeather(city);
    });

    function updateTemperature() {
      $('#temperature').text(thermostat.currentTemp());
      $('#power-usage').text(thermostat.energyUsage());
      $('#power-usage').attr('class', thermostat.energyUsage());
    }

    function displayWeather(city) {
      let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
      let token = '&appid=a8a9d855f19ccd6a35cc2c6bf8328d89';
      let units = '&units=metric';
      $.get(url + token + units, function (data) {
        $('#current-temperature').text(data.main.temp);
        $('#location').text(city);
      });
    }

  });
