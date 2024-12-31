export interface IExperience {
  companyName: string;
  position: string;
  startDate: Date;
  endDate: Date | null; // null for current positions
  location: string;
  description: string[];
  technologies: string[];
  responsibilities: string[];
  isCurrentlyWorking: boolean;
}
