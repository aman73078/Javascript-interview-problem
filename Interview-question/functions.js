/*
🔥 1. Basic Concept Questions
What is a function in JavaScript?
Ans. A function is a reusable block of code designed to perform a specific task.

Why do we use functions?

What are the types of functions?
Ans. 🧠 Types of Functions in JavaScript

JavaScript functions can be classified in a few important ways. In interviews, they usually expect both syntax types and behavior types.

🔥 1. Function Declaration

👉 Traditional way of defining functions

function add(a, b) {
  return a + b;
}
✔️ Features:
Hoisted (can be called before definition)
Has its own this
🔥 2. Function Expression

👉 Function stored in a variable

const add = function(a, b) {
  return a + b;
};
✔️ Features:
Not hoisted (cannot call before definition)
More flexible
⚡ 3. Arrow Function (ES6)
const add = (a, b) => a + b;
✔️ Features:
Short syntax
No own this
No arguments object
Common in modern JS
🔥 4. Anonymous Function

👉 Function without a name

setTimeout(function () {
  console.log("Hello");
}, 1000);
🔥 5. Named Function Expression
const fact = function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
};
🔥 6. Immediately Invoked Function Expression (IIFE)

👉 Runs immediately after creation

(function () {
  console.log("Runs immediately");
})();
🔥 7. Higher-Order Function

👉 Function that:

takes another function as argument
OR returns a function
function greet(fn) {
  fn();
}
🔥 8. Callback Function

👉 Function passed into another function

setTimeout(() => {
  console.log("Callback");
}, 1000);


Difference between function declaration and function expression?
Ans. 🔥 1. Function Declaration
function add(a, b) {
  return a + b;
}
✅ Key features:
Hoisted completely
Can be called before definition
Has a name
console.log(add(2, 3)); // ✅ Works
🔥 2. Function Expression
const add = function(a, b) {
  return a + b;
};
❌ Key features:
Not hoisted like declarations
Cannot be used before definition
Stored in a variable
console.log(add(2, 3)); // ❌ Error (if called before definition)


What is the syntax of a function?
🔹 2. Function Types Questions
What is a named function?
What is an anonymous function?
An anonymous function is a function without a name.

🔥 Basic example
const greet = function() {
  console.log("Hello");
};

👉 Here:

function has no name
stored in variable greet
⚡ Why use anonymous functions?

They are commonly used when:

function is used only once
passed as an argument
used in callbacks
📌 Example (callback)
setTimeout(function() {
  console.log("Hello after 1 second");
}, 1000);


What is an arrow function?
Difference between arrow function and normal function?
🔥 Comparison with normal function
Feature	Normal Function	Arrow Function
Syntax	longer	shorter
this	dynamic	lexical (inherited)
arguments	available	not available
Constructor	✅ yes	❌ no



What is an IIFE (Immediately Invoked Function Expression)?
🔥 3. Parameters & Arguments
Difference between parameters and arguments?
What are default parameters?
What are rest parameters (...args)?
What happens if arguments are missing?
function sum(a = 10, b = 20) {
  return a + b;
}
🔥 4. Return Value Questions
What is return in function?
What happens if return is missing?
Can a function return multiple values?
Can a function return another function?
🔥 5. Scope & Function Questions
What is function scope?
What is block scope vs function scope?
What is lexical scope?
What is global scope?
🔥 6. Hoisting Questions (VERY IMPORTANT)
What is function hoisting?
Are function declarations hoisted?
Are function expressions hoisted?
What happens if you call function before declaration?
🔥 7. Arrow Function Questions
Why were arrow functions introduced?
Do arrow functions have their own this?
Can arrow functions be used as constructors?
Difference between function and =>
🔥 8. this in Functions (Very Important)
What is this in normal function?
What is this in arrow function?


How does this behave in object methods?
👉 In an object method, this refers to the object that is calling the method.

🔥 Basic example
const user = {
  name: "Aman",
  greet: function () {
    console.log(this.name);
  }
};

user.greet(); // Aman

👉 Here:

user is calling greet()
so this → user
⚡ Key rule

👉 this = object before the dot

object.method()
📌 Example with multiple objects
const user1 = {
  name: "Aman",
  greet: function () {
    console.log(this.name);
  }
};

const user2 = {
  name: "Rahul"
};

user2.greet = user1.greet;

user2.greet(); // Rahul

👉 this depends on caller, not where function was defined

⚠️ Common mistake (losing this)
const user = {
  name: "Aman",
  greet: function () {
    console.log(this.name);
  }
};

const fn = user.greet;
fn(); // ❌ undefined (or window in non-strict)

👉 Function is called without object
👉 this is lost

🔥 Fix using bind
const fn = user.greet.bind(user);
fn(); // Aman
⚡ Arrow function inside method
const user = {
  name: "Aman",
  greet: function () {
    const inner = () => {
      console.log(this.name);
    };
    inner();
  }
};

user.greet(); // Aman

👉 Arrow function:

does NOT have its own this
inherits from greet
🚫 Arrow function as method (wrong usage)
const user = {
  name: "Aman",
  greet: () => {
    console.log(this.name);
  }
};

user.greet(); // ❌ undefined

👉 Arrow function:

this comes from outer scope (not object)


How does this behave in strict mode?
🔥 9. Higher Order Functions
What is a higher-order function?
What is a callback function?
Why do we use callbacks?
Examples: map, filter, reduce
🔥 10. Function Output Questions (Tricky)
function test() {
  return;
  console.log("Hello");
}
console.log(test());
function add(a, b) {
  return a + b;
}
console.log(add(2));
🔥 11. Function Expression vs Declaration
Difference between:
function a() {}
const a = function() {}
Which is hoisted?
Which is safer?
🔥 12. Advanced Questions
What is closure?
What is currying?
What is function composition?
What is recursion?
Stack overflow in recursion?
🔥 13. Recursive Function Questions
What is recursion?
Base case importance?
Factorial using recursion
Fibonacci using recursion
🔥 14. Real Interview Coding Questions
Reverse a string using function
Check palindrome
Factorial
Fibonacci series
Find max in array
Count vowels in string
Debounce function
Throttle function
🔥 15. Edge Case Questions
What happens if no return?
Can function run without name?
Can function be stored in variable?
Can function be passed as argument?
🔥 16. Memory & Execution Questions


How function execution works in call stack?
👉 JavaScript uses a Call Stack to manage function execution.
It follows LIFO (Last In, First Out) — the last function added is executed first.

🔥 What is Call Stack?

👉 A stack data structure where:

functions are pushed when called
functions are popped when finished
📌 Example
function one() {
  two();
}

function two() {
  three();
}

function three() {
  console.log("Hello");
}

one();
⚡ Step-by-step execution
1️⃣ Start
Call Stack: []
2️⃣ Call one()
Call Stack: [one]
3️⃣ Inside one() → call two()
Call Stack: [one, two]
4️⃣ Inside two() → call three()
Call Stack: [one, two, three]
5️⃣ Execute three()
Print: Hello

Then remove it:

Call Stack: [one, two]
6️⃣ two() finishes
Call Stack: [one]
7️⃣ one() finishes
Call Stack: []
🧠 Key idea

👉 Execution always happens:

top → bottom (last called runs first)
💣 Important concept: Stack Overflow
function f() {
  f();
}
f();

👉 Infinite calls → stack keeps growing → crash

Maximum call stack size exceeded
⚡ Why call stack matters
tracks function execution order
manages scope & execution context
important for debugging errors


What is execution context?
👉 An execution context is the environment in which JavaScript code runs.
It contains everything needed to execute code:

variables
functions
scope
value of this


What is function lifecycle?
🔄 Lifecycle Flow
1. Created (stored in memory)
2. Called (execution context created)
3. Executed (code runs)
4. Returned (value given back)
5. Destroyed (removed from stack)

What is memory allocation for functions?
🔥 17. Callback & Async Questions
What is callback hell?
🧠 What is Callback Hell?

👉 Callback hell is a situation in JavaScript where callbacks are nested inside other callbacks, making code:

hard to read 😵
hard to maintain
hard to debug
🔥 Example of callback hell
getUser(function(user) {
  getOrders(user.id, function(orders) {
    getOrderDetails(orders[0], function(details) {
      getPayment(details, function(payment) {
        console.log(payment);
      });
    });
  });
});

👉 This deep nesting is called:

"Pyramid of Doom"


What are promises vs callbacks?
🔥 1. Callbacks

👉 A callback is a function passed as an argument to another function and executed later.

function fetchData(callback) {
  setTimeout(() => {
    callback("Data received");
  }, 1000);
}

fetchData((data) => {
  console.log(data);
});
❌ Problems with callbacks
Callback hell (deep nesting)
Hard error handling
Less readable
🔥 2. Promises

👉 A Promise is an object representing the future result of an async operation.

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data received");
    }, 1000);
  });
}

fetchData()
  .then(data => console.log(data))
  .catch(err => console.error(err));
⚡ Promise states
Pending
Fulfilled (success)
Rejected (error)
🧠 Key Differences
Feature	Callbacks	Promises
Structure	nested	chained
Readability	❌ poor	✅ better
Error handling	❌ difficult	✅ easier (catch)
Composition	❌ hard	✅ easy (then)
Control	inversion of control	better control


Can functions be asynchronous?
What is event loop?
🔥 18. Common Mistakes Questions
Forgetting return statement
Misusing arrow functions
Confusing parameters vs arguments
Incorrect this usage
🔥 19. Output-Based Tricky Questions
function a() {
  console.log(this);
}
a();
const a = () => {
  console.log(this);
};
a();
function test(x) {
  return x * x;
}
console.log(test());
🔥 20. Interview Deep Questions
Why functions are first-class citizens?
Can functions have properties?
Difference between function and method?
Can we override functions?


🧠 Deep Copy vs Shallow Copy

👉 Both are ways to copy objects/arrays, but they behave very differently with nested data.

🔥 1. Shallow Copy

👉 A shallow copy copies only the top-level values
👉 Nested objects are still shared (same reference)

📌 Example
const original = {
  name: "Aman",
  address: { city: "Bangalore" }
};

const copy = { ...original };

copy.address.city = "Delhi";

console.log(original.address.city); // ❗ Delhi

👉 Why?

address is same reference in both objects
⚡ Ways to create shallow copy
Object.assign({}, obj);
{ ...obj }
array.slice()
[...array]
🔥 2. Deep Copy

👉 A deep copy copies everything recursively
👉 No shared references

📌 Example
const original = {
  name: "Aman",
  address: { city: "Bangalore" }
};

const copy = JSON.parse(JSON.stringify(original));

copy.address.city = "Delhi";

console.log(original.address.city); // ✅ Bangalore

👉 Now:

address is a new object
changes don’t affect original
⚡ Modern way (better)
const copy = structuredClone(original);

👉 Handles deep cloning safely (most cases)

🧠 Key difference
Feature	Shallow Copy	Deep Copy
Nested objects	shared	fully copied
Memory	less	more
Speed	faster	slower
Safety	❌ risky	✅ safe
💣 Real problem
const a = [{ x: 1 }];
const b = [...a];

b[0].x = 99;

console.log(a[0].x); // ❗ 99

👉 Common bug in interviews






*/


