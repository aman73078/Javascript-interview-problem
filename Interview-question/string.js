// 🧠 What is a String?

// 👉 A string is a sequence of characters:

// let str = "Hello World";
// 🔥 Most Important String Methods
// 📌 1. Length
// str.length; // 11
// 📌 2. Change case
// str.toUpperCase(); // "HELLO WORLD"
// str.toLowerCase(); // "hello world"
// 📌 3. Trim (remove spaces)
// "  hello  ".trim();       // "hello"
// "  hello  ".trimStart();  // "hello  "
// "  hello  ".trimEnd();    // "  hello"
// 📌 4. Access characters
// str[0];        // "H"
// str.charAt(1); // "e"
// 📌 5. Find index
// str.indexOf("o");     // 4
// str.lastIndexOf("o"); // 7
// 📌 6. Check existence
// str.includes("World"); // true
// str.startsWith("Hello"); // true
// str.endsWith("World");   // true
// 📌 7. Extract part of string
// str.slice(0, 5);      // "Hello"
// str.substring(0, 5);  // "Hello"

// 👉 Difference:

// slice supports negative index
// substring does not
// 📌 8. Replace
// str.replace("World", "JS"); // "Hello JS"

// 👉 Replace all:

// str.replaceAll("o", "0"); // "Hell0 W0rld"
// 📌 9. Split
// str.split(" "); // ["Hello", "World"]
// 📌 10. Join (with array)
// ["Hello", "World"].join(" "); // "Hello World"
// 📌 11. Repeat
// "Hi".repeat(3); // "HiHiHi"
// 📌 12. Pad
// "5".padStart(3, "0"); // "005"
// "5".padEnd(3, "0");   // "500"
// 📌 13. Template strings
// let name = "Aman";
// `Hello ${name}`; // "Hello Aman"
// 🧠 Important concept

// 👉 Strings are immutable

// let str = "Hello";
// str[0] = "h"; // ❌ no change