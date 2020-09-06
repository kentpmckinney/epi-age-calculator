/*
  This file is the webpack entry point
*/

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Age } from './age.js';
import $ from 'jquery';
import './style.css';

/*
  Business Logic
*/

let age;

/*
  User Interface
*/

$(document).ready(function () {

  $('form').submit(function (e) {
    e.preventDefault();
    let earthYears = parseInt($('#age-earth-years').val());
    let avgLifeExpectancy = parseInt($('#avg-life-expectancy').val());
    age = new Age(earthYears);
    age.avgLifeExpectancy = avgLifeExpectancy;
    $('#results').empty();
    if (!age.earthYears) {
      $('#results').append(`Please enter a valid age!`);
    }
    else if (!age.avgLifeExpectancy) {
      $('#results').append(`Please enter a valid average life expectancy!`);
    }
    else {
      $('#results').append(`Results for age '${age.earthYears}' in Earth years and average life expectancy of '${age.avgLifeExpectancy}':`).append(`<br><br>`);
      $('#results').append(`Age in Earth Years: ${age.earthYears}`).append(`<br>`);
      $('#results').append(`Age in Mercury Years: ${age.mercuryYears}`).append(`<br>`);
      $('#results').append(`Age in Venus Years: ${age.venusYears}`).append(`<br>`);
      $('#results').append(`Age in Mars Years: ${age.marsYears}`).append(`<br>`);
      $('#results').append(`Age in Jupiter Years: ${age.jupiterYears}`).append(`<br><br>`);
      if (age.earthYearsBeyondLifeExpectancy) {
        $('#results').append(`Earth Years Beyond Life Expectancy: ${age.earthYearsBeyondLifeExpectancy}`).append(`<br>`);
        $('#results').append(`Mercury Years Beyond Life Expectancy: ${age.calculateMercuryYears(age.earthYearsBeyondLifeExpectancy)}`).append(`<br>`);
        $('#results').append(`Venus Years Beyond Life Expectancy: ${age.calculateVenusYears(age.earthYearsBeyondLifeExpectancy)}`).append(`<br>`);
        $('#results').append(`Mars Years Beyond Life Expectancy: ${age.calculateMarsYears(age.earthYearsBeyondLifeExpectancy)}`).append(`<br>`);
        $('#results').append(`Jupiter Years Beyond Life Expectancy: ${age.calculateJupiterYears(age.earthYearsBeyondLifeExpectancy)}`).append(`<br>`);
      }
      else {
        $('#results').append(`Expected Earth Years Remaining: ${age.earthYearsLeft}`).append(`<br>`);
        $('#results').append(`Expected Mercury Years Remaining: ${age.mercuryYearsLeft}`).append(`<br>`);
        $('#results').append(`Expected Venus Years Remaining: ${age.venusYearsLeft}`).append(`<br>`);
        $('#results').append(`Expected Mars Years Remaining: ${age.marsYearsLeft}`).append(`<br>`);
        $('#results').append(`Expected Jupiter Years Remaining: ${age.jupiterYearsLeft}`).append(`<br>`);
      }
    }
  });

});