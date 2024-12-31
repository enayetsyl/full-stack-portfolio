import { IProject } from "./project.interface";
import { Project } from "./project.model";


// Create a new project
const CreateProject = async (payload: IProject) => {
  const result = await Project.create(payload);
  return result;
};

// Get all projects
const GetAllProjects = async () => {
  const result = await Project.find().lean();
  return result;
};

// Edit a project
const EditProject = async (id: string, payload: Partial<IProject>) => {
  const result = await Project.findByIdAndUpdate(id, payload, { new: true });
  if (!result) {
    throw new Error('Project not found');
  }
  return result;
};

// Delete a project
const DeleteProject = async (id: string) => {
  const result = await Project.findByIdAndDelete(id);
  if (!result) {
    throw new Error('Project not found');
  }
  return result;
};

export const ProjectService = {
  CreateProject,
  GetAllProjects,
  EditProject,
  DeleteProject,
};
