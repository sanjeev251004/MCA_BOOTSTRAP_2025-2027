const prices = [15.99, 29.5, 7.25];

const formattedPrices = prices.map(price => {
  return '$' + price.toFixed(2); 
});

console.log(formattedPrices);
