"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Skill = void 0;
const mongoose_1 = require("mongoose");
const SkillSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    image: {
        type: String, // Store the image URL
        required: true,
    },
});
exports.Skill = (0, mongoose_1.model)('Skill', SkillSchema);
