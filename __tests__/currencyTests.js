import {getCurrencyRate} from './../src/main.js'

describe('API call', () => {
  test('should return a conversion rate from US Dollars to UK Pounds', () => {
    let USDtoGBP = getCurrencyRate("USD", "GBP");
    expect(USDtoGBP).toBe(0.8004);
  })
})