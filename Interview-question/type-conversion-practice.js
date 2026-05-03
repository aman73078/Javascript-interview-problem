Number("123");     // 123
parseInt("10px");  // 10
parseFloat("10.5"); // 10.5

String(123);       // "123"
(123).toString();  // "123"

Number("123");     // 123
parseInt("10px");  // 10
parseFloat("10.5"); // 10.5

console.log("hello" - 1);
console.log([] + []);
console.log([] + {});
console.log({} + []);
// Output: 0 ⚠️ tricky
// ✔ Reason: {} treated as block, +[] → 0


"5" == 5   // true
"5" === 5  // false

Number("abc"); // NaN
parseInt("10px") // 10
Number("10px")   // NaN

console.log(1 + "2" + 3);
console.log(1 + 2 + "3");
console.log(Boolean("false"));
console.log([] == false);

if ("hello") {
  console.log("Truthy"); // ✅ This runs
}

if ([]) console.log("Yes"); // ✅ Truthy
if ({}) console.log("Yes"); // ✅ Truthy

Boolean("false"); // true 

!!"hello" // true
!!0       // false
console.log(Boolean([]));
console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean("0"));

Number("123")
Number("123abc")
Number(true)
Number(false)
Number(null)
Number(undefined)

String(123)
String(true)
String(null)

Boolean(0)
Boolean(1)
Boolean("")
Boolean("hello")
Boolean(null)
Boolean(undefined)

"5" + 2
"5" - 2
"5" * 2
"5" / 2

true + 1
false + 1
null + 1
undefined + 1

"5" + true
"5" + null
"5" + undefined

0 == false
0 === false

"" == false
"" === false

null == undefined
null === undefined

console.log([] == 0)
[1] == 1
[1,2] == "1,2"

console.log([] + [])
console.log([] + {})
console.log({} + [])

console.log(true + false)
console.log(true + true)
console.log(false - true)

console.log("10" - "5")
console.log("10" + "5")
console.log("10" - 5)

Number([])
Number([10])
Number([10,20])

Boolean([])
Boolean({})
Boolean("0")

console.log([] == ![])

+true
+false
+"123"