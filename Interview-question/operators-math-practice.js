10 + 5
10 - 5
10 * 5
10 / 5
10 % 3

let a = 5;
console.log(a++); // ?
console.log(a);   // ?

let a = 5;
console.log(++a); // ?

let a = 5;
let b = a++ + ++a;
console.log(b); // ?

2 + 3 * 4
(2 + 3) * 4
10 - 5 + 2

console.log([] + 1)

console.log([1] + 1)
console.log([1,2] + 1)
console.log({} + 1)

// Unary Operators
+true
+false
+"123"
+"abc"


// NaN Based Questions
"abc" - 2
0 / 0
Math.sqrt(-1)

// 8. Combined Tricky Questions
let a = "10";
let b = 5;

console.log(a + b); // ?
console.log(a - b); // ?

let x = 10;
console.log(x++ + ++x);

let a = 1;
let b = 2;
let c = a++ + b++ + ++a + ++b;
console.log(c);

Infinity + 1
Infinity - Infinity
1 / 0
-1 / 0

// 10. Real Interview Questions
// Why "5" + 2 is "52" but "5" - 2 is 3?
// Explain difference between unary + and binary +
// What is % operator behavior with negative numbers?
// What is NaN and how to check it?


// 20 TRICKY OPERATOR OUTPUT QUESTIONS

// 1.
console.log(2 + "2");

// 👉 "22"
// ➡️ + does string concatenation

// 2.
console.log(2 - "2");

// 👉 0
// ➡️ - converts to number

// 3.
console.log("5" * "2");

// 👉 10

// 4.
console.log("5" + "2");

// 👉 "52"

// 5.
console.log(true + true);

// 👉 2

// 6.
console.log(true + false);

// 👉 1

// 7.
console.log(10 + true);

// 👉 11

// 8.
console.log(10 + false);

// 👉 10

// 9.
console.log(10 + null);

// 👉 10
// ➡️ null → 0

// 10.
console.log(10 + undefined);

// 👉 NaN

// 11.
console.log([] + 1);

// 👉 "1"
// ➡️ [] → ""

// 12.
console.log([1] + 1);

// 👉 "11"

// 13.
console.log([1,2] + 1);

// 👉 "1,21"

// 14.
console.log({} + 1);

// 👉 1
// ➡️ {} treated as block → +1

// 15.
console.log(1 + {});

// 👉 "1[object Object]"

// 16.
let a = 5;
console.log(a++ + ++a);

// 👉 12
// ➡️ 5 + 7

// 17.
let a = 5;
console.log(++a + a++);

// 👉 12
// ➡️ 6 + 6

// 18.
console.log(2 ** 3);

// 👉 8
// ➡️ exponent operator

// 19.
console.log(10 % 3);

// 👉 1

// 20.
console.log(0.1 + 0.2 === 0.3);

// 👉 false
// ➡️ floating point precision issue

// 🎯 Key Patterns You MUST Remember
// + → string concat if any operand is string
// - * / % → always number
// true → 1, false → 0
// null → 0, undefined → NaN
// Arrays → string ([1,2] → "1,2")
// {} behaves differently depending on position


// LEVEL 2 – HARD COERCION QUESTIONS

// 1.
console.log([] + {} + []);

// 👉 "[object Object]"
// ➡️ [] → "", {} → "[object Object]"

// 2.
console.log({} + [] + {});

// 👉 "[object Object][object Object]" (in many environments)
// ➡️ parsing depends, but often treated as expression

// 3.
console.log([] == ![]);

// 👉 true
// ➡️ you already saw this: [] → "" → 0, false → 0

// 4.
console.log(![] + []);

// 👉 "false"
// ➡️ ![] → false, then string concat

// 5.
console.log([] + ![]);

// 👉 "false"

// 6.
console.log(+[] + +[]);

// 👉 0
// ➡️ unary + converts both to 0

// 7.
console.log(+[] + {});

// 👉 "0[object Object]"

// 8.
console.log([] + {} - []);

// 👉 NaN
// ➡️ "[object Object]" - "" → NaN

// 9.
console.log(true + [] + false);

// 👉 "truefalse"

// 10.
console.log(true + [] + false + true);

// 👉 "truefalsetrue"

// 11.
console.log([] + {} + 1);

// 👉 "[object Object]1"

// 12.
console.log({} + [] + 1);

// 👉 "1" or "[object Object]1" (depends on parsing)

// 13.
console.log(!!"false" == !!"true");

// 👉 true
// ➡️ both are truthy → true == true

// 14.
console.log("b" + "a" + +"a" + "a");

// 👉 "baNaNa" 🍌
// ➡️ "a" → NaN

// 15.
console.log(+true + "10");

// 👉 "110"

// 16.
console.log("10" - - "10");

// 👉 20

// 17.
console.log(null + undefined);

// 👉 NaN

// 18.
console.log([] == 0);

// 👉 true

// 19.
console.log([0] == 0);

// 👉 true

// 20.
console.log([1] == true);

// 👉 true
// ➡️ [1] → "1" → 1, true → 1

// 🧠 What You MUST Understand (Core Logic)

// Every question follows this pipeline:

// 🔁 Step-by-step thinking:
// Operator type (+, -, ==)
// Convert object → primitive
// Convert to number or string
// Apply operation