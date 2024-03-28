const express = require("express")
const [getUsers, addUser, deleteUser, userLogin] = require("../controllers/user.js");

const router = express.Router()

router.post("/login", userLogin)
router.get("/users", getUsers)
router.post("/users", addUser)
router.delete("/users", deleteUser)

// router.post("/", addUser)

// router.put("/:id", updateUser)

// router.delete("/:id", deleteUser)

module.exports = router