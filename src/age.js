export class Age {

  constructor(earthYears) {
    this.earthYears = earthYears;
    this.mercuryYears = this.calculateMercuryYears(earthYears);
    this.venusYears = this.calculateVenusYears(earthYears);
  }

  calculateMercuryYears(earthYears) {
    return parseFloat((earthYears/.24).toFixed(2));
  }

  calculateVenusYears(earthYears) {
    return parseFloat((earthYears/.62).toFixed(2));
  }
  
}