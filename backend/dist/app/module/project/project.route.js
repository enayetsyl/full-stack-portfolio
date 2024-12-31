"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectRoutes = void 0;
const express_1 = __importDefault(require("express"));
const project_controller_1 = require("./project.controller");
const sendImageToCloudinary_1 = require("../../utils/sendImageToCloudinary");
const router = express_1.default.Router();
// Create a new project with an image
router.post("/create-project", sendImageToCloudinary_1.upload.single("image"), project_controller_1.ProjectController.CreateProject);
// Get all projects
router.get('/get-all-projects', project_controller_1.ProjectController.GetAllProjects);
// Edit a project with an optional image
router.put("/edit-project/:id", sendImageToCloudinary_1.upload.single("image"), project_controller_1.ProjectController.EditProject);
// Delete a project
router.delete('/delete-project/:id', project_controller_1.ProjectController.DeleteProject);
exports.ProjectRoutes = router;
