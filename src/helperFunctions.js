exports.parseRates = function (rawRatesData) {
  let parsedRates = [];
  for (let symbol in rawRatesData.bpi) {
    let currencyData = { ...rawRatesData.bpi[symbol] };
    delete currencyData.rate;
    delete currencyData.description;
    parsedRates.push(currencyData);
  }
  return parsedRates;
};

exports.formatNumber = function (value, currency) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(
    value
  );
};
