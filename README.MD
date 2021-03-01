[![Coverage Status](https://coveralls.io/repos/github/db488/IS219-Calculator/badge.svg)](https://coveralls.io/github/db488/IS219-Calculator)
[![Build Status](https://travis-ci.com/db488/IS219-Calculator.svg?branch=master)](https://travis-ci.com/db488/IS219-Calculator)

Step 1: Clone Repo\
Step 2: Run 'npm install'


FINALLY GOT TravisCI & Coveralls connected!!!

<h2>S.O.L.I.D</h2>

<b>S : Single Responsibility Principle</b><br>
Here we want to make sure that each function has a single job.  
```
function Sum(a, b){
    return a+b;
}
```
In the Sum() example above, it simply adds two numbers together and then returns the sum.  This is keeping the function from doing more than its sole purpose. 

<b>O : Open-Closed Principle</b><br>
This can be summed up by being able to modify variables and placeholders within different files without actually having to open the file.
```
class Calculator extends Calculation{
    static Calculations = [];
    static addCalculation(calculation){
        Calculator.Calculations.push(calculation);
    }...}
```
Here in Calculator.js we are able to add past calculations into this array without having to open the file to push these calculations.  This is very helpful since in the future it can be used to extend possible additions where needed.

<b>L : Liskov Substitution Principle</b><br>
Still using Sum, with the two different files, both in completely different locations within the project, calling either one will still result in the project compiling.
```
Calculator.js's Sum()
static Sum(a,b) {
        let calculation = Calculation.Create(a,b,Sum);
        this.addCalculation(calculation);
        return calculation;
    }
```
```
Sum.js
function Sum(a, b){
    return a+b;
}
```
The superclass can be replaced with objects of its subclass. This is what I understand the Liskov principle to be.  The subclass, Sum.js has less restrictive rules, but functions the same way that Calculator.js would.   

[Coffee Example](https://stackify.com/solid-design-liskov-substitution-principle/)

<b>I : Interface Segregation Principle</b><br>
This can be described as splitting your software into different independent parts. Adding to that, you want to make sure that you are not leaving unused code throughout your program. Let's look at Sum.js once more:
```
function Sum(a, b){
    return a+b;
}
module.exports = Sum;
```
Each line should have a purpose. Within the /src/Operations directory, each operation is split into it's own file.  From here, each file does one job, as quickly and efficiently  as possible.  The function takes in it's two operands  and adds them together.  It passes it up to wherever it was called, and thats it.  Nothing fancy or overwhelming. 

<b>D : Dependency Inversion Principle</b><br>
Both high and low level modules should depend on abstractions and those should not depend on details. This meaning that everything should be able to be reused and unaffected by changes in the lower end of hierarchy. 
```
let calculation = Calculation.Create(a,b,Sum);
```
While keeping everything described above, the Calculation.Create simply needs the two operands, and the instructions on what to do with them. This can be reused and all the operations  does not change how this function is called, or what it does with them.

<br>
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
<br>
<h2>OOP Design Patterns:</h2><br>
<b>Creational Patterns  -   Factory Method</b><br>
The factory method replaces direct object creation with a factory method.  So, instead of using one file such as "calculate" that might do every operation all within one file it would use a subclass to do said calculation. Looking at Calculator.js,
```
static Sum(a,b) {
        let calculation = Calculation.Create(a,b,Sum);
        this.addCalculation(calculation);
        return calculation;
    }
```
This creates a new Calculation, specific for the Sum of the two passed numbers.  

<b>Structural Patterns  -   ?</b><br>
<b>Behavioral Patterns  -   Chain of Responsibility</b><br>


