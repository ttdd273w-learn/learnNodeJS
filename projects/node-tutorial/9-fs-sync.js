// interacting with the file system

// There are two flavors
// Synchronously - blocking, and asynchronously - nonblocking

// import fs from "fs"; doesn't work

const { readFileSync, writeFileSync, read } = require("fs");
console.log("start");
// second parameter is the encoding
const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

console.log(first, second);
// second parameter is the value to write
// if file is not there, node will create one
// if file is there, node will rewrite the entire thing
// the flag will append the values to it
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: ${first}, ${second}`,
  { flag: "a" }
);
console.log("done with this task");
console.log("starting with the next one");
