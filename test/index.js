import test from 'ava'

let coins = require('../src/data.json')

test('all coins is obj', t => {
    t.is(typeof coins, 'object')
})

test('length of object is 300', t => {
	t.is(Object.keys(coins).length, 300);
});