import mongoose from "mongoose";

const educationSchema = new mongoose.Schema({
  degree: {
    type: String,
    required: true
  },
  college: {
    type: String,
    required: true
  },
  subject: {
    type: [String],
    required: true
  },
  para: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: true
  },
  cgpa: {
    type: Number,
    required: true
  }
});

const Educations = mongoose.model("educations", educationSchema);

export default Educations;