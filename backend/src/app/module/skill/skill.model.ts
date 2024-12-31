import  { Schema,  model } from 'mongoose';
import { ISkill } from './skill.interface';


const SkillSchema = new Schema<ISkill>({
  name: {
    type: String,
    required: true,
    trim: true,
  },
});

export const Skill = model<ISkill>('Skill', SkillSchema);

