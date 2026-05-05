// 🧠 Node.js MCQs (1–50)
// 🟢 Basics

// 1. What is Node.js?
// A) Programming language
// B) Runtime environment
// C) Framework
// D) Library
// 👉 Answer: B

// 2. Node.js is built on which engine?
// A) SpiderMonkey
// B) Chakra
// C) V8
// D) JavaScriptCore
// 👉 Answer: C

// 3. Node.js uses which model?
// A) Blocking I/O
// B) Non-blocking I/O
// C) Multi-thread blocking
// D) None
// 👉 Answer: B

// 4. Which keyword is used to import modules in CommonJS?
// A) import
// B) include
// C) require
// D) using
// 👉 Answer: C

// 5. What does npm stand for?
// A) Node Package Manager
// B) New Package Manager
// C) Node Program Manager
// D) Network Package Manager
// 👉 Answer: A

// 🟡 Event Loop & Async

// 6. Node.js is:
// A) Multi-threaded
// B) Single-threaded
// C) Dual-threaded
// D) None
// 👉 Answer: B

// 7. Event loop is responsible for:
// A) Memory management
// B) Handling async callbacks
// C) Compiling JS
// D) File storage
// 👉 Answer: B

// 8. Which phase executes setTimeout callbacks?
// A) Poll
// B) Timers
// C) Check
// D) Close
// 👉 Answer: B

// 9. Which executes first?
// A) setTimeout
// B) setImmediate
// C) process.nextTick
// D) Promise
// 👉 Answer: C

// 10. Callback hell refers to:
// A) Too many callbacks nested
// B) Fast execution
// C) Memory leak
// D) Error handling
// 👉 Answer: A

// 🔵 Promises & Async

// 11. Promise states are:
// A) Pending, Resolved
// B) Pending, Fulfilled, Rejected
// C) Running, Done
// D) Start, End
// 👉 Answer: B

// 12. async/await is based on:
// A) Callbacks
// B) Promises
// C) Events
// D) Threads
// 👉 Answer: B

// 13. Which handles errors in async/await?
// A) catch
// B) try/catch
// C) error()
// D) reject()
// 👉 Answer: B

// 14. Promise.all() does:
// A) Runs sequentially
// B) Runs parallel
// C) Stops execution
// D) None
// 👉 Answer: B

// 15. If one promise fails in Promise.all?
// A) Ignore
// B) All fail
// C) Continue
// D) Retry
// 👉 Answer: B

// 🟣 Modules & Core Concepts

// 16. Core module example?
// A) fs
// B) express
// C) mongoose
// D) axios
// 👉 Answer: A

// 17. __dirname gives:
// A) File name
// B) Directory path
// C) Root path
// D) None
// 👉 Answer: B

// 18. module.exports is used for:
// A) Import
// B) Export
// C) Delete
// D) Execute
// 👉 Answer: B

// 19. Difference between require & import?
// A) Same
// B) require sync, import async
// C) require async, import sync
// D) None
// 👉 Answer: B

// 20. JSON files can be loaded using:
// A) require
// B) import
// C) fs
// D) All
// 👉 Answer: D

// 🟠 Express.js

// 21. Express is:
// A) Library
// B) Framework
// C) Engine
// D) Language
// 👉 Answer: B

// 22. Middleware is:
// A) Function
// B) Variable
// C) Object
// D) Class
// 👉 Answer: A

// 23. app.use() is used for:
// A) Routing
// B) Middleware
// C) Error
// D) DB
// 👉 Answer: B

// 24. HTTP methods include:
// A) GET
// B) POST
// C) PUT
// D) All
// 👉 Answer: D

// 25. req.params is used for:
// A) Query
// B) URL params
// C) Body
// D) Headers
// 👉 Answer: B

// 🔴 Advanced

// 26. Node.js uses which library internally?
// A) libuv
// B) libc
// C) boost
// D) async
// 👉 Answer: A

// 27. Worker threads are used for:
// A) I/O tasks
// B) CPU tasks
// C) DB
// D) UI
// 👉 Answer: B

// 28. Cluster module helps in:
// A) Debugging
// B) Multi-core usage
// C) Memory
// D) API
// 👉 Answer: B

// 29. Streams are used for:
// A) Buffering large data
// B) Real-time data
// C) Both
// D) None
// 👉 Answer: C

// 30. Which is NOT a stream type?
// A) Readable
// B) Writable
// C) Duplex
// D) Static
// 👉 Answer: D

// ⚡ Practical & Debugging

// 31. Memory leak occurs when:
// A) Memory unused not released
// B) Fast execution
// C) Slow CPU
// D) Network issue
// 👉 Answer: A

// 32. process.exit() does:
// A) Restart
// B) Exit
// C) Pause
// D) Sleep
// 👉 Answer: B

// 33. process.env is used for:
// A) Debug
// B) Environment variables
// C) Logs
// D) Errors
// 👉 Answer: B

// 34. Nodemon is used for:
// A) Production
// B) Auto restart server
// C) DB
// D) Testing
// 👉 Answer: B

// 35. Error-first callback pattern?
// A) (data, err)
// B) (err, data)
// C) (res, err)
// D) None
// 👉 Answer: B

// 🔥 Scenario Based

// 36. To handle heavy traffic:
// A) Cluster
// B) Threads
// C) Cache
// D) All
// 👉 Answer: D

// 37. Blocking code affects:
// A) UI
// B) Event loop
// C) DB
// D) Network
// 👉 Answer: B

// 38. Best for CPU heavy tasks:
// A) Node
// B) Worker threads
// C) Express
// D) npm
// 👉 Answer: B

// 39. JWT is used for:
// A) Styling
// B) Authentication
// C) Routing
// D) Logging
// 👉 Answer: B

// 40. CORS stands for:
// A) Cross-Origin Resource Sharing
// B) Cross Output Resource Sharing
// C) Code Origin Resource Sharing
// D) None
// 👉 Answer: A

// 🎯 Tricky

// 41. setImmediate runs in which phase?
// A) Timers
// B) Check
// C) Poll
// D) Close
// 👉 Answer: B

// 42. nextTick() runs:
// A) After event loop
// B) Before next event loop
// C) Timer phase
// D) Poll phase
// 👉 Answer: B

// 43. Default port of Node server?
// A) 3000
// B) 8080
// C) No default
// D) 5000
// 👉 Answer: C

// 44. Which is synchronous?
// A) fs.readFile
// B) fs.readFileSync
// C) setTimeout
// D) Promise
// 👉 Answer: B

// 45. EventEmitter is used for:
// A) Routing
// B) Events
// C) DB
// D) Middleware
// 👉 Answer: B

// 🚀 Final 5 (Interview Killers)

// 46. Node.js is best for:
// A) CPU tasks
// B) I/O tasks
// C) Machine learning
// D) Gaming
// 👉 Answer: B

// 47. Why Node is fast?
// A) Multi-thread
// B) Event loop + V8
// C) DB
// D) UI
// 👉 Answer: B

// 48. What is REPL?
// A) Runtime
// B) Read Eval Print Loop
// C) API
// D) Server
// 👉 Answer: B

// 49. Buffer is used for:
// A) Strings
// B) Binary data
// C) JSON
// D) API
// 👉 Answer: B

// 50. Node.js applications are:
// A) Blocking
// B) Non-blocking
// C) Slow
// D) Static
// 👉 Answer: B