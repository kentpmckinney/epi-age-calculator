export class Age {

  constructor(earthYears) {
    this.earthYears = earthYears;
    this.mercuryYears = this.calculateMercuryYears(earthYears);
  }

  calculateMercuryYears(earthYears) {
    return earthYears/.24;
  }

}