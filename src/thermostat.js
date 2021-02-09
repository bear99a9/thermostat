'use strict';

class Thermostat {
  constructor() {
    this._temperature = 20;
    this._MIN_TEMP = 10;
    this._SAVING_MAX_TEMP = 25;
  }

  currentTemp() {
    return this._temperature;
  }

  increaseTemp() {
    if (this.isMaxTemp()) {
      return;
    }

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

  isMaxTemp() {
    return this._temperature === this._SAVING_MAX_TEMP;
  }

  powerSavingOn() {
    true;
  }
}
