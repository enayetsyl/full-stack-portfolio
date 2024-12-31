import express from 'express';
import { ProjectController } from './project.controller';
import { upload } from '../../utils/sendImageToCloudinary';

const router = express.Router();

// Create a new project with an image
router.post("/create-project", upload.single("image"), ProjectController.CreateProject);

// Get all projects
router.get('/get-all-projects', ProjectController.GetAllProjects);

// Edit a project with an optional image
router.put("/edit-project/:id", upload.single("image"), ProjectController.EditProject);

// Delete a project
router.delete('/delete-project/:id', ProjectController.DeleteProject);

export const ProjectRoutes = router;
