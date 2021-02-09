'use strict';

class Thermostat {
  constructor() {
    this._temperature = 20;
  }

  currentTemp() {
    return this._temperature;
  }

  increaseTemp() {
    ++this._temperature;
  }

  decreaseTemp() {
    --this._temperature;
  }
}
