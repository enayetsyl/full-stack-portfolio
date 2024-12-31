import catchAsync from "../../utils/catchAsync";
import { sendImageToCloudinary } from "../../utils/sendImageToCloudinary";
import sendResponse from "../../utils/sendResponse";
import { IProject } from "./project.interface";
import { ProjectService } from "./project.service";

// Create a new project
const CreateProject = catchAsync(async (req, res) => {
  const {
    title,
    description,
    summary,
    liveLink,
    gitHubLink,
    stack,
    category,
    technologies,
  } = req.body;
  const imageFile = req.file as Express.Multer.File;

  if (!imageFile) {
    throw new Error("Image file is required");
  }

  const cloudinaryResult = await sendImageToCloudinary(
    imageFile.originalname,
    imageFile.path
  );

  const payload = {
    title,
    description,
    summary,
    liveLink,
    gitHubLink,
    stack: stack.split(",").map((s: string) => s.trim()),
    category: category.split(",").map((c: string) => c.trim()),
    technologies: technologies.split(",").map((t: string) => t.trim()),
    image: cloudinaryResult.secure_url as string,
  };

  const result = await ProjectService.CreateProject(payload);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Project created successfully",
    data: result,
  });
});

// Edit a project
const EditProject = catchAsync(async (req, res) => {
  const { id } = req.params;
  const {
    title,
    description,
    summary,
    liveLink,
    gitHubLink,
    stack,
    category,
    technologies,
  } = req.body;
  const imageFile = req.file as Express.Multer.File;

  let payload : Partial<IProject> = {
    title,
    description,
    summary,
    liveLink,
    gitHubLink,
    stack: stack?.split(",").map((s: string) => s.trim()),
    category: category?.split(",").map((c: string) => c.trim()),
    technologies: technologies?.split(",").map((t: string) => t.trim()),
  };

  if (imageFile) {
    const cloudinaryResult = await sendImageToCloudinary(
      imageFile.originalname,
      imageFile.path
    );
    payload = { ...payload, image: cloudinaryResult.secure_url as string };
  }

  const result = await ProjectService.EditProject(id, payload);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Project updated successfully",
    data: result,
  });
});

// Get all projects
const GetAllProjects = catchAsync(async (req, res) => {
  const result = await ProjectService.GetAllProjects();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Projects fetched successfully",
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
    message: "Project deleted successfully",
    data: result,
  });
});

export const ProjectController = {
  CreateProject,
  GetAllProjects,
  EditProject,
  DeleteProject,
};
