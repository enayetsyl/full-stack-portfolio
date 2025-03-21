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
exports.SkillService = void 0;
const skill_model_1 = require("./skill.model");
const CreateSkill = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    // Create a new skill document
    const result = yield skill_model_1.Skill.create(payload);
    return result;
});
const GetAllSkills = () => __awaiter(void 0, void 0, void 0, function* () {
    // Retrieve all skills from the database
    const result = yield skill_model_1.Skill.find({}).lean();
    return result;
});
const DeleteSkill = (id) => __awaiter(void 0, void 0, void 0, function* () {
    // Find the skill by ID and delete it
    const result = yield skill_model_1.Skill.findByIdAndDelete(id);
    if (!result) {
        throw new Error('Skill not found');
    }
    return result;
});
exports.SkillService = {
    CreateSkill,
    GetAllSkills,
    DeleteSkill,
};
