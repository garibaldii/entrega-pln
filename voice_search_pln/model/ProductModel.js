const products = [
    { id: "1", name: "notebook dell" },
    { id: "2", name: "notebook apple" },
    { id: "3", name: "notebook lenovo" },
    { id: "4", name: "notebook acer" },
    { id: "5", name: "notebook samsung" },
    { id: "6", name: "mouse logitech" },
    { id: "7", name: "teclado mecânico redragon" },
    { id: "8", name: "monitor lg 24 polegadas" },
    { id: "9", name: "headset hyperx cloud" },
    { id: "10", name: "cadeira gamer dxracer" }
]

function search(term) {
    return products.find(p => p.name.includes(term))
}

module.exports = { search }