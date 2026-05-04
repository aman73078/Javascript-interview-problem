// 🧠 What is Math in JavaScript?

// 👉 Math is a built-in object that provides mathematical constants and functions.

// 👉 Important:

// Math is NOT a constructor (no new Math())
// 🔥 Common Math Properties (constants)
// Math.PI       // 3.14159...
// Math.E        // Euler’s number
// Math.SQRT2    // √2
// 🔥 Common Math Methods
// 📌 1. Rounding
// Math.round(4.6)  // 5
// Math.floor(4.9)  // 4
// Math.ceil(4.1)   // 5
// Math.trunc(4.9)  // 4
// 📌 2. Min / Max
// Math.max(1, 5, 3) // 5
// Math.min(1, 5, 3) // 1
// 📌 3. Power & Root
// Math.pow(2, 3)   // 8
// Math.sqrt(16)    // 4
// Math.cbrt(27)    // 3
// 📌 4. Random
// Math.random() // 0 to <1

// 👉 Random number between 1–10:

// Math.floor(Math.random() * 10) + 1
// 📌 5. Absolute
// Math.abs(-5) // 5
// 📌 6. Log & Exponent
// Math.log(1)     // 0
// Math.exp(1)     // e^1
// ⚡ Practical examples
// 🎯 Random OTP (4 digit)
// const otp = Math.floor(1000 + Math.random() * 9000);
// 🎯 Clamp value
// const value = Math.min(Math.max(5, 0), 10);
// 🧠 Key points
// Math is static → use directly (Math.method())
// No need to create object
// Very common in:
// games 🎮
// random generation 🎲
// calculations 📊
// 🎯 Interview Answer

// 👉 “Math is a built-in JavaScript object that provides mathematical constants and functions like round, floor, random, max, and sqrt. It is static and does not require instantiation.”

// 🚀 Mental model
// Math = toolbox for calculations