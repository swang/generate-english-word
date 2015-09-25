'use strict';

const tap = require('tap')
const test = tap.test
const generateEnglishWord = require('../index.js')

test('make sure generateEnglishWord is not null', (t) => {
  t.notEqual(generateEnglishWord, null, "generateEnglishWord is null")
  t.end()
})
