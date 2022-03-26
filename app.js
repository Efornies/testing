// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum };

// this is my function that convert from dollar/euro/yann to each currency


let oneEuroIs  = {
    "JPY": 127.9, 
    "USD": 1.2, 
    "GBP": 0.8, 
}

const fromDollarToYen = (dollar) => {
    return (dollar / oneEuroIs['USD']) * oneEuroIs['JPY']
}

const fromEuroToDollar = (euro) => {
    return euro * oneEuroIs['USD']
}

const fromYanToPound = (yen) => {
    return (yen / oneEuroIs['JPY']) * oneEuroIs['GBP']
}



// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum, fromEuroToDollar }