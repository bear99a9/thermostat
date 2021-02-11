'use strict';

class Thermostat {
  constructor() {
    this._DEFAULT_TEMP = 20;
    this._temperature = this._DEFAULT_TEMP;
    this._MIN_TEMP = 10;
    this._MAX_TEMP = 32;
    this._SAVING_MAX_TEMP = 25;
    this._powerSavingMode = true;
    this._MEDIUM_ENERGY_USAGE = 18;
    this._HIGH_ENERGY_USAGE = 25;
  }

  currentTemp() {
    return this._temperature;
  }

  up() {
    if (this.isMaxTemp()) {
      return;
    }

    ++this._temperature;
  }

  down() {
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
    this.reset();
  }

  reset() {
    this._temperature = this._DEFAULT_TEMP;
  }

  energyUsage() {
    if (this._temperature < this._MEDIUM_ENERGY_USAGE) {
      return 'Low';
    }

    if (this._temperature  <= this._HIGH_ENERGY_USAGE) {
      return 'Medium';
    }

    return 'High';
  }
}
