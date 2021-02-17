const Calculator = require('../src/Calculator');


test('Calculator Adding two numbers', () => {

    let calculation = Calculator.Sum(1, 2);
    //expect is used to test if the results are correct
    expect(calculation.a).toBe(1);
    expect(calculation.b).toBe(2);
    expect(calculation.GetResults()).toBe( 3);
});

test('Calculator Subtracting two numbers', () => {

    let calculation = Calculator.Difference(2, 1);
    //expect is used to test if the results are correct
    expect(calculation.a).toBe(2);
    expect(calculation.b).toBe(1);
    expect(calculation.GetResults()).toBe( 1);
});

test('Calculator Multiply Two Number', () => {

    let calculation = Calculator.Multiply(2, 3);
    //expect is used to test if the results are correct
    expect(calculation.a).toBe(2);
    expect(calculation.b).toBe(3);
    expect(calculation.GetResults()).toBe( 6);
});

test('Calculator Divide Two Number', () => {

    let calculation = Calculator.Divide(10, 2);
    //expect is used to test if the results are correct
    expect(calculation.a).toBe(10);
    expect(calculation.b).toBe(2);
    expect(calculation.GetResults()).toBe( 5);
});

test('Calculator Find Square Root', () => {

    let calculation = Calculator.SquareRoot(9, 1);
    //expect is used to test if the results are correct
    expect(calculation.a).toBe(9);
    expect(calculation.b).toBe(1);
    expect(calculation.GetResults()).toBe( 3);
});

test('Calculator Square a Number(x^2)', () => {

    let calculation = Calculator.Squared(2, 1);
    //expect is used to test if the results are correct
    expect(calculation.a).toBe(2);
    expect(calculation.b).toBe(1);
    expect(calculation.GetResults()).toBe( 4);
});