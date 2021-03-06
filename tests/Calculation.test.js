const Calculation = require('../src/models/Calculation');
const Sum = require('../src/Operations/Sum');


test('Calculate Object Creation', () => {

    let calculation = new Calculation(1,2,"Sum");
    expect(calculation.a).toBe(1);
    expect(calculation.b).toBe(2);
    expect(calculation.op).toBe("Sum");
});

test('Test Get Results function', () => {

    let calculation = new Calculation(1,2,Sum);
    expect(calculation.GetResults()).toBe(3);
});

