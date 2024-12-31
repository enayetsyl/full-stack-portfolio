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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectService = void 0;
const project_model_1 = require("./project.model");
// Create a new project
const CreateProject = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield project_model_1.Project.create(payload);
    return result;
});
// Get all projects
const GetAllProjects = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield project_model_1.Project.find().lean();
    return result;
});
// Edit a project
const EditProject = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield project_model_1.Project.findByIdAndUpdate(id, payload, { new: true });
    if (!result) {
        throw new Error('Project not found');
    }
    return result;
});
// Delete a project
const DeleteProject = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield project_model_1.Project.findByIdAndDelete(id);
    if (!result) {
        throw new Error('Project not found');
    }
    return result;
});
exports.ProjectService = {
    CreateProject,
    GetAllProjects,
    EditProject,
    DeleteProject,
};
