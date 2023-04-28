const { fromDollarToYen,fromEuroToDollar,fromYenToPound,sum  } = require('./app.js');

// start your first test


// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("one euro should be 127.9 yen", ()=>{
    const result = fromDollarToYen(3)
    expect(result).toBe(460.44)
})

test("one euro should be 0.8 pound", () =>{
    const result = fromYenToPound(36)
    expect(result).toBe(36*127.9*0.8)
})
