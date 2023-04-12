const User = require("../../models/User")

const login = async(req, res) => {
    const { name, password } = req.body;

    if (!name || !password) res.status(404).json({ "message": "Thou shalt not pass." })
    const user = await User.findOne({ name })
    if (!user) res.status(404).json({ "message": "Thou does not exist." })
    const passcorrect = await user.comparePassword(password);
    if (!passcorrect) res.status(401).json({ "message": "Thou art an imposter." })
    else res.status(200).json({ "user": user })
};
module.exports = login;