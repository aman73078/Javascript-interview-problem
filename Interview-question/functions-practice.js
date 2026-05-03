// 🔥 50 MCQs on Functions
// 1.

// What is a function?
// A) Variable
// B) Block of reusable code
// C) Loop

// 2.

// Which keyword declares a function?
// A) func
// B) function
// C) def

// 3.

// Output?

// function a(){ return 5; }
// console.log(a());

// A) 5
// B) undefined
// C) error

// 4.

// Output?

// function a(){ console.log(5); }
// console.log(a());

// A) 5
// B) undefined
// C) error

// 5.

// Function without return gives?
// A) null
// B) undefined
// C) 0

// 6.

// What is function expression?
// A) Named function
// B) Function stored in variable
// C) Loop

// 7.

// Which is function expression?
// A)

// function a(){}

// B)

// const a = function(){}
// 8.

// Are function declarations hoisted?
// A) Yes
// B) No

// 9.

// Are function expressions hoisted?
// A) Yes
// B) No

// 10.

// Output?

// console.log(a());
// function a(){ return 10; }

// A) 10
// B) undefined
// C) error

// 11.

// Output?

// console.log(a());
// var a = function(){ return 10; }

// A) 10
// B) undefined
// C) error

// 12.

// What is arrow function?
// A) ES6 function syntax
// B) Loop
// C) Object

// 13.

// Arrow function syntax?
// A) =>
// B) ->
// C) :=

// 14.

// Arrow functions have their own this?
// A) Yes
// B) No

// 15.

// Output?

// const a = () => 5;
// console.log(a());

// A) 5
// B) undefined

// 16.

// Can arrow function be constructor?
// A) Yes
// B) No

// 17.

// What is callback?
// A) Function passed as argument
// B) Loop
// C) Object

// 18.

// What is higher-order function?
// A) Function returning function
// B) Function taking function
// C) Both

// 19.

// What is IIFE?
// A) Immediately invoked function
// B) Loop
// C) Class

// 20.

// Syntax of IIFE?
// A)

// (function(){})()

// B)

// function()()
// 21.

// Output?

// (function(){ console.log("Hi") })();

// A) Hi
// B) undefined

// 22.

// Default parameter?

// function a(x=5){ return x; }

// Output?
// A) 5
// B) undefined

// 23.

// Output?

// function a(x=5){ return x; }
// console.log(a(10));

// A) 5
// B) 10

// 24.

// Rest parameter syntax?
// A) ...args
// B) args[]

// 25.

// Output?

// function a(...x){ return x.length; }
// console.log(a(1,2,3));

// A) 2
// B) 3

// 26.

// Can function return function?
// A) Yes
// B) No

// 27.

// What is closure?
// A) Function with access to outer scope
// B) Loop
// C) Object

// 28.

// Output?

// function a(){
//  let x=10;
//  return function(){ return x; }
// }
// console.log(a()());

// A) 10
// B) undefined

// 29.

// What is recursion?
// A) Function calling itself
// B) Loop
// C) Object

// 30.

// Output?

// function f(n){
//  if(n===0) return 1;
//  return n*f(n-1);
// }
// console.log(f(3));

// A) 6
// B) 3
// C) 1

// 31.

// What is lexical scope?
// A) Scope defined by location
// B) Runtime scope
// C) Loop scope

// 32.

// Output?

// let x=10;
// function a(){ console.log(x); }
// a();

// A) 10
// B) undefined

// 33.

// What is this in global function?
// A) window (non-strict)
// B) undefined

// 34.

// What is this in arrow function?
// A) Own
// B) Inherited

// 35.

// Output?

// function a(){ return; console.log("Hi"); }
// console.log(a());

// A) undefined
// B) Hi

// 36.

// Can function have properties?
// A) Yes
// B) No

// 37.

// Output?

// function a(){}
// a.x=10;
// console.log(a.x);

// A) 10
// B) undefined

// 38.

// What is first-class function?
// A) Function treated as value
// B) Loop
// C) Object

// 39.

// Output?

// function a(b){ return b(); }
// function c(){ return 5; }
// console.log(a(c));

// A) 5
// B) undefined

// 40.

// What is method?
// A) Function inside object
// B) Loop
// C) Variable

// 41.

// Output?

// const obj={
//  x:10,
//  f:function(){ return this.x; }
// }
// console.log(obj.f());

// A) 10
// B) undefined

// 42.

// Output?

// const obj={
//  x:10,
//  f:()=>this.x
// }
// console.log(obj.f());

// A) 10
// B) undefined

// 43.

// Can functions be stored in variables?
// A) Yes
// B) No

// 44.

// Can functions be passed as arguments?
// A) Yes
// B) No

// 45.

// Output?

// function a(x){ return x*x; }
// console.log(a());

// A) NaN
// B) undefined

// 46.

// What is currying?
// A) Function returning function
// B) Loop
// C) Object

// 47.

// What is call stack?
// A) Function execution stack
// B) Loop
// C) Memory

// 48.

// Can function be anonymous?
// A) Yes
// B) No

// 49.

// What is function scope?
// A) Variables inside function
// B) Global variables

// 50.

// What happens without return?
// A) undefined
// B) null

// ✅ Answer Key
// 1-B 2-B 3-A 4-B 5-B
// 6-B 7-B 8-A 9-B 10-A
// 11-C 12-A 13-A 14-B 15-A
// 16-B 17-A 18-C 19-A 20-A
// 21-A 22-A 23-B 24-A 25-B
// 26-A 27-A 28-A 29-A 30-A
// 31-A 32-A 33-A 34-B 35-A
// 36-A 37-A 38-A 39-A 40-A
// 41-A 42-B 43-A 44-A 45-A
// 46-A 47-A 48-A 49-A 50-A
// 🧠 Pro Tip

// Focus heavily on:

// this behavior
// closures
// hoisting
// arrow vs normal function

// These are top interview traps 🔥