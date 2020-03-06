import { Age } from './age.js';
import $ from 'jquery';

let age = new Age();
console.log(age.earthYears)

$(document).ready(function(){
  
  $('form').submit(function(e){
    e.preventDefault();
  })

});
