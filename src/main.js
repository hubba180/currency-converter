import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { getConversionAPI } from './services.js';
import { calculateNewAmount} from './currency.js';

async function getConversion(currencyToConv, currencyToMatch, amount) {
  if (amount < 0 || !currencyToConv || !currencyToMatch) {
    if (amount < 0) {
      $("#error").val("");
      $("#display").text("");
      $("#error").text("Oops! You must enter an integer greater than zero!");
    }
    if (!currencyToMatch && !currencyToConv) {
      $("#error").val("");
      $("#display").text("");
      $("#error").text("Oops! You must enter a currency to convert to and from!");
    } else if (!currencyToMatch) {
      $("#error").text("");
      $("#display").text("");
      $("#error").text("Oops! You must enter a currency to convert to!");
    } else if (!currencyToConv) {
      $("#error").text("");
      $("#display").text("");
      $("#error").text("Oops! You must enter a currency to convert from!");
    }
  } else {
    let response = await getConversionAPI(currencyToConv);
    if (response === false) {
      $("#display").val("");
      $("#error").text("WARNING: it seems an error has occured!");
    } else {
      const conversionRate = response.conversion_rates[currencyToMatch];
      $("#display").val("");
      $("#error").text("");
      $("#display").text(`Conversion: ${calculateNewAmount(conversionRate, amount)} ${currencyToMatch}`);
    }
  }
}

$(document).ready(function() {

  $("#input").submit(function() {
    event.preventDefault();
    const currencyToConv = $("#currency-to-conv").val();
    const currencyToMatch = $("#currency-to-match").val();
    const moneyInput = $("#convert-amount").val();
    getConversion(currencyToConv, currencyToMatch, moneyInput);
    $("#result").slideDown();
  });
});