const MathOperations = require('./Operations/MathOperations');
const Calculation = require('./models/Calculation')
class Calculator{
    static Sum(a, b){
        let calculation = new Calculation(a, b, "sum");
        return calculation;
    }

}


module.exports = Calculator;