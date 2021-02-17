const Calculation = require('./models/Calculation')
const Sum = require('./Operations/Sum');
const Subtract = require('./Operations/Subtract');
const Multiply = require('./Operations/Multiply');
const Divide = require('./Operations/Divide');
class Calculator{
    //static methods can be called without instatiating and are good for actions
    static Sum(a, b){
        //this is how you create a new object and this is good for data
        return new Calculation(a, b, Sum);
    }
    static Difference(a, b){
        //this is how you create a new object and this is good for data
        return new Calculation(a, b, Subtract);
    }
    static Multiply(a, b){
        //this is how you create a new object and this is good for data
        return new Calculation(a, b, Multiply);
    }

    static Divide(a, b){
        //this is how you create a new object and this is good for data
        return new Calculation(a, b, Divide);
    }

}


module.exports = Calculator;