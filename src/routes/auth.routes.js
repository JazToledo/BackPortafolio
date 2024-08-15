import { Router } from "express";
import { validateToken } from "../middlewares/validateToken.middleware.js";
import {
  signupUser,
  authenticateUser,
  logout,
  verifyToken,
  profile,
} from "../controllers/auth.controller.js";
import {
  getUsers,
  getUserById,
  registerUser,
  updateUser,
  deleteUser,
} from "../controllers/user.controller.js";
import {
  getAllTecnologies,
  getTecnologyById,
  createTecnology,
  updateTecnology,
  deleteTecnology,
} from "../controllers/tecnology.controller.js";
import {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
} from "../controllers/project.controller.js";

const router = Router();

router.post("/signup", signupUser);

router.post("/login", authenticateUser);

router.post("/logout", logout);

router.get("/verify", validateToken, verifyToken);

router.get("/profile", validateToken, profile);

// User routes
router.get("/users", getUsers);

router.get("/user", validateToken, getUserById);

router.post("/user", registerUser);

router.put("/user", validateToken, updateUser);

router.delete("/user/:id", deleteUser);

// Tecnologies routes
router.get("/tecnology", getAllTecnologies);

router.get("/tecnology/:id", getTecnologyById);

router.post("/tecnology", createTecnology);

router.put("/tecnology/:id", updateTecnology);

router.delete("/tecnology/:id", deleteTecnology);

// Projects routes
router.get("/projects", getAllProjects);

router.get("project/:id", getProjectById);

router.post("/project", createProject);

router.put("/project/:id", updateProject);

router.delete("/project/:id", deleteProject);

export default router;
