const { Router } = require("express");
const userController = require("../controllers/user.controller");
const { signupUser } = require("../controllers/auth.controller");

const router = Router();

router.post("/auth", signupUser);

router.get("/users", userController.getAllUsers);

router.post("/users", userController.createUser);

module.exports = router;
