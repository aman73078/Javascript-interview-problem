/*
🔥 1. Basic Comparison Questions
What are comparison operators in JavaScript?
Difference between == and ===?
Difference between != and !==?
What does > < >= <= do?
What is the return type of comparison operators?
Are comparisons case-sensitive for strings?
Ans. Yes—string comparisons in JavaScript are case-sensitive.
👉 Uppercase and lowercase letters are treated as different characters.
console.log("hello" === "Hello");
JavaScript compares strings based on Unicode values:

"A" ≠ "a"
"Z" < "a" (because of Unicode order) 

⚡ More Examples
console.log("apple" > "Banana"); 

👉 true
➡️ lowercase letters have higher Unicode value than uppercase

console.log("abc" === "ABC");

👉 false

🔥 2. Type Coercion in Comparisons
What is type coercion in ==?
Ans. Type coercion in == means JavaScript automatically converts (coerces) the operands to a common type before comparing them.
📌 Example
console.log(5 == "5");

👉 Output:

true

➡️ "5" (string) is converted to 5 (number)

🔥 Common Coercion Rules in ==
1. Number ↔ String
"10" == 10   // true

➡️ string → number

2. Boolean → Number
true == 1    // true
false == 0   // true
3. null and undefined
null == undefined  // true

➡️ special case

4. Object → Primitive
[] == 0   // true

➡️ [] → "" → 0

💣 Tricky Example
[] == false

👉 Steps:

false → 0
[] → "" → 0
0 == 0

👉 Result: true

⚠️ Important
0 == false   // true
0 === false  // false

👉 === does no coercion

How does JavaScript compare different data types?
Ans. JavaScript compares different data types using type coercion rules, mainly when you use the loose equality operator ==.

When does JavaScript convert string → number?
Why does "5" == 5 return true?
Why does "5" === 5 return false?

3. Tricky Output-Based Questions (VERY IMPORTANT)
"5" == 5
"5" === 5
null == undefined
null === undefined
0 == false
0 === false
"" == false
"" === false
[] == false
[] == 0
[1] == 1
[1,2] == "1,2"
true == 1
true === 1

🔥 4. Special Cases (Must Know)
Why is null == undefined → true?
Why is NaN == NaN → false?

How to check for NaN properly?
Number.isNaN(NaN);        // true
Number.isNaN("abc");      // false
Number.isNaN(123);        // false

isNaN("abc");   // true ❌
isNaN("123");   // false

Why does [] == false return true?

Why does {} behave differently in comparisons?
Ans. Because {} is ambiguous in JavaScript—it can be treated either as an object literal or as an empty block statement, depending on where and how it appears.

🧠 Core Idea

👉 JavaScript first parses {} based on context, then applies type coercion if needed.

🔥 Case 1: {} at the start → treated as a block
{} + []

👉 Interpreted as:

{} → empty block (ignored)
+[] → +"" → 0

👉 Output:

0
🔥 Case 2: {} inside expression → treated as object
[] + {}

👉 Steps:

[] → ""
{} → "[object Object]"
"" + "[object Object]"

👉 Output:

"[object Object]"
💣 Case 3: Mixed
{} + {}

👉 Often:

First {} → block
Second {} → object → "[object Object]"

👉 Result:

NaN

➡️ because it becomes +{} → NaN

⚡ Why This Happens
1. JavaScript Parsing Rules
At start → {} = block
In expression → {} = object


🔥 5. Object & Array Comparisons
Why does:
[] == []        // false
{} == {}        // false

How are objects compared in JavaScript?
Ans. In JavaScript, objects are compared by reference, not by value.
When you compare objects, JavaScript checks whether they point to the same memory location, not whether their contents are equal.

let a = { x: 1 };
let b = { x: 1 };

console.log(a === b); // false


What is reference comparison?
Ans. Reference comparison in JavaScript means comparing whether two variables point to the same object in memory, not whether their contents are equal.

let a = { x: 1 };
let b = { x: 1 };

console.log(a === b); // false

let a = { x: 1 };
let b = a;

console.log(a === b); // true
[1,2] === [1,2]   // false

Difference between value comparison vs reference comparison?

🔥 6. String Comparisons
How are strings compared internally?
What is lexicographical comparison?
Ans. Lexicographical comparison means comparing values (usually strings) character by character based on their Unicode (ASCII) values, just like words are ordered in a dictionary.
console.log("apple" < "banana");  // true
console.log("cat" < "car");  // false
console.log("Z" < "a");   // true

Why:
"2" > "12"  // true
"2" vs "1" → "2" is greater
"2" > "a"   // false
"2" > "A"   // false
"a" > "A"   // true


🔥 7. Boolean Conversion in Comparisons
How does true/false behave in comparisons?
Why:
true == 1
false == 0

🔥 8. Relational Operator Edge Cases
null > 0
null == 0
null >= 0
undefined > 0
undefined == 0

👉 Very common interview traps

🔥 9. Strict vs Loose Equality Deep Dive
When should you use ===?
Why is == considered dangerous?
Are there cases where == is useful?

🔥 10. Internal Working (Advanced)
What is ToPrimitive conversion?
How objects are converted during comparison?
What is valueOf() and toString() role?
Comparison algorithm in JavaScript?

🔥 11. Practical Coding Questions
Write a function to compare two values safely
Check if two arrays are equal
Compare two objects deeply
Sort numbers vs strings (why sort behaves weird)

🔥 12. Real Interview Edge Cases
console.log([] == ![]);      // ?
console.log(false == "0");   // ?
console.log(null == 0);      // ?
console.log(" \t\n" == 0);   // ?
console.log([0] == false);   // ?

*/