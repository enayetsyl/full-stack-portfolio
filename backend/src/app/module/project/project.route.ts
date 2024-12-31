import express from 'express';
import { ProjectController } from './project.controller';

const router = express.Router();

// Create a new project
router.post('/create-project', ProjectController.CreateProject);

// Get all projects
router.get('/get-all-projects', ProjectController.GetAllProjects);

// Edit a project
router.put('/edit-project/:id', ProjectController.EditProject);

// Delete a project
router.delete('/delete-project/:id', ProjectController.DeleteProject);

export const ProjectRoutes = router;
