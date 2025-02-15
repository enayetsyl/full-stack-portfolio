"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectController = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendImageToCloudinary_1 = require("../../utils/sendImageToCloudinary");
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const project_service_1 = require("./project.service");
// Create a new project
const CreateProject = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, summary, liveLink, gitHubLink, docLink, videoLink, stack, category, technologies, } = req.body;
    const imageFile = req.file;
    if (!imageFile) {
        throw new Error("Image file is required");
    }
    const cloudinaryResult = yield (0, sendImageToCloudinary_1.sendImageToCloudinary)(imageFile.originalname, imageFile.path);
    const payload = {
        title,
        description,
        summary,
        liveLink,
        gitHubLink,
        docLink, videoLink,
        stack: stack.split(",").map((s) => s.trim()),
        category: category.split(",").map((c) => c.trim()),
        technologies: technologies.split(",").map((t) => t.trim()),
        image: cloudinaryResult.secure_url,
    };
    const result = yield project_service_1.ProjectService.CreateProject(payload);
    (0, sendResponse_1.default)(res, {
        statusCode: 201,
        success: true,
        message: "Project created successfully",
        data: result,
    });
}));
// Edit a project
const EditProject = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { title, description, summary, liveLink, gitHubLink, stack, docLink, videoLink, category, technologies, } = req.body;
    const imageFile = req.file;
    let payload = {
        title,
        description,
        summary,
        liveLink,
        gitHubLink, docLink, videoLink,
        stack: stack === null || stack === void 0 ? void 0 : stack.split(",").map((s) => s.trim()),
        category: category === null || category === void 0 ? void 0 : category.split(",").map((c) => c.trim()),
        technologies: technologies === null || technologies === void 0 ? void 0 : technologies.split(",").map((t) => t.trim()),
    };
    if (imageFile) {
        const cloudinaryResult = yield (0, sendImageToCloudinary_1.sendImageToCloudinary)(imageFile.originalname, imageFile.path);
        payload = Object.assign(Object.assign({}, payload), { image: cloudinaryResult.secure_url });
    }
    const result = yield project_service_1.ProjectService.EditProject(id, payload);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Project updated successfully",
        data: result,
    });
}));
// Get all projects
const GetAllProjects = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield project_service_1.ProjectService.GetAllProjects();
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Projects fetched successfully",
        data: result,
    });
}));
// Delete a project
const DeleteProject = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield project_service_1.ProjectService.DeleteProject(id);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Project deleted successfully",
        data: result,
    });
}));
exports.ProjectController = {
    CreateProject,
    GetAllProjects,
    EditProject,
    DeleteProject,
};
