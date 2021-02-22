const Calculation = require('./models/Calculation')
const Sum = require('./Operations/Sum');
const Subtract = require('./Operations/Subtract');
const Multiply = require('./Operations/Multiply');
const Divide = require('./Operations/Divide');
const Squared = require('./Operations/Squared');
const SquareRoot = require('./Operations/SquareRoot');
class Calculator extends Calculation{
    static Calculations = [];
    static addCalculation(calculation){
        Calculator.Calculations.push(calculation);
    }
    static getLastCalculation(){
        return this.Calculations[this.Calculations.length-1];
    }
    static Sum(a,b) {
        let calculation = Calculation.Create(a,b,Sum);
        this.addCalculation(calculation);
        return calculation;
    }
    static Subtract(a,b) {
        let calculation = Calculation.Create(a,b,Subtract);
        this.addCalculation(calculation);
        return calculation;
    }
    static Multiply(a,b) {
        let calculation = Calculation.Create(a,b,Multiply);
        this.addCalculation(calculation);
        return calculation;
    }
    static Divide(a,b) {
        let calculation = Calculation.Create(a,b,Divide);
        this.addCalculation(calculation);
        return calculation;
    }
    static Squared(a,b) {
        let calculation = Calculation.Create(a,b,Squared);
        this.addCalculation(calculation);
        return calculation;
    }
    static SquareRoot(a,b) {
        let calculation = Calculation.Create(a,b,SquareRoot);
        this.addCalculation(calculation);
        return calculation;
    }
    static clearList(){
        this.Calculations = [];
    }
}
module.exports = Calculator;