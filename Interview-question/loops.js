/*
🔥 1. Basic Concept Questions
What is a loop in JavaScript?
Why do we use loops?
Difference between for and while loop?
🔥 1. for loop  ---> 👉 Used when number of iterations is known or fixed

Syntax
for (initialization; condition; increment) {
  // code
}
Example
for (let i = 0; i < 5; i++) {
  console.log(i);
}

🔥 2. while loop ---> 👉 Used when number of iterations is NOT known

Syntax
while (condition) {
  // code
}

Example
let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}

When should you use for vs while?
What is an infinite loop?
🔹 2. FOR LOOP Questions
Syntax of for loop?
Explain initialization, condition, increment in for

Can for loop run without initialization?
Ans. Yes — a for loop can run without initialization in JavaScript.

🧠 Syntax reminder
for (initialization; condition; update) {
  // code
}

👉 All 3 parts are optional

✅ 1. For loop without initialization
let i = 0;

for (; i < 5; i++) {
  console.log(i);
}

👉 Initialization is done outside the loop


Can for loop run without condition?
Ans. Yes — a for loop can run without a condition in JavaScript.

🧠 Key idea

👉 In a for loop, the condition part is optional.

🔥 Syntax reminder
for (initialization; condition; update) {
  // code
}

👉 All 3 parts are optional.

⚡ 1. For loop without condition
for (let i = 0; ; i++) {
  console.log(i);
}

👉 Since there is no condition, JavaScript treats it as:

true

✔️ So the loop runs forever (infinite loop) unless you stop it manually.

💣 Example with break
for (let i = 0; ; i++) {
  if (i === 3) break;
  console.log(i);
}
Output:
0
1
2
⚠️ Important behavior

👉 If condition is missing:

JS assumes true
Loop never stops unless break is used


Can for loop run without increment?
Ans. Yes — a for loop can run without an increment (update expression) in JavaScript.

🧠 Key idea

👉 The increment part in a for loop is optional, but without it you must handle progression manually.

🔥 Syntax reminder
for (initialization; condition; update) {
  // code
}

👉 All 3 parts are optional.

⚡ 1. For loop without increment
for (let i = 0; i < 5; ) {
  console.log(i);
  i++;
}

👉 Here:

No increment in loop header
We manually increment inside body
💣 2. Dangerous case (infinite loop)
for (let i = 0; i < 5; ) {
  console.log(i);
}

👉 Problem:

i never changes
condition i < 5 always true

✔️ Result: infinite loop

⚡ 3. Completely controlled inside loop
let i = 0;

for (; i < 5; ) {
  console.log(i);
  i += 2;
}

👉 You fully control increment logic inside body



for (let i = 0; i < 5; i++) {
  console.log(i);
}
🔹 3. WHILE LOOP Questions
Syntax of while loop?
Difference between while and for
When does while loop stop execution?
What happens if condition is always true?
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
🔥 4. Output-Based Questions (Very Important)
FOR LOOP
for (let i = 0; i < 3; i++) console.log(i);
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
WHILE LOOP
let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}
🔥 5. Edge Case Questions
What happens if condition is missing in for loop?
What happens if increment is missing?


Can we write for(;;)?
Ans. Yes — for(;;) is completely valid in JavaScript.

🧠 What does for(;;) mean?

A for loop normally has 3 parts:

for (initialization; condition; update)

👉 In for(;;):

initialization → missing
condition → missing
update → missing
🔥 What happens internally?
for (;;) {
  // code
}

👉 JavaScript treats it as:

no initialization → nothing runs once
no condition → treated as true
no update → no automatic change

✔️ Result: infinite loop

📌 Example
for (;;) {
  console.log("Running forever");
}

👉 This will run endlessly unless stopped manually.

⚠️ How to stop it

You must use break:

let i = 0;

for (;;) {
  console.log(i);
  i++;

  if (i === 3) break;
}

✔️ Output:

0
1
2


What is while(true) used for?
🔥 6. Loop Control Statements
What is break?
What is continue?
Difference between break and continue?
Can break be used in while loop?
for (let i = 0; i < 5; i++) {
  if (i === 3) break;
  console.log(i);
}
🔥 7. Nested Loop Questions
What is a nested loop?
Time complexity of nested loops?
Output of nested loops?
for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 2; j++) {
    console.log(i, j);
  }
}
🔥 8. Tricky Questions
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
🔥 9. Conceptual Questions
How does loop execution work internally?
Is loop execution synchronous or asynchronous?


Why does let fix closure issue in loops?
💣 The problem (with var)
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
Output:
3
3
3

👉 Why?

Because:

var is function-scoped
only one i exists
by the time setTimeout runs, loop is finished
i = 3
🧠 Closure concept

Each callback forms a closure over i

But with var:
👉 all closures share the same memory reference

✅ How let fixes it
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
Output:
0
1
2
🔥 Why this works

👉 let is block-scoped

That means:

Each loop iteration creates a new i
Each closure captures a separate copy
🧠 Internal behavior
With let:
Iteration 1 → i = 0 (new binding)
Iteration 2 → i = 1 (new binding)
Iteration 3 → i = 2 (new binding)

Each setTimeout closes over its own value.


Difference between iteration and recursion?
🔥 10. Coding Questions
Print 1 to 100
Print even/odd numbers
Reverse a number using loop
Sum of digits
Factorial using loop
Fibonacci series
Find max/min in array
🔥 11. Performance Questions
Which is faster: for or while?
Which loop is best for arrays?
When should loops be avoided?
🔥 12. Real Interview Edge Cases
let i = 0;
while (i < 3); {
  console.log(i);
  i++;
}
for (let i = 0; i < 3; i++);
console.log(i);
🔥 13. Advanced Questions

What is loop unrolling?
👉 Loop unrolling is a performance optimization technique where we reduce the number of loop iterations by executing multiple operations in a single iteration.

Instead of looping many times, we “unroll” the loop manually or let the compiler/JIT optimize it.


How does JS engine optimize loops?
Difference between for-loop and array methods (map, forEach)?
Can loops be replaced with recursion?

*/