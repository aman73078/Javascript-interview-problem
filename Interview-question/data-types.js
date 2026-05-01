// 🧠 1. Basic Data Types Questions (Foundation)
// 📌 Conceptual
/*
// What are data types in JavaScript?
In JavaScript, data types define the kind of value a variable can hold.

JavaScript is dynamically typed, so a variable can hold different types at different times.

🔹 Types of Data Types

JavaScript has 2 main categories:

1. 🔥 Primitive Data Types

These are basic, immutable values:

✔ List:
Number → 10, 3.14
String → "Hello"
Boolean → true, false
Undefined → variable declared but not assigned
Null → intentional empty value
BigInt → large integers
Symbol → unique identifiers

👉 Example:

let a = 10;        // Number
let b = "Hello";   // String
let c = true;      // Boolean
let d;             // Undefined
let e = null;      // Null
2. 🔹 Non-Primitive (Reference) Data Types

These store references (memory addresses):

✔ Types:
Object
Array
Function

👉 Example:

let obj = { name: "Aman" };
let arr = [1, 2, 3];
function greet() { return "Hi"; }


// Difference between primitive and non-primitive
In JavaScript, the main difference between primitive and non-primitive data types is how they store and handle data.

🔥 Key Differences
Feature	Primitive Data Types	Non-Primitive Data Types
Stored as	Value	Reference (address)
Mutability	❌ Immutable	✅ Mutable
Copy behavior	Creates independent copy	Copies reference
Comparison	By value	By reference
Examples	Number, String, Boolean, etc.	Object, Array, Function
🔹 Example 1: Primitive (Copy by Value)
let a = 10;
let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20

✔ Changing b does NOT affect a

🔹 Example 2: Non-Primitive (Copy by Reference)
let obj1 = { name: "Aman" };
let obj2 = obj1;

obj2.name = "Rahul";

console.log(obj1.name); // Rahul
console.log(obj2.name); // Rahul

✔ Both point to same memory → change affects both

🔥 Mutability Difference
let str = "Hello";
str[0] = "h";  // ❌ no effect
console.log(str); // Hello
let arr = [1, 2, 3];
arr[0] = 99;  // ✅ changes
console.log(arr); // [99, 2, 3]
🔹 Comparison Example
console.log(10 === 10); // true
console.log([1,2] === [1,2]); // false

✔ Arrays/objects compare by reference


// Is JavaScript statically or dynamically typed?
JavaScript is a dynamically typed language.

🔹 What does that mean?
You don’t declare the data type of a variable explicitly
The type is determined at runtime
A variable can change its type during execution
let x = 10;        // number
x = "Hello";       // now string
x = true;          // now boolean


// What is typeof operator?
In JavaScript, the typeof operator is used to determine the data type of a given value or variable.
typeof 10           // "number"
typeof "Hello"      // "string"
typeof true         // "boolean"
typeof undefined    // "undefined"
typeof null         // "object" ❗ (historical bug)
typeof []           // "object"
typeof {}           // "object"
typeof function(){} // "function"

typeof x; // "undefined" (no error)


2. Primitive Data Types (VERY IMPORTANT)

What is null?
What is undefined?
Difference between null and undefined ⭐
What is NaN?
What is BigInt?
What is Symbol and why used?

typeof "hello"     // "string"
typeof 123         // "number"
typeof true        // "boolean"
typeof undefined   // "undefined"
typeof null        // "object"   ⚠️
typeof NaN         // "number"   ⚠️
typeof []          // "object"
typeof {}          // "object"


4. Non-Primitive (Reference Types)

Questions
What are reference types?
Examples: object, array, function
Difference between object & array


Q. Are functions objects?
Yes, functions in JavaScript are objects.

🔹 Why?
Functions are a special type of object
They can:
Have properties
Have methods
Be passed as arguments
Be returned from other functions
🔹 Example
function greet() {
  console.log("Hello");
}

greet.age = 25;

console.log(greet.age); // 25

✔ Functions can store properties → like objects

🔹 typeof Check
typeof function(){} // "function"

👉 Special case:

typeof returns "function"
But internally → functions are objects
🔹 Proof (Advanced)
function test() {}

console.log(test instanceof Object); // true

✔ Confirms functions are objects

*/
