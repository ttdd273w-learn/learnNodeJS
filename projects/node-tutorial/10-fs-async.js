// now the async version

const { readFile, writeFile } = require("fs");
console.log("start");
// the async version of it requires a callback function for it to execute correctly
// we get a buffer if we don't add an encoding
readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `Here is the result: ${first}, ${second}`,
      { flag: "a" },
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
        console.log("done with this task");
      }
    );
  });
});
console.log("start with the next task");
