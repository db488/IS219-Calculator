[![Coverage Status](https://coveralls.io/repos/github/db488/IS219-Calculator/badge.svg)](https://coveralls.io/github/db488/IS219-Calculator)
[![Build Status](https://travis-ci.com/db488/IS219-Calculator.svg?branch=master)](https://travis-ci.com/db488/IS219-Calculator)

Step 1: Clone Repo\
Step 2: Run 'npm install'


FINALLY GOT TravisCI & Coveralls connected!!!

S.O.L.I.D

<b>S : Single Responsibility Principle</b>
Here we want to make sure that each function has a single job.  
```
function Sum(a, b){
    return a+b;
}
```
In the Sum() example above, it simply adds two numbers together and then returns the sum.  This is keeping the function from doing more than its sole purpose. 

<b>O : Open-Closed Principle</b>
This can be summed up by being able to modify variables and placeholders within different files without actually having to open the file.
```
class Calculator extends Calculation{
    static Calculations = [];
    static addCalculation(calculation){
        Calculator.Calculations.push(calculation);
    }...}
```
Here in Calculator.js we are able to add past calculations into this array without having to open the file to push these calculations.  This is very helpful since in the future it can be used to extend possible additions where needed.

<b>L : Liskov Substitution Principle</b>
```
Some example here
```
Explaination
[Extra Coffee Example](https://stackify.com/solid-design-liskov-substitution-principle/)

<b>I : Interface Segregation Principle</b>
```
Some example here
```
Explaination

<b>D : Dependency Inversion Principle</b>
```
Some example here
```
Explaination

