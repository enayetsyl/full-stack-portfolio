import { ISkill } from "./skill.interface";
import { Skill } from "./skill.model";


const CreateSkill = async (payload: ISkill) => {
  // Create a new skill document
  const result = await Skill.create(payload);
  return result;
};

const GetAllSkills = async () => {
  // Retrieve all skills from the database
  const result = await Skill.find({}).lean();
  return result;
};

const DeleteSkill = async (id: string) => {
  // Find the skill by ID and delete it
  const result = await Skill.findByIdAndDelete(id);
  if (!result) {
    throw new Error('Skill not found');
  }
  return result;
};

export const SkillService = {
  CreateSkill,
  GetAllSkills,
  DeleteSkill,
};
