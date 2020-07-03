import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { getConversionAPI } from './services.js';
import { calculateNewAmount} from './currency.js'

async function getConversion(currencyToConv, currencyToMatch, amount) {
  if (amount > 0) {
    let response = await getConversionAPI(currencyToConv);
    if (response === false) {
      $("#error").text("I'm sorry, it seems an error has occured!");
    } else {
      const conversionRate = response.conversion_rates[currencyToMatch];
      $("#error").text("")
      $("#display").text(`Conversion: ${calculateNewAmount(conversionRate, amount)} ${currencyToMatch}`);
    }
  } else {
    $("#error").text("You must enter a positive integer!")
  }
}

$(document).ready(function() {

  $("#input").submit(function() {
    event.preventDefault();
    const currencyToConv = $("#currency-to-conv").val();
    const currencyToMatch = $("#currency-to-match").val();
    const moneyInput = $("#convert-amount").val();
    getConversion(currencyToConv, currencyToMatch, moneyInput);
    $("#output").fadeIn();
  });
});