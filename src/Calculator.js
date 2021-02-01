const MathOperations = require('./Operations/MathOperations');
const Calculation = require('./models/Calculation')
class Calculator{
    //static methods can be called without instatiating and are good for actions
    static Sum(a, b){
        //this is how you create a new object and this is good for data
        return new Calculation(a, b, "Sum");
    }

}


module.exports = Calculator;