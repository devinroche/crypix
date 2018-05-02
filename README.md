# crypix

> comprehensive list of cryptocurrencies with image urls.

Gathered image urls through coinmarketcap for top 300 cryptos. Can be used as a JSON file or npm library.

## install
```
npm i crypix --save
```

## usage
```
const crypix = require('crypix')

let coins = crypix.allTokens()

// all coins in package
{ 
    UTK: 'https://s2.coinmarketcap.com/static/img/coins/16x16/2320.png',
    AMB: 'https://s2.coinmarketcap.com/static/img/coins/16x16/2081.png',
    XBY: 'https://s2.coinmarketcap.com/static/img/coins/16x16/1636.png',
    ...
}

let coin = crypix.getToken('ETH")

// image url for ethereum
"https://s2.coinmarketcap.com/static/img/coins/16x16/1027.png"
```