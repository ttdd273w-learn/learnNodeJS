// Modules

const john = "john";
const peter = "peter";

const sayHi = (name) => {
  console.log(`Hello there ${name}`);
};

sayHi("susan");
sayHi(john);
sayHi(peter);

// CommonJS, every file is module (by default)
// Modules - encapsulated code (only share minimum)

const secret = "SUPER SECRET";

module.exports = { john, peter };

// OS Module
const os = require("os");
// user info
console.log(os.userInfo());
// returns the system update in seconds
console.log(os.uptime() / (60 * 60));

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);
