const array = ["book", "game", "pen", "grey", "red", "blue", "apple"] 

const chainOfMetods = array.filter(arr => arr.includes("e")).sort((a, b) => a.localeCompare(b)).map(arr => arr.toUpperCase())
console.log(chainOfMetods)