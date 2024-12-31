import  { Schema,  model } from 'mongoose';
import { ISkill } from './skill.interface';


const SkillSchema = new Schema<ISkill>({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String, // Store the image URL
    required: true,
  },
});

export const Skill = model<ISkill>('Skill', SkillSchema);

