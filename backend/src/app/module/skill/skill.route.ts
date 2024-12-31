import express from 'express';
import { SkillController } from './skill.controller';


const router = express.Router();

// Route to create a new skill
router.post('/', SkillController.CreateSkill);

// Route to fetch all skills
router.get('/', SkillController.GetAllSkills);

// Delete a skill by ID
router.delete('/:id', SkillController.DeleteSkill);

export const SkillRoutes = router;
