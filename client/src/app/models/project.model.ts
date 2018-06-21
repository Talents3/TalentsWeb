import { Skill } from './skill.model';
export class Project {
  userEmail: string;
  projectName: string;
  projectContent: string;
  startDate: string;
  endDate: string;
  skills: Skill[];
}
