const { createReadStream } = require("fs");

const stream = createReadStream("../content/big.txt", {
  highWaterMark: 90000,
  encoding: "utf-8",
});

//default 64kd
// last buffer - remainder
// highWaterMark - control the size

// returns you chunks of data
stream.on("data", (result) => {
  console.log(result);
});

stream.on("error", (error) => console.log(error));
