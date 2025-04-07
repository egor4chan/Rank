async function getTonPrice() {
	const response = await fetch('https://api.coingecko.com/api/v3/coins/the-open-network');
	const data = await response.json();
	return data.market_data.current_price.usd;
}

var TON;

getTonPrice().then(tonPrice => {
	console.log(tonPrice)
    TON = tonPrice;
});