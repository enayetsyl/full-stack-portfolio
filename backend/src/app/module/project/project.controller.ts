import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ProjectService } from "./project.service";

// Create a new project
const CreateProject = catchAsync(async (req, res) => {
  const result = await ProjectService.CreateProject(req.body);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Project created successfully',
    data: result,
  });
});

// Get all projects
const GetAllProjects = catchAsync(async (req, res) => {
  const result = await ProjectService.GetAllProjects();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Projects fetched successfully',
    data: result,
  });
});

// Edit a project
const EditProject = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ProjectService.EditProject(id, req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Project updated successfully',
    data: result,
  });
});

// Delete a project
const DeleteProject = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ProjectService.DeleteProject(id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Project deleted successfully',
    data: result,
  });
});

export const ProjectController = {
  CreateProject,
  GetAllProjects,
  EditProject,
  DeleteProject,
};
