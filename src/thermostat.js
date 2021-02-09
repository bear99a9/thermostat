'use strict';

class Thermostat {
  constructor() {
    this._temperature = 20;
    this._MIN_TEMP = 10;
  }

  currentTemp() {
    return this._temperature;
  }

  increaseTemp() {
    ++this._temperature;
  }

  decreaseTemp() {
    if (this.isMinTemp()) {
      return;
    }

    --this._temperature;
  }

  isMinTemp() {
    return this._temperature === this._MIN_TEMP;
  }
}
