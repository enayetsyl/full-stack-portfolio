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

const UpdateExperience = async (id: string, payload: Partial<IExperience>) => {
  const result = await Experience.findByIdAndUpdate(id, payload, { new: true });
  if (!result) {
    throw new Error('Experience not found');
  }
  return result;
};

export const ExperienceService = {
  CreateExperience,
  GetAllExperience,
  UpdateExperience
};
