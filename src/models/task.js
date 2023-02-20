const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const taskSchema = new mongoose.Schema(
  {
    owner: {
      type: ObjectId,
      required: true,
      ref: "User",
    },
    task: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
