const Calculation = require('../src/models/calculation');


test('Calculate Object Creation', () => {

    let calculation = new Calculation(1,2,"Sum");
    expect(calculation.a).toBe(1);
    expect(calculation.b).toBe(2);
    expect(calculation.op).toBe("Sum");
});

