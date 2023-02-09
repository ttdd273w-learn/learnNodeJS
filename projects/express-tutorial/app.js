const express = require("express");
const { people } = require("./data.js");
const app = express();
const peopleRouter = require("./routes/people.js");
const authRouter = require("./routes/auth.js");

// static assets
app.use(express.static("./methods-public"));
//parse javascript
app.use(express.json());
//parse form data, extended flag determines the type of library you can choose
app.use(express.urlencoded({ extended: false }));

app.use("/api/people", peopleRouter);
app.use("/login", authRouter);

app.listen(5000, () => {
  console.log(`Server is listening on port 5000...`);
});
