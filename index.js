'use strict';

const coinPix = require('./data.json')

coinPix.allTokens = () => {
    let coins = coinPix
    
    delete coins.allTokens
    delete coins.getToken

    return coins
}

coinPix.getToken = (symbol) => {
    return coinPix[symbol]
}

module.exports = coinPix;