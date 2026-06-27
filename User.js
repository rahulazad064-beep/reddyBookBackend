const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    emailOrNumber: { type: String},
    app_name: { type: String},
    password: { type: String},
    mobileNumber: { type: String}
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
