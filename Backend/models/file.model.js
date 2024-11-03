const mongoose = require("mongoose");
const User = require("./user.model")

const FileSchema = new mongoose.Schema(
  {
    description: {
      type: String,
    },
    file: {
      type: String,
      required: true
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    }
  },
  {
    timestamps: true,
  }
);
const Filemodel = mongoose.model("File", FileSchema);

module.exports = Filemodel;
