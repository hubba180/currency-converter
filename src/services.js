export async function getConversionAPI(currencyToConv) {
  try {
    const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${currencyToConv}`);
    let jsonifiedResponse;
    if (!response.ok && response.status != 200) {
      jsonifiedResponse = false;
    } else {
      jsonifiedResponse = await response.json();
    }
    return jsonifiedResponse;
  } catch(error) {
    console.log(error);
    return false;
  }

}