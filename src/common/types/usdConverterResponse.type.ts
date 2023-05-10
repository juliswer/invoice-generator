type currency = {
  value_avg: number
  value_sell: number
  value_buy: number
}

export type usdConverterResponse = {
  blue: currency
  blue_euro: currency
  last_update: string
  oficial: currency
  oficial_uro: currency
}
