/* This file is the webpack entry point */
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Age } from './age.js';
import $ from 'jquery';

/* Business Logic */
let age;

/* User Interface */
$(document).ready(function(){
  
  $('form').submit(function(e){
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
      $('#results').append(`Results for age '${age.earthYears}' in Earth years and average life expectancy of '${age.avgLifeExpectancy}':`);
      $('#results').append(`<br><br>`);
      $('#results').append(`Age in Earth Years: ${age.earthYears}`);
      $('#results').append(`<br>`);
      $('#results').append(`Age in Mercury Years: ${age.mercuryYears}`);
      $('#results').append(`<br>`);
      $('#results').append(`Age in Venus Years: ${age.venusYears}`);
      $('#results').append(`<br>`);
      $('#results').append(`Age in Mars Years: ${age.marsYears}`);
      $('#results').append(`<br>`);
      $('#results').append(`Age in Jupiter Years: ${age.jupiterYears}`);
      $('#results').append(`<br><br>`);
      if (age.earthYearsBeyondLifeExpectancy) {
        $('#results').append(`Earth Years Beyond Life Expectancy: ${age.earthYearsBeyondLifeExpectancy}`);
        $('#results').append(`<br>`);
        $('#results').append(`Mercury Years Beyond Life Expectancy: ${age.calculateMercuryYears(age.earthYearsBeyondLifeExpectancy)}`);
        $('#results').append(`<br>`);
        $('#results').append(`Venus Years Beyond Life Expectancy: ${age.calculateVenusYears(age.earthYearsBeyondLifeExpectancy)}`);
        $('#results').append(`<br>`);
        $('#results').append(`Mars Years Beyond Life Expectancy: ${age.calculateMarsYears(age.earthYearsBeyondLifeExpectancy)}`);
        $('#results').append(`<br>`);
        $('#results').append(`Jupiter Years Beyond Life Expectancy: ${age.calculateJupiterYears(age.earthYearsBeyondLifeExpectancy)}`);
      }
      else {
        $('#results').append(`Expected Earth Years Remaining: ${age.earthYearsLeft}`);
        $('#results').append(`<br>`);
        $('#results').append(`Expected Mercury Years Remaining: ${age.mercuryYearsLeft}`);
        $('#results').append(`<br>`);
        $('#results').append(`Expected Venus Years Remaining: ${age.venusYearsLeft}`);
        $('#results').append(`<br>`);
        $('#results').append(`Expected Mars Years Remaining: ${age.marsYearsLeft}`);
        $('#results').append(`<br>`);
        $('#results').append(`Expected Jupiter Years Remaining: ${age.jupiterYearsLeft}`);
      }
    }
    e.preventDefault();
  });

});