const Sum = require('../src/Operations/Sum');
const Difference = require('./Operations/Difference');
const Product = require('./Operations/Product');
const Quotient = require('./Operations/Quotient');
const Calculation = require('./models/Calculation');



class Calculator{

    static Calculations = []
    //static methods can be called without instatiating and are good for actions
    static Sum(a, b){
        //this is how you create a new object and this is good for data
        let calculation = new Calculation(a, b, Sum);
        this.Calculations.push(Calculation);
        return calculation.GetResults();
    }
    static Difference(a, b){
        //this is how you create a new object and this is good for data
        let calculation = new Calculation(a, b, Difference);
        this.Calculations.push(Calculation);
        return calculation.GetResults();
    }
    static Product(a, b){
        //this is how you create a new object and this is good for data
        let calculation = new Calculation(a, b, Product);
        this.Calculations.push(Calculation);
        return calculation.GetResults();
    }

    static Quotient(a, b){
        //this is how you create a new object and this is good for data
        let calculation = new Calculation(a, b, Quotient);
        this.Calculations.push(Calculation);
        return calculation.GetResults();
    }

}


module.exports = Calculator;