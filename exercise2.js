function addCurrency(coin, value, db) {
  const coinIdx = db.findIndex((el) => el.coin === coin.coin);
  const capitalCoin = coin.coin.charAt(0).toUpperCase() + coin.coin.slice(1);

  if (coinIdx === -1) {
    db.push({ coin: coin.coin, rate: coin.rate });
    return `New coin ${capitalCoin} added to Database`;
  }

  return findCurrency(db[coinIdx], value);
}

function findCurrency(coin, value) {
  return converter(coin.coin, coin.rate, value);
}

function converter(name, rate, value) {
  const amount = rate * value;
  return tellConversion(name, amount);
}

function tellConversion(name, amount) {
  const capitalCoin = name.charAt(0).toUpperCase() + name.slice(1);

  return amount > 1
    ? `You will receive ${amount} usd for your 2 ${capitalCoin}s`
    : `You will receive ${amount} usd for your 2 ${capitalCoin}`;
}

module.exports = {
  addCurrency,
  findCurrency,
  converter,
  tellConversion,
};
