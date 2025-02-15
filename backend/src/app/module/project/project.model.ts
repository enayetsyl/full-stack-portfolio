import { Schema, model } from 'mongoose';
import { IProject } from './project.interface';

const validCategories = ['next', 'react', 'typescript', 'tailwind', 'shadcn', 'zod', 'express', 'prisma', 'redux', 'api', 'other'];

const validStack = [ "MERN", "PERN", "FULL", "FRONTEND", "BACKEND", "OTHER"]

const projectSchema = new Schema<IProject>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      trim: true,
    },
    summary: {
      type: String,
      trim: true,
    },
    liveLink: {
      type: String,
      default: null,
    },
    docLink: {
      type: String,
      default: null,
    },
    videoLink: {
      type: String,
      default: null,
    },
    gitHubLink: {
      type: String,
      default: null,
    },
    stack: {
      type: [String],
      validate: {
        validator: (values: string[]) => values.every((value) => validStack.includes(value)),
        message: (props: any) => `${props.value} is not a valid stack item`,
      },
      required: true,
    },
    category: {
      type: [String],
      validate: {
        validator: (values: string[]) => values.every((value) => validCategories.includes(value)),
        message: (props: any) => `${props.value} is not a valid category`,
      },
      required: true,
    },
    technologies: {
      type: [String],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Project = model<IProject>('Project', projectSchema);
