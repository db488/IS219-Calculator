const Calculator = require('../src/Calculator');


test('Calculator Adding two numbers', () => {

    //let calculation = Calculator.Sum(1, 2);
    //expect is used to test if the results are correct
    //expect(calculation.a).toBe(1);
    //expect(calculation.b).toBe(2);
    //expect(calculation.op).toBe("Sum");
    //expect(calculation.GetResults()).toBe( 3);
});

test('Calculator Adding two numbers', () => {

    let result = Calculator.Sum(1, 2);
    expect(result).toBe(3);
});
test('Calculator Subtracting two numbers', () => {

    let result = Calculator.Difference(1, 2);
    expect(result).toBe(-1);
});
test('Calculator Multiplying two numbers', () => {

    let result = Calculator.Product(1, 2);
    expect(result).toBe(2);
});
test('Calculator Dividing two numbers', () => {

    let result = Calculator.Quotient(1, 2);
    expect(result).toBe(.5);
});

test('Calculator adding to Calculations[]', () => {

    let result = Calculator.Quotient(1, 2);
    let calculations = Calculator.Calculations
   calculations.forEach(function (calculation){
        console.log(calculation);

    });
    expect(result).toBe(.5);
});



