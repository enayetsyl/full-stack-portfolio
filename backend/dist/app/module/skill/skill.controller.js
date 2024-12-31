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
exports.SkillController = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendImageToCloudinary_1 = require("../../utils/sendImageToCloudinary");
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const skill_service_1 = require("./skill.service");
// Create a new skill
const CreateSkill = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = req.body;
    // Ensure an image file is uploaded
    if (!req.file) {
        throw new Error("Image is required");
    }
    // Upload image to Cloudinary
    const imageUploadResult = yield (0, sendImageToCloudinary_1.sendImageToCloudinary)(`skills/${Date.now()}-${req.file.originalname}`, req.file.path);
    console.log('image uplaod', imageUploadResult);
    // Save skill with the Cloudinary image URL
    const newSkill = {
        name,
        image: imageUploadResult.secure_url, // Save the URL returned from Cloudinary
    };
    const result = yield skill_service_1.SkillService.CreateSkill(newSkill);
    (0, sendResponse_1.default)(res, {
        statusCode: 201,
        success: true,
        message: 'Skill created successfully',
        data: result,
    });
}));
// Get all skills
const GetAllSkills = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield skill_service_1.SkillService.GetAllSkills();
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: 'Skills fetched successfully',
        data: result,
    });
}));
// Delete a skill
const DeleteSkill = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield skill_service_1.SkillService.DeleteSkill(id);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: 'Skill deleted successfully',
        data: result,
    });
}));
exports.SkillController = {
    CreateSkill,
    GetAllSkills,
    DeleteSkill,
};
