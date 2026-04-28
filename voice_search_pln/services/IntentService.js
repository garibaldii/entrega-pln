function detectIntent(tokens){
    if(tokens.includes("lists"))
        return "list"

    if(tokens.includes("busc") || tokens.includes("compr"))
        return "search"

    return "unknow"
}

module.exports = {detectIntent}