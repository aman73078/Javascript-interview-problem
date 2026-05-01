// 🟢 1. Basic Variable Questions (Very Common)
// What is a variable in JavaScript?
/*
Ans. In JavaScript, a variable is a container used to store data values that can be used and modified later in your program.

let name = "Aman";
let age = 22;

console.log(name); // Aman
console.log(age);  // 22


// How do you declare a variable?
In JavaScript, you declare a variable using the keywords var, let, or const followed by a variable name.
var name = "Aman";
let age = 22;
const pi = 3.14;

let x;      // declaration
x = 10;     // initialization

// Difference between var, let, and const
1. Scope (Functional vs. Block)
var: Is function-scoped. If declared inside a function, it's available anywhere in that function. If declared outside, it becomes a property of the global object (window in browsers).

let & const: Are block-scoped. They exist only within the nearest pair of curly braces {} (e.g., if blocks, for loops, or functions).

Interview Tip: Mention that var ignores block boundaries, which often leads to bugs in loops where the iterator variable "leaks" out or is shared across asynchronous callbacks.

2. The Temporal Dead Zone (TDZ) & Hoisting
This is the most common "Moderate/Hard" follow-up question.

Hoisting with var: The declaration is hoisted to the top of its scope and initialized with undefined. You can access it before the line of code where it is defined without a crash.

Hoisting with let/const: These are also hoisted, but they are not initialized. They enter the Temporal Dead Zone (TDZ) from the start of the block until the code execution reaches the declaration. Accessing them early results in a ReferenceError.

3. Reassignment vs. Immutability
var & let: Allow reassignment.

const: Does not allow reassignment.

Crucial Distinction: const creates a constant reference, not a constant value. You can mutate the properties of a const object or the elements of a const array. To make an object truly immutable, you would need Object.freeze().


// Can you declare a variable without initialization?
Ans. Yes, in JavaScript you can declare a variable without initialization, but it depends on the keyword used.

With var and let, you can declare without assigning a value:
let a;
var b;

console.log(a); // undefined
console.log(b); // undefined

With const, you must initialize at the time of declaration:
const c; // ❌ SyntaxError


// What happens if you don’t use let/var/const?
Ans. In JavaScript, if you assign a value to a variable without using let, var, or const, JavaScript automatically creates a global variable (in non-strict mode).

x = 10; 
console.log(x); // 10


// What are valid variable naming rules?
Variable names in JavaScript must start with a letter, _, or $, cannot begin with a number, must not use reserved keywords, and are case-sensitive.

// Are JavaScript variables dynamically typed?
Yes, variables in JavaScript are dynamically typed.

👉 This means:

You don’t need to specify a data type when declaring a variable
The type is determined at runtime
A variable can change its type during execution

// 🟡 2. var vs let vs const (MOST IMPORTANT)
// 📌 Conceptual
// Difference between var, let, const
// Which one is block-scoped?
// Which one is hoisted?
// Can const be reassigned?
// Can const object be modified? (tricky)

What is hoisting?
How var, let, const behave in hoisting?
What is Temporal Dead Zone (TDZ)?
if (true) {
    var a = 10;
}
console.log(a); // ?

if (true) {
    let a = 10;
}
console.log(a); // ?


What is variable shadowing?
let a = 10;
{
    let a = 20;
    console.log(a); // ?
}
console.log(a); // ?

var a = 10;
{
    let a = 20;
    console.log(a)
}
console.log(a)

let x = 10;

function demo() {
  let x = 20; // shadows outer x
  console.log(x);
}

demo();        // 20
console.log(x); // 10

const arr = [1,2,3];
arr.push(4); // ?

const obj = {};
obj = { name: "Aman" }; // ?


Illegal shadowing?
let x = 10;

{
  var x = 20; // ❌ SyntaxError
}

👉 Why error?

let x is block-scoped
var x is function/global-scoped
var tries to redeclare x in the same scope → conflict
🔹 Another Example
const a = 5;

function test() {
  var a = 10; // ❌ illegal shadowing
}

👉 var tries to override a const from outer scope → not allowed

✅ Valid (Legal Shadowing)
let x = 10;

{
  let x = 20; // ✅ allowed
  console.log(x); // 20
}

console.log(x); // 10

✔ Same keyword (let) + different block → OK

🔍 Key Rule
let & const → block-scoped
var → function-scoped
You cannot mix var with let/const in a conflicting way


Reality (Important)
Instead of chasing “all questions,” focus on mastering:

✅ 5 Core Pillars
Scope
Hoisting
Closures
this
Memory (primitive vs reference)

👉 If you understand these deeply, you can solve any variable question.

*/