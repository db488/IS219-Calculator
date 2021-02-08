const Calculation = require('../src/models/calculation');

const Sum = require('../src/Operations/Sum');
const Difference = require('../src/Operations/Difference');
const Product = require('../src/Operations/Product');
const Quotient = require('../src/Operations/Quotient');

test('Calculate Object Creation', () => {

    let op = Sum;
    let calculation = new Calculation(1,2,op);
    expect(calculation.a).toBe(1);
    expect(calculation.b).toBe(2);
    expect(calculation.op).toBe(op);
});

test('Test Get Results for Sum function', () => {

    let op = Sum;
    let calculation = new Calculation(1,2,op);
    expect(calculation.GetResults()).toBe(3);
});

test('Test Get Results for Difference function', () => {

    let op = Difference;
    let calculation = new Calculation(2,1,op);
    expect(calculation.GetResults()).toBe(1);
});

test('Test Get Results for Product function', () => {

    let op = Product;
    let calculation = new Calculation(2,3,op);
    expect(calculation.GetResults()).toBe(6);
});

test('Test Get Results for Quotient function', () => {

    let op = Quotient;
    let calculation = new Calculation(10,2,op);
    expect(calculation.GetResults()).toBe(5);
});



