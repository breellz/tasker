const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost:27017/tasker",
  {
    useNewUrlParser: true,
  },
  (error) => {
    if (error) {
      return console.log("Error connecting to database");
    }
    console.log("Connected to database");
  }
);
