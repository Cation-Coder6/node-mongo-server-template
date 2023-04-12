const User = require("../../models/User")

const register = async (req, res) => {

    const { email, name, password } = req.body;

    const emailAlreadyExists = await User.findOne({ email });
    if (emailAlreadyExists) {
        res.status(400).json("Email already exists");
    }

    const user = await User.create({
        name,
        email,
        password,

    });

    res.status(202).json({
        msg: user,
    });
}
module.exports = register;