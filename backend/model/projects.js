import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  topic: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  bool: {
    type: Boolean,
    required: true
  }
});

const project = mongoose.model("projects", projectSchema);

export default project;