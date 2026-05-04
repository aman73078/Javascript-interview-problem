/*
Basic Arithmetic Questions (Foundation)
📌 Simple Operations
What are arithmetic operators in JavaScript?
List all arithmetic operators

What is operator precedence?
Ans. Operator precedence decides which operation runs first when multiple operators are present.

From higher → lower:
() → Parentheses
++, --
*, /, %
+, -
==, ===

Tricky Example
let a = 5;
console.log(a++ + ++a);

👉 Step-by-step:

a++ → 5 (then becomes 6)
++a → 7
👉 Output:
12

What is associativity?


10 + 5
10 - 5
10 * 5
10 / 5
10 % 3


2. Increment / Decrement (VERY IMPORTANT)
📌 Questions
Difference between ++a and a++
Pre vs Post increment

let a = 5;
console.log(a++); // ?
console.log(a);   // ?


Which runs first?
Why result differs?
2 + 3 * 4
(2 + 3) * 4
10 - 5 + 2

Type Coercion with Math Operators
"5" + 2
"5" - 2
"5" * 2
"5" / 2

true + 1
false + 1
null + 1
undefined + 1


Unary Operators
+true
+false
+"123"
+"abc"
What does unary + do?


*/