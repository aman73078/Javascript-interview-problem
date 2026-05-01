if (true) {
    var a = 10;
}
console.log(a); // ?

if (true) {
    let a = 10;
}
console.log(a); // ?

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

for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000);
}

// var is function-scoped, not block-scoped
// Only one shared variable i exists for all iterations
// Loop finishes first → i = 3
// Then setTimeout runs → all callbacks print the same final value

for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000);
}
// let is block-scoped
// A new i is created for each iteration
// Each callback gets its own copy of i

// var → single shared memory reference
// let → new binding per iteration


// Bonus Trick (Fix var version)
for (var i = 0; i < 3; i++) {
  ((j) => {
    setTimeout(() => console.log(j), 1000);
  })(i);
}

// ✔ Output:
// 0 1 2


// Practical Coding Questions
// Swap two variables without third variable
// Declare immutable variable
// Create constant configuration object
// Loop variable scoping problem fix


var a = 10;
let b = 20;

console.log(window.a); // ?
console.log(window.b); // ?
// Which variables attach to global object?
// Why only var behaves this way?

var a = 10;

function test() {
    console.log(this.a);
}
test();
// How this interacts with global variables?
// Difference in strict mode?

let a = {x: 1};
let b = a;

b.x = 2;
console.log(a.x); // ?

// Destructuring
const {a = 10} = {};
console.log(a); // ?

// Freeze & Const (Advanced)
const obj = Object.freeze({a:1});
obj.a = 2; // ?
console.log(obj)

// Interview Edge Case
var a = 1;

function foo() {
    console.log(a);
    var a = 2;
}

foo();


// 🟢 TOP 30 VARIABLE QUESTIONS (WITH ANSWERS)
// 🧠 Basics (1–5)
// 1. Difference between var, let, const?

// 👉 var → function-scoped
// 👉 let, const → block-scoped
// 👉 const → cannot be reassigned

// 2. Can you declare variable without keyword?
a = 10;

// 👉 Yes, but becomes global variable (bad practice)

// 3. Are JS variables dynamically typed?

// 👉 Yes (type can change anytime)

// 4. Valid variable names?

// 👉 Must start with letter, _, $
// 👉 Cannot start with number

// 5. What happens if variable is not initialized?
let a;
console.log(a);

// 👉 undefined

// 🔥 Hoisting (6–10)
// 6.
console.log(a);
var a = 10;

// 👉 undefined

// 7.
console.log(a);
let a = 10;

// 👉 ❌ ReferenceError (TDZ)

// 8. What is TDZ?

// 👉 Time between variable declaration & initialization where access is not allowed

// 9.
var a;
var a;

// 👉 ✅ Allowed

// 10.
let a;
let a;

// 👉 ❌ Error (cannot redeclare)

// ⚡ Scope (11–15)
// 11.
if(true){
    var a = 10;
}
console.log(a);

// 👉 10

// 12.
if(true){
    let a = 10;
}
console.log(a);

// 👉 ❌ Error

// 13. Is var block scoped?

// 👉 ❌ No

// 14. What is global scope?

// 👉 Accessible everywhere

// 15. What is block scope?

// 👉 Only inside {}

// 💣 Tricky Output (16–20)
// 16.
var a = 10;
function test(){
    console.log(a);
    var a = 20;
}
test();

// 👉 undefined

// 17.
let a = 10;
{
    let a = 20;
    console.log(a);
}
console.log(a);

// 👉 20, 10

// 18.
const a = 10;
a = 20;

// 👉 ❌ Error

19.
const obj = {x:1};
obj.x = 2;

// 👉 ✅ Allowed

// 20.
let a = {x:1};
let b = a;
b.x = 5;
console.log(a.x);

// 👉 5

// 🚀 Loop & Closure (21–25)
// 21.
for(var i=0;i<3;i++){
    setTimeout(()=>console.log(i),1000);
}

// 👉 3 3 3

// 22.
for(let i=0;i<3;i++){
    setTimeout(()=>console.log(i),1000);
}

// 👉 0 1 2

// 23. Why difference?

// 👉 var → shared reference
// 👉 let → new binding per loop

// 24. What is closure?

// 👉 Function remembering outer variables

25.
function outer(){
    let a = 10;
    return function(){
        console.log(a);
    }
}
outer()();

// 👉 10

// 🎯 Advanced (26–30)
// 26.
var a = 10;
console.log(window.a);

// 👉 10 (in browser)

27.
let b = 20;
console.log(window.b);

// 👉 undefined

// 28. Difference: reassign vs redeclare?

// 👉 Reassign = change value
// 👉 Redeclare = declare again

// 29.
const arr = [1,2];
arr.push(3);

// 👉 ✅ Allowed

30.
const obj = Object.freeze({a:1});
obj.a = 2;
console.log(obj.a);

// 👉 1 (no change)