import { Router } from 'express';
import { ExperienceRoutes } from '../module/experience/experience.route';
import { SkillRoutes } from '../module/skill/skill.route';
import { ProjectRoutes } from '../module/project/project.route';


const router = Router();

const moduleRoutes = [
  {
    path: '/experience',
    route: ExperienceRoutes,
  },  // This is a sample replace it with your actual path and route.
  {
    path: '/skill',
    route: SkillRoutes,
  },  // This is a sample replace it with your actual path and route.
  {
    path: '/project',
    route: ProjectRoutes,
  },  // This is a sample replace it with your actual path and route.
  // Todo add necessary path and route in this array
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));  // This will automatically loop your routes that you will add in the moduleRoutes array

export default router;