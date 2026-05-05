// 🔥 1. Array & String Problems (MUST DO)
// Core
// Two Sum (optimized using hashmap)
// Find duplicates in array
function findDuplicates(list){
    let obj = {};
    for(let i=0;i<=list.length-1;i++){
        if(!obj[list[i]]){
            obj[list[i]] = 1;
        }else{
            obj[list[i]] += 1;
        };
    }
    console.log(obj);
}
findDuplicates([1,2,2,4,5,4,5,5,7,7,8,8,8,8,8])
// Remove duplicates (in-place)

function removeDuplicate(list){
    let obj = {};
    for(let i=0;i<=list.length-1;i++){
        if(!obj[list[i]]){
            obj[list[i]] = 1;
        }else{
            obj[list[i]] += 1;
        };
    }
    console.log(list.filter(item => obj[item] < 2));
}
removeDuplicate([1,2,2,98,11,76,55,4,5,4,5,5,7,7,8,8,8,8,8])
// Rotate array (k steps)
function rotateFirstKStepInArray(list,k){
    let midIndex = k;
    let data = [];
    while(midIndex+1 <= list.length -1){
        data.push(list[k])
        midIndex++
    }
    
    while(midIndex >=0){
        // data.push(list[])
    }
}

// Move zeros to end
// Flatten nested array (recursive + iterative)
// Chunk array into groups
// Find longest substring without repeating characters
// Check if two strings are anagrams
// Group anagrams
// 🔥 2. Advanced Array Problems
// Find missing number (0…n)
// Find first non-repeating element
// Kadane’s Algorithm (max subarray sum)
// Product of array except self
// Merge two sorted arrays
// Intersection of arrays
// Sort array of 0,1,2 (Dutch flag)
// Find majority element
// 🔥 3. String Deep Problems
// Reverse words in sentence
// Longest palindrome substring
// String compression (aabcc → a2b1c2)
// Check valid parentheses
// Implement strStr() (substring search)
// Minimum window substring
// 🔥 4. Object & Map Problems
// Deep clone object
// Compare two objects (deep equality)
// Flatten nested object
// Convert object → query string
// Group objects by property
// Count frequency using object/map
// 🔥 5. Function-Based Problems (VERY IMPORTANT)
// Implement debounce
// Implement throttle
// Implement once() function
// Currying function
// Memoization function
// Function composition
// 🔥 6. Promise & Async Problems (TOP INTERVIEW AREA)
// Implement Promise.all
// Implement Promise.race
// Sequential promise execution
// Retry failed API call (3 times)
// Parallel vs sequential execution
// Convert callback → promise
// 🔥 7. Closure Problems
// Counter using closure
// Private variables using closure
// Function factory pattern
// Loop + closure problem (var vs let)
// 🔥 8. this & Binding Problems
// Implement bind, call, apply
// Fix this issue in nested functions
// Arrow vs normal function in object
// 🔥 9. DOM & Event Problems
// Event delegation implementation
// Infinite scroll
// Debounced search input
// Modal open/close logic
// Form validation
// 🔥 10. Polyfills (VERY IMPORTANT FOR INTERVIEW)
// Polyfill for map
// Polyfill for filter
// Polyfill for reduce
// Polyfill for bind
// Polyfill for Promise
// 🔥 11. Recursion Problems
// Factorial
// Fibonacci (optimized)
// Flatten array
// Tree traversal (DFS)
// Generate subsets
// 🔥 12. Data Structure Problems
// Stack using array
// Queue using array
// LRU Cache (important!)
// Implement Min Stack
// 🔥 13. Real Interview Coding Questions
// Implement autocomplete search
// Build rate limiter
// Implement task scheduler
// Build pagination logic
// Implement infinite retry queue
// 🔥 14. Edge Case Problems (Interview Favorite)
// Handle NaN, null, undefined
// Compare arrays/objects deeply
// Safe optional chaining
// Type checking utility
// 🔥 15. System Thinking (Mid-Level Expectation)
// Design a caching mechanism
// Handle large dataset (lazy loading)
// Optimize API calls
// Handle concurrency
// 🔥 16. Tricky JS Output Problems
// console.log([] + []);
// console.log([] + {});
// console.log({} + []);
// console.log(true + false);
// console.log("5" - 2);
// console.log("5" + 2);
// 🔥 17. Combination Problems
// Array + closure
// Promise + loop
// Debounce + API
// Map + reduce + chaining
// 🧠 What Interviewers Actually Check

// At 2–3 years level, they expect:

// Clean logic (not brute force)
// Edge case handling
// Understanding of async behavior
// Code readability
// Optimization thinking
// 🧠 Must-Prepare Topics (Priority)
// Arrays & Strings
// Promises & Async
// Closures
// this
// Polyfills
// Debounce/Throttle