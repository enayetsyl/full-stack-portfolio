"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillRoutes = void 0;
const express_1 = __importDefault(require("express"));
const skill_controller_1 = require("./skill.controller");
const sendImageToCloudinary_1 = require("../../utils/sendImageToCloudinary");
const router = express_1.default.Router();
// Route to create a new skill
router.post("/", sendImageToCloudinary_1.upload.single("image"), skill_controller_1.SkillController.CreateSkill);
// Route to fetch all skills
router.get('/', skill_controller_1.SkillController.GetAllSkills);
// Delete a skill by ID
router.delete('/:id', skill_controller_1.SkillController.DeleteSkill);
exports.SkillRoutes = router;
