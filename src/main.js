/* This file is the webpack entry point */
import { Age } from './age.js';
import $ from 'jquery';

/* Business Logic */
let age;

/* User Interface */
$(document).ready(function(){
  
  $('form').submit(function(e){
    let earthYears = $('#age-earth-years').val();
    let avgLifeExpectancy = $('#avg-life-expectancy').val();
    age = new Age(earthYears);
    age.avgLifeExpectancy = avgLifeExpectancy;
    $('#results').empty();
    $('#results').append(`Results for age ${age.earthYears} in Earth years and average life expectancy of ${age.avgLifeExpectancy}:<br>`);
    $('#results').append(`Age in Earth Years: ${age.earthYears}`);
    e.preventDefault();
  })

});

// this.earthYears = earthYears;
//     this.earthYearsLeft;
//     this.mercuryYears = this.calculateMercuryYears(earthYears);
//     this.mercuryYearsLeft;
//     this.venusYears = this.calculateVenusYears(earthYears);
//     this.venusYearsLeft;
//     this.marsYears = this.calculateMarsYears(earthYears);
//     this.marsYearsLeft;
//     this.jupiterYears = this.calculateJupiterYears(earthYears);
//     this.jupiterYearsLeft;
//     this._avgLifeExpectancy;
//     this.earthYearsBeyondLifeExpectancy;