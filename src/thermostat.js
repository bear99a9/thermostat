'use strict';

class Thermostat {
  constructor() {
    this._temperature = 20;
    this._MIN_TEMP = 10;
    this._SAVING_MAX_TEMP = 25;
    this._MAX_TEMP = 32;
    this._powerSavingMode = true;
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
    if (this._powerSavingMode) {
      return this._temperature === this._SAVING_MAX_TEMP;
    }

    return this._temperature === this._MAX_TEMP;

  }

  powerSavingOff() {
    this._powerSavingMode = false;
  }

  powerSavingOn() {
    this._powerSavingMode = true;
    this._temperature = 20;
  }
}
