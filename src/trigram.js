'use strict';
const fs = require('fs')
// 1. Download english words file here:
// http://www-01.sil.org/linguistics/wordlists/english/wordlist/wordsEn.txt
// 2. Run grep
// cat wordsEn.txt | grep -E '\w{3,}' > words-final.txt
const words = fs.readFileSync('words-final.txt', 'utf8')
let trigrams = {}

// chops up a word into `gram` length characters, returns array of these strings
let chopup = function(word, gram=3) {
  if (!Number.isInteger(gram)) {
    throw new Error("second parameter must be a number")
  }
  if (word.length < gram) { return [] }
  let result = []
  let i = 0;
  // console.log("word: ", word)
  while (i <= (word.length - gram)) {
    result.push(word.slice(i, i + gram).toLowerCase())
    i++
  }
  return result
}

// [0, 1, 2, 3, 4].reduce(function(previousValue, currentValue, index, array) {
//   return previousValue + currentValue;
// });

words.split(/\r?\n/).forEach((word) => {
  let grab = chopup(word)

  grab.forEach((g) => {
    let ft = g.substr(0, 2), gt = g[2]
    if (!trigrams[ft]) {
      trigrams[ft] = {}
    }
    if (!trigrams[ft][gt]) {
      trigrams[ft][gt] = 0
    }
    trigrams[ft][gt]++
  })
})

fs.writeFileSync("trigrams.json", JSON.stringify(trigrams))
