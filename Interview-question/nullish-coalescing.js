/*

🔥 1. Basic Concept Questions
What is the nullish coalescing operator (??)?
Why was ?? introduced in JavaScript?
What problem does ?? solve?
Difference between ?? and ||?
What does “nullish” mean?
👉 “Nullish” means only two values:

null
undefined

That’s it. Nothing else.
👉 Nullish = value is missing or not defined

🔥 2. Core Behavior Questions
When does ?? return left-hand value?
When does ?? return right-hand value?
Which values are considered “nullish”?
Does ?? treat 0, false, or "" as nullish?
🔥 3. Output-Based Questions (VERY IMPORTANT)
null ?? "default"
undefined ?? "default"
0 ?? 10
false ?? true
"" ?? "fallback"
NaN ?? 100
🔥 4. Comparison with OR (||) Operator
Difference between || and ?? ?
Why does || fail for 0 and ""?
When should you use ?? instead of ||?
0 || 10
0 ?? 10
🔥 5. Real-World Use Cases
Default function parameters using ??
API response handling with ??
Form input fallback values
Config handling in applications
🔥 6. Edge Case Questions
What happens if both values are nullish?
🔥 Case: both values are nullish
null ?? undefined

👉 Step-by-step:

left side = null → nullish ❌
move to right side → undefined → also nullish ❌
no fallback left → return last value

✔️ Result:

undefined


Can ?? be chained?
Can ?? be used with && or || directly?
null ?? undefined ?? "A"
🔥 7. Operator Precedence Questions
Which has higher precedence: ?? or ||?
Can we mix ?? and || without parentheses?
null || undefined ?? "value"
🔥 8. Syntax Error Questions (IMPORTANT)
Why does this throw an error?
null || undefined ?? "value"
How to fix mixing ?? with && or ||?
🔥 9. Advanced Concept Questions
What is the evaluation strategy of ?? ?
Is ?? short-circuiting?
Does ?? evaluate both sides?
Internal behavior of nullish check
🔥 10. Practical Coding Questions
Implement safe fallback for API response
Build config loader with default values
Handle optional nested object values
Replace unsafe || usage with ??
🔥 11. Debugging Questions
Why is 0 being ignored in fallback logic?
Why is "" replaced unexpectedly?
Why is || giving wrong default value?
When should ?? fix a bug?
🔥 12. Real Interview Edge Cases
let a = 0;
console.log(a ?? 10);

let b = "";
console.log(b ?? "default");

let c = false;
console.log(c ?? true);
🔥 13. Trick Questions (VERY IMPORTANT)
0 || null ?? 100
null ?? 0 || 50
false ?? 10
🔥 14. Comparison with Other Operators
?? vs ||
?? vs ternary ?:
?? vs &&
?? vs optional chaining ?.
🔥 15. Best Practices Questions
When should you always use ?? ?
Why is || dangerous for default values?
Should ?? replace all || usage?
Code readability with ??

*/