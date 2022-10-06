export function formatedCoinDetails(coinData: any) {
  return {
    name: coinData?.name,
    symbol: coinData?.symbol,
    hashingAlgorithm: coinData?.hashing_algorithm,
    description: coinData?.description?.en,
    marketCapEur: coinData?.market_data?.market_cap?.eur,
    homepage: coinData?.links?.homepage?.[0],
    genesisDate: coinData?.genesis_date,
  };
}
