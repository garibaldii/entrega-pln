const natural = require("natural")
const sw = require("stopword")

const tokenizer = new natural.WordTokenizer()

function processText(text){

    text = text.toLowerCase()

    let tokens = tokenizer.tokenize(text)

    tokens = sw.removeStopwords(tokens)

    return tokens;
}

module.exports = {processText}