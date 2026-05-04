/*

🔥 1. Core Concept Questions
What are logical operators in JavaScript?
Explain &&, ||, and !
What values do logical operators return? (not just true/false)
Ans. 👉 Logical operators in JavaScript (&&, ||, ??) do NOT return just true/false
👉 They return actual operand values

🔥 1. AND (&&)

👉 Returns:

First falsy value, OR
Last value if all are truthy
📌 Examples
true && "Hello"      // "Hello"
"Hi" && 123          // 123
0 && "World"         // 0
🔍 Explanation
"Hi" && 123
"Hi" → truthy → continue
return last value → 123
🔥 2. OR (||)

👉 Returns:

First truthy value, OR
Last value if all are falsy
📌 Examples
false || "Hello"     // "Hello"
0 || 100             // 100
"" || null || "JS"   // "JS"
🔥 3. Nullish Coalescing (??)

👉 Returns:

First defined value (not null or undefined)
📌 Examples
null ?? "Default"       // "Default"
undefined ?? "Hi"       // "Hi"
0 ?? 100                // 0  ✅ (important)
⚠️ Key Difference (|| vs ??)
0 || 100   // 100  ❌
0 ?? 100   // 0    ✅

👉 || treats 0 as falsy
👉 ?? treats only null/undefined as empty

💣 Combined Example
console.log(0 && "Hello" || "JS");

👉 Steps:

0 && "Hello" → 0
0 || "JS" → "JS"


Difference between logical operators and bitwise operators?
Ans. 🧠 Core Difference

👉 Logical operators work on truthy/falsy values
👉 Bitwise operators work on binary (bits)

🔥 Logical Operators (&&, ||, !)
📌 Behavior
Work with any type (coercion to truthy/falsy)
Return actual values (not just true/false)
📌 Example
console.log(true && "Hello");   // "Hello"
console.log(0 || 100);         // 100
console.log(!"Hi");            // false
⚡ Bitwise Operators (&, |, ^, ~)
📌 Behavior
Convert values to 32-bit integers
Operate on binary bits
Return numbers
📌 Example
console.log(5 & 1);  // 1

👉 Binary:

5 → 101
1 → 001
---------
    001 → 1
console.log(5 | 1);  // 5

👉 Binary:

101
001
---
101 → 5


🔥 2. Short-Circuit Evaluation (VERY IMPORTANT)
What is short-circuit evaluation?

How does && short-circuit?
Ans. && (AND) short-circuits by evaluating operands left → right and stopping as soon as it finds a falsy value—because the whole expression can’t be true after that.
false && doSomething();  // doSomething is NOT called

How does || short-circuit?
Ans. || (OR) short-circuits by evaluating left → right and stopping as soon as it finds a truthy value—because the whole expression is already true.
true || doSomething();  // doSomething is NOT called

When does evaluation stop?

Does JavaScript evaluate left to right?
Ans. Yes—JavaScript evaluates expressions left to right, but the order of evaluation is controlled by operator precedence and associativity.

🧠 What “left to right” really means

👉 JavaScript visits operands left → right, but it groups operations based on precedence first.

🔍 Example 1 (simple)
console.log(1 + 2 + 3);  // 6

👉 Evaluated left → right:

1 + 2 = 3
3 + 3 = 6
⚠️ Example 2 (precedence matters)
console.log(1 + 2 * 3);  // 7

👉 Not purely left → right:

* has higher precedence
So:
2 * 3 = 6
1 + 6 = 7
🔥 Example 3 (short-circuit)
console.log(0 && "Hello" || "JS");  // "JS"

👉 Steps:

Left → right evaluation
But:
&& runs first (higher precedence)
Short-circuits at 0
⚡ Associativity (important)

Some operators decide grouping direction:

Left-to-right (most operators)
10 - 5 - 2   // (10 - 5) - 2 = 3
Right-to-left
let x = y = 5;

👉 Evaluated as:

y = 5;
x = y;


👉 Example:

false && console.log("Hello"); // ?
true || console.log("Hi");     // ?
🔥 3. Return Value Behavior (Advanced)
Why do logical operators return operands instead of boolean?
console.log("A" && "B"); // ?
console.log("" || "Default"); // ?
What is returned in:
0 && "Hello"
1 && "Hello"
null || "Fallback"
undefined || "Default"
🔥 4. Truthy/Falsy with Logical Operators
How do falsy values affect && and ||?
What happens with:
false || true && false
Operator precedence between && and ||?
Ans. && has higher precedence than ||

🔥 5. Real-World Use Cases
Default values using ||
Guard clauses using &&
Conditional execution using &&
isLoggedIn && showDashboard();
🔥 6. Nullish Coalescing (??) vs ||
Difference between || and ??
Why 0 || 10 gives 10 but 0 ?? 10 gives 0?
let value = 0;
console.log(value || 10);
console.log(value ?? 10);
🔥 7. Optional Chaining (?.) with Logical Operators
Ans. ?. lets you safely access properties or call methods on possibly null/undefined values without throwing an error. 
How ?. works with && and ||
👉 ?. safely accesses a value (returns undefined if null/undefined)
👉 && / || then apply their own short-circuit rules on that result

🔥 How ?. works first
user?.name

👉 If user is:

null / undefined → returns undefined (no error)
otherwise → returns user.name
🔗 Combine with &&
Rule:

👉 && returns first falsy or last truthy

Example
let user = null;

console.log(user?.name && "Hello");
Steps:
user?.name → undefined
undefined && "Hello" → undefined (stops)
Another example
let user = { name: "Aman" };

console.log(user?.name && "Hello");

👉 Steps:

"Aman" is truthy → continue
return "Hello"

✔️ Output: "Hello"

🔗 Combine with ||
Rule:

👉 || returns first truthy value

Example
let user = null;

console.log(user?.name || "Guest");

👉 Steps:

user?.name → undefined
undefined || "Guest" → "Guest"

✔️ Output: "Guest"

⚠️ Important Pitfall
let user = { name: "" };

console.log(user?.name || "Guest"); // "Guest" ❌

👉 Why?

"" is falsy → || replaces it
✅ Better with ??
console.log(user?.name ?? "Guest"); // "" ✅

👉 Only replaces:

null
undefined
⚡ Short-Circuit Chain Example
let user = null;

console.log(user?.profile?.name || "No Name");

👉 Steps:

user?.profile → undefined (stops early)
undefined || "No Name" → "No Name"


Why:
user && user.name
user?.name
🔥 8. Complex Expression Evaluation
console.log(true && false || true);
console.log(false || true && false);
console.log(null || undefined || "Hello");
🔥 9. Logical Assignment Operators (ES2021)
What are:
&&= ----> &&= is the logical AND assignment operator in JavaScript.
👉 It assigns a new value only if the left side is truthy.
let a = 10;
a &&= 20;

console.log(a); // 20
👉 Because:

a is truthy → assign 20

||= ----> ||= is the logical OR assignment operator in JavaScript.
It assigns a value only if the left side is falsy.
let a = 0;
a ||= 10;

console.log(a); // 10
👉 Because:

0 is falsy → assign 10


??= ------> ??= is the nullish coalescing assignment operator in JavaScript.
It assigns a value only if the left side is null or undefined.
let a = null;
a ??= 10;

console.log(a); // 10

let a = 0;
a ??= 10;

console.log(a); // 0
👉 Because:

0 is NOT null/undefined
so it stays unchanged


let a = 0;
a ||= 10; // ?
🔥 10. Edge Cases (Interview Favorite)
[] && "Hello"
[] || "Hello"
![]
!![]
false && "A" || "B"
🔥 11. Common Mistakes
Using || for default values incorrectly
Confusing && return values
Ignoring operator precedence
Misunderstanding falsy values
🔥 12. Coding Questions
Implement fallback value logic
Validate input using logical operators
Combine multiple conditions efficiently
Write clean guard clauses
🔥 13. Debugging Questions
Why condition not executing?
Why default value overriding valid value?
Why unexpected output in chained logical expression?
🔥 14. Performance & Best Practices
Are logical operators faster than if?
When to use if vs &&?
Readability vs compact code?
🔥 15. Tricky Output Questions
console.log(0 || 1 && 2);
console.log(false && "A" || "B");
console.log("A" && null || "C");
console.log(undefined && "X" || "Y");
console.log("Hello" && 0 && "World");
🔥 16. Interview Deep Dive Questions
Explain evaluation order in a && b || c
How JS internally evaluates logical expressions?
What is ToBoolean conversion?
Ans. ToBoolean conversion is the internal process JavaScript uses to convert any value into a boolean (true or false), especially in conditions like if, &&, ||, and !.

if (value) { }
value && something
value || defaultValue
!value
Can logical operators replace if-else?

*/