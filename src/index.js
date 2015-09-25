'use strict';

const trigrams = require('../trigrams.json')
const pickByWeight = require('pick-one-by-weight')
let word = 'aa'
let start = 0
let result = ''

module.exports = function generateEnglishWord() {
  while (result !== 'z') {
    let biword = word.substr(start, 2)
    result = pickByWeight(trigrams[biword])
    word += result
    start++
  }
}
