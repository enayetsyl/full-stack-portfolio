"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const experience_route_1 = require("../module/experience/experience.route");
const skill_route_1 = require("../module/skill/skill.route");
const project_route_1 = require("../module/project/project.route");
const blog_route_1 = require("../module/blog/blog.route");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: '/experience',
        route: experience_route_1.ExperienceRoutes,
    },
    {
        path: '/skill',
        route: skill_route_1.SkillRoutes,
    },
    {
        path: '/project',
        route: project_route_1.ProjectRoutes,
    },
    {
        path: '/blog',
        route: blog_route_1.BlogRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
