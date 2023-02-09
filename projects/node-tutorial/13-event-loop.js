// Second Example: setTimeOut is asynchronous

console.log("first");

setTimeout(() => {
  console.log("second");
}, 0);

console.log("third");

// Third Example: setInterval

setInterval(() => {
  console.log("hello word");
}, 2000);
console.log("I will run first");

// will always stay alive, and "I will run first" will run before the function

// Fourth example: server, http module
const http = require("http");

const server = http.createServer((req, res) => {
  console.log("request event");
  res.end("Hello world");
});

server.listen(5000, () => {
  console.log(`Server listening on port: 5000....`);
});
