/* eslint-disable @typescript-eslint/no-explicit-any */
import express from 'express';
import { ExperienceController } from './experience.controller';



const router = express.Router();

router.post("/create-experience", ExperienceController.CreateExperience)
router.post("/get-all-experience", ExperienceController.GetAllExperience)



export const ExperienceRoutes = router;