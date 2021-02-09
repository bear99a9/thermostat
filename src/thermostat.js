'use strict';

class Thermostat {
  constructor() {
    this._temperature = 20;
  }

  currentTemp() {
    if (this._temperature >= 10) {
      return this._temperature;
    }else {
      return 10;
    }
  }

  increaseTemp() {
    ++this._temperature;
  }

  decreaseTemp() {
    --this._temperature;
  }
}
