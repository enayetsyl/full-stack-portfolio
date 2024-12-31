"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const experience_route_1 = require("../module/experience/experience.route");
const skill_route_1 = require("../module/skill/skill.route");
const project_route_1 = require("../module/project/project.route");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: '/experience',
        route: experience_route_1.ExperienceRoutes,
    }, // This is a sample replace it with your actual path and route.
    {
        path: '/skill',
        route: skill_route_1.SkillRoutes,
    }, // This is a sample replace it with your actual path and route.
    {
        path: '/project',
        route: project_route_1.ProjectRoutes,
    }, // This is a sample replace it with your actual path and route.
    // Todo add necessary path and route in this array
];
moduleRoutes.forEach((route) => router.use(route.path, route.route)); // This will automatically loop your routes that you will add in the moduleRoutes array
exports.default = router;
