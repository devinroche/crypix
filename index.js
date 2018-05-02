'use strict';

const coins = require('./data.json')

coinPix.allTokens = () => {
    return coins
}

coinPix.getToken = (symbol) => {
    return coinPix[symbol]
}

module.exports = coinPix;