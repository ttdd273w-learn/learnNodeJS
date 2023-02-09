const mongoose = require("mongoose");

const connectDB = (url) => {
  // these parameters will remove the deprecated warnings
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
