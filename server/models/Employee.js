const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  mobile: { type: String, required: true },
  gender: { type: String, required: true },
  position: { type: String, required: true },
  address: { type: String, required: true },
  startDate: { type: Date, required: true },
});

module.exports = mongoose.model('Employee', employeeSchema);
