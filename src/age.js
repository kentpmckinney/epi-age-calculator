export class Age {

  constructor(earthYears) {
    this.earthYears = earthYears;
    this.earthYearsLeft;
    this.mercuryYears = this.calculateMercuryYears(earthYears);
    this.mercuryYearsLeft;
    this.venusYears = this.calculateVenusYears(earthYears);
    this.marsYears = this.calculateMarsYears(earthYears);
    this.jupiterYears = this.calculateJupiterYears(earthYears);
    this._avgLifeExpectancy;
  }

  calculateEarthYearsLeft() {
    return parseFloat((this._avgLifeExpectancy-this.earthYears).toFixed(2));
  }

  calculateMercuryYears(earthYears) {
    return parseFloat((earthYears/.24).toFixed(2));
  }

  calculateMercuryYearsLeft() {
    return parseFloat((this.calculateMercuryYears(this._avgLifeExpectancy)-this.mercuryYears).toFixed(2));
  }

  calculateVenusYears(earthYears) {
    return parseFloat((earthYears/.62).toFixed(2));
  }
  
  calculateVenusYearsLeft() {
    return parseFloat((this.calculateVenusYears(this._avgLifeExpectancy)-this.venusYears).toFixed(2));
  }

  calculateMarsYears(earthYears) {
    return parseFloat((earthYears/1.88).toFixed(2));
  }

  calculateMarsYearsLeft() {
    return parseFloat((this.calculateMarsYears(this._avgLifeExpectancy)-this.marsYears).toFixed(2));
  }

  calculateJupiterYears(earthYears) {
    return parseFloat((earthYears/11.86 ).toFixed(2));
  }

  calculateJupiterYearsLeft() {
    return parseFloat((this.calculateJupiterYears(this._avgLifeExpectancy)-this.jupiterYears).toFixed(2));
  }

  set avgLifeExpectancy(earthYears) {
    this._avgLifeExpectancy = earthYears;
    this.earthYearsLeft = this.calculateEarthYearsLeft();
    this.mercuryYearsLeft = this.calculateMercuryYearsLeft();
    this.venusYearsLeft = this.calculateVenusYearsLeft();
    this.marsYearsLeft = this.calculateMarsYearsLeft();
    this.jupiterYearsLeft = this.calculateJupiterYearsLeft();
  }

  get avgLifeExpectancy() {
    return this._avgLifeExpectancy;
  }
  
  

}