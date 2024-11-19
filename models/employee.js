const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please Enter emplloyee name"],
      trim: true,
      maxLength: [100, "Name should not exceed 100 characters."],
    },
    phone: {
      type: Number,
      required: [true, "Please Enter employee phone number"],
    },
    address: {
      type: String,
      required: [true, "Please Enter employee address."],
    },
    position: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Employee", employeeSchema);
