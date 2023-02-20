const express = require("express");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

require("./db/mongoose");

const app = express();

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
