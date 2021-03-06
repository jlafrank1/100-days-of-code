const mongoose = require("mongoose");

const projectSchema = mongoose.Schema(
  {
    day: { type: Number },
    title: { type: String },
    github: { type: String },
    app: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);
