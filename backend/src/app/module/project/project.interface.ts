export interface IProject {
  title: string;
  image: string; // URL for the project's main image
  description?: string; // Detailed description of the project
  summary?: string; // A short summary of the project
  liveLink?: string; // Optional link to the live project (e.g., deployed site)
  gitHubLink?: string; // Optional GitHub repository link
  docLink?: string; // Optional link to project documentation
  videoLink?: string; // Optional link to a video demo of the project
  stack: string[]; // Limited to specified values
  category: string[]; // Limited to specified values
  technologies: string[]; // Array of additional technologies used
}
