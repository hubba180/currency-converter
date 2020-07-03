import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { getConversionAPI } from './services.js';

async function getConversionRate(currencyToConv, currencyToMatch) {
  let response = await getConversionAPI(currencyToConv);
  if (response === false) {
    return false;
  } else {
    $("#display").text(response.conversion_rates[currencyToMatch]);
  }
}

$(document).ready(function() {

  $("#input").submit(function() {
    event.preventDefault();
    const currencyToConv = $("#currency-to-conv").val();
    const currencyToMatch = $("#currency-to-match").val();

    getConversionRate(currencyToConv, currencyToMatch);
  });
});