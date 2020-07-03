export async function getConversionAPI(currencyToConv) {
  try {
    const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${currencyToConv}`);
    console.log(response);
    let jsonifiedResponse;
    if (!response.ok && response.status != 200) {
      jsonifiedResponse = false;
    } else {
      jsonifiedResponse = await response.json();
    }
    console.log(jsonifiedResponse)
    return jsonifiedResponse;
  } catch(error) {
    return false;
  }

}