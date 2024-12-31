/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { IExperience } from "./experience.interface";
import { Experience } from "./experience.model";

const CreateExperience = async (payload: IExperience) => {
  // Create new experience document
  const result = await Experience.create(payload);
  return result;
};

const GetAllExperience = async () => {
  // Get all experiences, sorted by startDate in descending order (newest first)
  const result = await Experience.find({}).sort({ startDate: -1 }).lean();
  return result;
};

export const ExperienceService = {
  CreateExperience,
  GetAllExperience,
};
