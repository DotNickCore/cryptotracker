export const GetCoinListByCurrencyCode = async (currencyCode: string) => {
    return `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currencyCode}&order=market_cap_desc&per_page=10&page=1&sparkline=false`;
}

export const GetCoinByCoinID = async (coinCode: string) => {
    return `https://api.coingecko.com/api/v3/coins/${coinCode}`;
}

export const GetCoinHistory = async (coinCode: string, historyDate: string) => {
    return `https://api.coingecko.com/api/v3/coins/${coinCode}/history?date=${historyDate}`;
}