// 🧠 What is a Number?

// 👉 JavaScript has a single numeric type: Number
// 👉 It represents:

// integers → 10
// decimals → 10.5
// special values → NaN, Infinity
// 🔥 Creating numbers
// let a = 10;
// let b = 10.5;

// let c = Number("123"); // 123
// ⚡ Important Number Properties
// Number.MAX_VALUE
// Number.MIN_VALUE
// Number.MAX_SAFE_INTEGER
// Number.MIN_SAFE_INTEGER
// 🔥 Common Number Methods
// 📌 1. toFixed()

// 👉 Rounds and returns string

// (10.456).toFixed(2); // "10.46"
// 📌 2. toPrecision()

// 👉 Formats number with total digits

// (10.456).toPrecision(3); // "10.5"
// 📌 3. toString()
// (100).toString(); // "100"
// 🔥 Conversion methods
// 📌 4. Number()
// Number("123"); // 123
// Number("abc"); // NaN
// 📌 5. parseInt()
// parseInt("10.5"); // 10
// 📌 6. parseFloat()
// parseFloat("10.5"); // 10.5
// ⚡ Special values
// 📌 7. NaN (Not a Number)
// Number("abc"); // NaN

// 👉 Check:

// Number.isNaN(NaN); // true
// 📌 8. Infinity
// 1 / 0; // Infinity
// ⚡ Useful checks
// Number.isInteger(10); // true
// Number.isFinite(10);  // true
// 💣 Common pitfalls
// ❌ Floating point issue
// 0.1 + 0.2; // 0.30000000000000004

// 👉 Fix:

// (0.1 + 0.2).toFixed(2); // "0.30"
// ❌ parseInt base issue
// parseInt("10");     // 10
// parseInt("10", 2);  // 2 (binary)