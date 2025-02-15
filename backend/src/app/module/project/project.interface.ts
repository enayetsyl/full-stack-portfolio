export interface IProject {
  title: string;
  image: string;
  description?: string;
  summary?: string;
  liveLink?: string;
  gitHubLink?: string;
  docLink?: string;
  videoLink?: string;
  stack: string[];
  category: string[];
  technologies: string[];
}
