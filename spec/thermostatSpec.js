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
  it('can increase the temperature with an up fucntion', function () {
    thermostat.increaseTemp();
    expect(thermostat.currentTemp()).toEqual(21);
  });
});
