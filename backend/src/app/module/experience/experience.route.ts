/* eslint-disable @typescript-eslint/no-explicit-any */
import express from 'express';
import { ExperienceController } from './experience.controller';



const router = express.Router();

router.post("/create-experience", ExperienceController.CreateExperience)
router.get("/get-all-experience", ExperienceController.GetAllExperience)
router.put('/update-experience/:id', ExperienceController.UpdateExperience);




export const ExperienceRoutes = router;