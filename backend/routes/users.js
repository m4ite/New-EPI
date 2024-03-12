const express = require("express")
const [getUsers, addUser] = require("../controllers/user.js");

const router = express.Router()

router.get("/users", getUsers)
router.post("/users", addUser)

// router.post("/", addUser)

// router.put("/:id", updateUser)

// router.delete("/:id", deleteUser)

module.exports = router