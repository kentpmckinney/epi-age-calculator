export class Age {

  constructor(earthYears) {
    this.earthYears = earthYears;
    this.mercuryYears = this.calculateMercuryYears(earthYears);
    this.venusYears = this.calculateVenusYears(earthYears);
    
    this.jupiterYears = this.calculateJupiterYears(earthYears);
  }

  calculateMercuryYears(earthYears) {
    return parseFloat((earthYears/.24).toFixed(2));
  }

  calculateVenusYears(earthYears) {
    return parseFloat((earthYears/.62).toFixed(2));
  }
  


  calculateJupiterYears(earthYears) {
    return parseFloat((earthYears/11.86 ).toFixed(2));
  }


  
}