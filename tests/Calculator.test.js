const Calculator = require('../src/Calculator');


test('Calculator Adding two numbers', () => {

    let calculation = Calculator.Sum(1, 2);

    expect(calculation.a).toBe(1);
    expect(calculation.b).toBe(2);
    expect(calculation.op).toBe("Sum");
    expect(calculation.GetResults()).toBe( 3);
});

