// 🧠 What is an Array?

// 👉 An array is an ordered collection of values (any type)

// let arr = [1, 2, 3, "hello", true];

// 👉 Index starts from 0

// 🔥 Create arrays
// let a = [1, 2, 3];
// let b = new Array(1, 2, 3);
// ⚡ Basic operations
// arr.length     // size
// arr[0]         // access
// arr[1] = 10    // update
// 🔥 Important Array Methods
// 📌 1. Add / Remove
// arr.push(4);     // add at end
// arr.pop();       // remove from end

// arr.unshift(0);  // add at start
// arr.shift();     // remove from start
// 📌 2. Slice vs Splice
// arr.slice(1, 3);   // ❌ does NOT modify array
// arr.splice(1, 2);  // ✅ modifies array
// 📌 3. Loop methods
// arr.forEach(x => console.log(x));
// arr.map(x => x * 2);
// arr.filter(x => x > 2);
// arr.reduce((a, b) => a + b, 0);
// 📌 4. Search
// arr.includes(2);      // true
// arr.indexOf(2);       // index
// arr.find(x => x > 2); // first match
// 📌 5. Convert
// arr.join("-");        // "1-2-3"
// "1-2-3".split("-");   // ["1","2","3"]
// 📌 6. Sort & Reverse
// arr.sort();     // sorts (⚠️ string sort)
// arr.reverse();  // reverse array

// 👉 Numeric sort:

// arr.sort((a, b) => a - b);
// 📌 7. Spread & Copy
// let copy = [...arr];
// 🧠 Important concepts
// 🔥 1. Arrays are objects
// typeof arr; // "object"
// 🔥 2. Shallow copy issue
// let a = [{ x: 1 }];
// let b = [...a];

// b[0].x = 99;

// console.log(a[0].x); // 99 ❗
// 🔥 3. Length behavior
// let arr = [1, 2];
// arr.length = 0; // clears array
// 💣 Common mistakes
// ❌ Using sort without compare
// [10, 2, 1].sort(); // [1, 10, 2]

// Methods push/pop run fast, while shift/unshift are slow.


// A cheat sheet of array methods:

// To add/remove elements:

// push(...items) – adds items to the end,
// pop() – extracts an item from the end,
// shift() – extracts an item from the beginning,
// unshift(...items) – adds items to the beginning.
// splice(pos, deleteCount, ...items) – at index pos deletes deleteCount elements and inserts items.
// slice(start, end) – creates a new array, copies elements from index start till end (not inclusive) into it.
// concat(...items) – returns a new array: copies all members of the current one and adds items to it. If any of items is an array, then its elements are taken.
// To search among elements:

// indexOf/lastIndexOf(item, pos) – look for item starting from position pos, and return the index or -1 if not found.
// includes(value) – returns true if the array has value, otherwise false.
// find/filter(func) – filter elements through the function, return first/all values that make it return true.
// findIndex is like find, but returns the index instead of a value.
// To iterate over elements:

// forEach(func) – calls func for every element, does not return anything.
// To transform the array:

// map(func) – creates a new array from results of calling func for every element.
// sort(func) – sorts the array in-place, then returns it.
// reverse() – reverses the array in-place, then returns it.
// split/join – convert a string to array and back.
// reduce/reduceRight(func, initial) – calculate a single value over the array by calling func for each element and passing an intermediate result between the calls.
// Additionally:

// Array.isArray(value) checks value for being an array, if so returns true, otherwise false.
// Please note that methods sort, reverse and splice modify the array itself.