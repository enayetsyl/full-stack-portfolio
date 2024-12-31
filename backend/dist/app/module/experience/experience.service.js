"use strict";
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
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
exports.ExperienceService = void 0;
const experience_model_1 = require("./experience.model");
const CreateExperience = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    // Create new experience document
    const result = yield experience_model_1.Experience.create(payload);
    return result;
});
const GetAllExperience = () => __awaiter(void 0, void 0, void 0, function* () {
    // Get all experiences, sorted by startDate in descending order (newest first)
    const result = yield experience_model_1.Experience.find({}).sort({ startDate: -1 }).lean();
    return result;
});
const UpdateExperience = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield experience_model_1.Experience.findByIdAndUpdate(id, payload, { new: true });
    if (!result) {
        throw new Error('Experience not found');
    }
    return result;
});
exports.ExperienceService = {
    CreateExperience,
    GetAllExperience,
    UpdateExperience
};
