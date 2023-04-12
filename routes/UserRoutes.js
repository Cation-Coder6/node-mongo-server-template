const express = require("express");
const router = express.Router();

const { getUsers, getUserById, updateUsers, deleteUser } = require("../controllers/user")

router.get("/getAllUsers", getUsers);
router.get("/getUser/:id", getUserById);
router.patch("/updateUser/:id", updateUsers);
router.delete("/deleteUser/:id", deleteUser)

module.exports = router;