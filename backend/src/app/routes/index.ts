import { Router } from 'express';
import { ExperienceRoutes } from '../module/experience/experience.route';
import { SkillRoutes } from '../module/skill/skill.route';
import { ProjectRoutes } from '../module/project/project.route';
import { BlogRoutes } from '../module/blog/blog.route';


const router = Router();

const moduleRoutes = [
  {
    path: '/experience',
    route: ExperienceRoutes,
  }, 
  {
    path: '/skill',
    route: SkillRoutes,
  },  
  {
    path: '/project',
    route: ProjectRoutes,
  }, 
  {
    path: '/blog',
    route: BlogRoutes,
  }, 
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;