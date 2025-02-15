"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = void 0;
const mongoose_1 = require("mongoose");
const validCategories = ['next', 'react', 'typescript', 'tailwind', 'shadcn', 'zod', 'express', 'prisma', 'redux', 'other'];
const validStack = ["MERN", "PERN", "FULL", "FRONTEND", "BACKEND", "OTHER"];
const projectSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        trim: true,
    },
    summary: {
        type: String,
        trim: true,
    },
    liveLink: {
        type: String,
        default: null,
    },
    docLink: {
        type: String,
        default: null,
    },
    videoLink: {
        type: String,
        default: null,
    },
    gitHubLink: {
        type: String,
        default: null,
    },
    stack: {
        type: [String],
        validate: {
            validator: (values) => values.every((value) => validStack.includes(value)),
            message: (props) => `${props.value} is not a valid stack item`,
        },
        required: true,
    },
    category: {
        type: [String],
        validate: {
            validator: (values) => values.every((value) => validCategories.includes(value)),
            message: (props) => `${props.value} is not a valid category`,
        },
        required: true,
    },
    technologies: {
        type: [String],
        required: true,
    },
}, {
    timestamps: true,
});
exports.Project = (0, mongoose_1.model)('Project', projectSchema);
