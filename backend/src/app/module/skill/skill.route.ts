import express from 'express';
import { SkillController } from './skill.controller';
import { upload } from '../../utils/sendImageToCloudinary';


const router = express.Router();

// Route to create a new skill
router.post("/", upload.single("image"), SkillController.CreateSkill);

// Route to fetch all skills
router.get('/', SkillController.GetAllSkills);

// Delete a skill by ID
router.delete('/:id', SkillController.DeleteSkill);

export const SkillRoutes = router;
