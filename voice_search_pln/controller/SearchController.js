const model = require("../model/ProductModel")
const nlp = require("../services/PlnService")

function search(req, res) {
    const text = req.query.q

    if (!text) {
        return res.status(400).json({ error: "O parâmetro de busca 'q' é obrigatório." });
    }

    const tokens = nlp.processText(text)

    const term = tokens.join(" ")

    const results = model.search(term)

    res.json({
        original: text,
        tokens: tokens,
        results: results
    })
}

module.exports = { search }