/*

Q.1 What is Javascript?
Ans. JavaScript is a high-level, interpreted programming language mainly used to make websites interactive and dynamic. JavaScript was created by Brendan Eich in 1995.
Brendan Eich built JavaScript in just 10 days while working at Netscape
It was originally created for the browser Netscape Navigator
The first name of JavaScript was Mocha, then renamed to LiveScript, and finally JavaScript

Q.2 why it’s called JavaScript
Ans. When JavaScript came into picture in that time one language was very popular that was Java. So because of popularity which can attract developers to use this language due to this Netscape renamed LiveScript to JavaScript.

🔥 1. Basic Type Conversion Questions (Foundation)
📌 Conceptual
What is type conversion in JavaScript?
Ans. Type conversion in JavaScript means changing a value from one data type to another. For example, converting a string "123" into a number 123, or a number into a boolean.

Why Type Conversion is Important
Ans. JavaScript is a loosely typed language, so it automatically or manually converts data types when needed. This helps in performing operations between different types.

a. implicit conversion --> This happens automatically by the JavaScript.
console.log("5" + 2);  // "52" (number converted to string)
console.log("5" - 2);  // 3   (string converted to number)
console.log(true + 1); // 2   (true becomes 1)

b. explicit conversion --> This happens manually by using built in functions.
Number("123");     // 123
parseInt("10px");  // 10
parseFloat("10.5"); // 10.5

What is truthy and falsy values?
Ans. Falsy values are those that become false when converted to boolean.
👉 There are only 6 falsy values in JavaScript:
a. false    b. 0    c. ""   d. null     e. undefined    f. NaN


-Anything that is not falsy is truthy.
true
1
"hello"
[]
{}
"false"   // ⚠️ still truthy (it's a string)

What is Semicolon or linebreak in JavaScript?
Ans. JavaScript automatically detect semicolon once one statement is completed but if we didn't add semicolon previous line of array in that case it will throw error.

How many comments we have in javascript
Ans. In JavaScript, there are 2 types of comments.
1. Single line Comments     2. Multi line comments

Q. What is “use strict” in JavaScript and why we use
Ans. "use strict" is a directive in JavaScript that enables strict mode—a stricter set of rules for writing safer and cleaner code.

x = 10;   // ❌ no error (bad practice)
console.log(x);

"use strict";

x = 10;   // ❌ ReferenceError

"use strict";

let x = 10;
delete x;   // ❌ Error

*/

    