"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Experience = void 0;
const mongoose_1 = require("mongoose");
const experienceSchema = new mongoose_1.Schema({
    companyName: {
        type: String,
        required: true,
        trim: true,
    },
    position: {
        type: String,
        required: true,
        trim: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        default: null,
    },
    location: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: [String],
        required: true,
    },
    technologies: {
        type: [String],
        required: true,
    },
    responsibilities: {
        type: [String],
        required: true,
    },
    isCurrentlyWorking: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
});
exports.Experience = (0, mongoose_1.model)('Experience', experienceSchema);
