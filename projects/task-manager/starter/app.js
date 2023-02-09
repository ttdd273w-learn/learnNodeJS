const express = require("express");
const app = express();
const tasks = require("./routes/tasks.js");
const notFound = require("./middleware/not-found.js");
const errorHandlerMiddleware = require("./middleware/error-handler.js");
const connectDB = require("./db/connect.js");
require("dotenv").config();

// middleware
app.use(express.static("./public"));
app.use(express.json());

// routes
app.use("/api/v1/tasks", tasks);

app.use(notFound);
app.use(errorHandlerMiddleware);

// you can change the port by typing the following command
// PORT = 6000 node app.js
const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();

// ---------------- Notes -----------------------

// routes
// app.get("/hello", (req, res) => {
//   res.send("Task Manager App");
// });

// app.get("/api/v1/tasks", ); // get all the tasks
// app.post("/api/v1/tasks"); // create a new task
// app.get("/api/v1/tasks/:id"); // get a single task
// app.patch("/api/v1/tasks/:id"); // update task
// app.delete("/api/v1/tasks/:id"); // delete task
