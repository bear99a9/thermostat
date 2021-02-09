'use strict';

describe('Thermostat', function () {
  let thermostat;

  beforeEach(function () {
    thermostat = new Thermostat;
  });

  //  * Thermostat starts at 20 degrees
  it('has a default value of 20', function () {
    expect(thermostat._temperature).toEqual(20);
  });

  it('can show the current temperature', function () {
    expect(thermostat.currentTemp()).toEqual(20);
  });

  // * You can increase the temperature with an up function
  it('can increase the temperature with an increase fucntion', function () {
    thermostat.increaseTemp();
    expect(thermostat.currentTemp()).toEqual(21);
  });

  // * You can decrease the temperature with a down function
  it('can decrease the temperature with a decrease function', function () {
    thermostat.decreaseTemp();
    expect(thermostat.currentTemp()).toEqual(19);
  });

  // * The minimum temperature is 10 degrees
  it('has a minimum temperature of 10 degrees', function () {
    for (var i = 0; i < 11; i++) {
      thermostat.decreaseTemp();
    }

    expect(thermostat.currentTemp()).toBe(10);
  });

  // * If power saving mode is on, the maximum temperature is 25 degrees
  it('has a power saving mode that sets the max temp to 25 degrees', function () {
    for (var i = 0; i < 6; i++) {
      thermostat.increaseTemp();
    }

    expect(thermostat._powerSavingMode).toBe(true);
    expect(thermostat.currentTemp()).toBe(25);
  });

  // * If power saving mode is off, the maximum temperature is 32 degrees
  // * Power saving mode is on by default but it can also be turned off
  it('when power saving mode is off max temp is 32 degrees', function () {
    thermostat.powerSavingOff();
    expect(thermostat._powerSavingMode).toBe(false);
    for (var i = 0; i < 13; i++) {
      thermostat.increaseTemp();
    }

    expect(thermostat.currentTemp()).toEqual(32);
  });

  it('power saving mode can be switched on/off and reset to 20 degrees', function () {
    thermostat.powerSavingOff();
    expect(thermostat._powerSavingMode).toBe(false);
    for (var i = 0; i < 12; i++) {
      thermostat.increaseTemp();
    }

    expect(thermostat.currentTemp()).toEqual(32);

    thermostat.powerSavingOn();
    expect(thermostat._powerSavingMode).toBe(true);
    expect(thermostat.currentTemp()).toBe(20);
  });

  it('has a power saving mode that is on by default', function () {
    expect(thermostat._powerSavingMode).toBe(true);
  });
});
