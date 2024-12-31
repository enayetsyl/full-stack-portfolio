"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceRoutes = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const express_1 = __importDefault(require("express"));
const experience_controller_1 = require("./experience.controller");
const router = express_1.default.Router();
router.post("/create-experience", experience_controller_1.ExperienceController.CreateExperience);
router.get("/get-all-experience", experience_controller_1.ExperienceController.GetAllExperience);
router.put('/update-experience/:id', experience_controller_1.ExperienceController.UpdateExperience);
exports.ExperienceRoutes = router;
