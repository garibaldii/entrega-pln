const products = [
    { id: "1", name: "notebook dell" },
    { id: "2", name: "notebook apple" }
]

function search(term) {


    return products.find(p => p.name.includes(term))
}

module.exports = { search }