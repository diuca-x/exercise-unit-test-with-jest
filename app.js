
const sum = (a,b) => {
    return a + b
}





let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}



const fromDollarToYen = (dollar_ammount) => {
    let to_euro = dollar_ammount * oneEuroIs.USD;
    let to_yen = to_euro * oneEuroIs.JPY
    return to_yen
     
}

const fromEuroToDollar = (euro_ammount) =>{
    return euro_ammount * oneEuroIs.USD
}

const fromYenToPound = (yen_ammount) => {
    let to_euro = yen_ammount * oneEuroIs.JPY;
    let to_pound = to_euro * oneEuroIs.GBP
    return to_pound
}


module.exports = { fromDollarToYen,fromEuroToDollar,fromYenToPound,sum  };