const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt")

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Tell me your name. Please. Im Very Single."],
    },

    email: {
        type: String,
        unique: true,
        required: [true, "Please give me your Email i promise to not send you evil meow pics"],
        validate: {
            validator: validator.isEmail,
            message: "Please provide valid email. How am i supposed to send you pics of evil meow",
        },
    },

    password: {
        type: String,
        required: [true, "Please provide password. Secrecy is paramount for evil meow."],
        minlength: 6,
    }
});

UserSchema.pre("save", async function () {
    if (!this.isModified("password")) return;
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.comparePassword = async function (canditatePassword) {
    const isMatch = await bcrypt.compare(canditatePassword, this.password);
    return isMatch;
};

module.exports = mongoose.model("User", UserSchema);