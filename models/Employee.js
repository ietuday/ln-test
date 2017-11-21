var mongoose = require('mongoose');

var EmployeeSchema = new mongoose.Schema({
    name: String,
    dob: Date,
    email: String,
    pic: String,
    gender: String,
    phone: Number,
    address: String,
    username: String,
    password: String,
    updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Employee', EmployeeSchema);