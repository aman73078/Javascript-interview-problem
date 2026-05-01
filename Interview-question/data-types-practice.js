null == undefined
null === undefined

NaN == NaN
NaN === NaN

// Why NaN !== NaN?

let s1 = Symbol("id");
let s2 = Symbol("id");

console.log(s1 === s2); // ?

let a = 10n;
let b = 10;

console.log(a == b);  // ?
console.log(a === b); // ?

Array.isArray([])   // true
Array.isArray({})   // false

// Why not rely on typeof?
// You shouldn’t rely on typeof because it cannot correctly distinguish between arrays, objects, and some special values like null.


Object.prototype.toString.call([])
Object.prototype.toString.call({})



// TOP 20 TRICKY OUTPUT QUESTIONS
// 1.
typeof NaN

// 👉 "number"
// ➡️ NaN is a special numeric value

// 2.
typeof null

// 👉 "object"
// ➡️ historical bug in JS

// 3.
NaN === NaN

// 👉 false
// ➡️ NaN is not equal to anything, even itself

// 4.
console.log([] == false);

// 👉 true
// ➡️ [] → "" → 0, false → 0

// 5.
[] === false

// 👉 false
// ➡️ no type coercion

// 6.
"" == 0

// 👉 true

// 7.
"" === 0

// 👉 false

// 8.
null == undefined

// 👉 true

// 9.
null === undefined

// 👉 false

// 10.
true + true

// 👉 2

// 11.
true + false

// 👉 1

// 12.
"5" - 2

// 👉 3

// 13.
"5" + 2

// 👉 "52"

// 14.
console.log([] + []);

// 👉 ""

// 15.
[] + {}

// 👉 "[object Object]"

// 16.
{} + []

// 👉 0 (in many cases)
// ➡️ {} treated as block, +[] → 0

// 17.
+true

// 👉 1

// 18.
+"123"

// 👉 123

// 19.
Boolean([])

// 👉 true

// 20.
Boolean("")

// 👉 false

// 🎯 Pattern You MUST Understand

// Instead of memorizing, remember:

// + → string concat OR number conversion
// - * / → always number
// == → type coercion
// === → strict
// [] → "" → 0
// true → 1, false → 0