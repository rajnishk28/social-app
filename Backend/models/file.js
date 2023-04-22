const mongoose = require("mongoose");

const FileSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },

    description: {
      type: String,
    },
    file: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
const Filemodel = mongoose.model("file", FileSchema);

module.exports = Filemodel;
