'use strict';

const coinPix = require('./data.json')

coinPix.allTokens = () => {
    return coinPix
}

coinPix.getToken = (symbol) => {
    return coinPix[symbol]
}

module.exports = coinPix;