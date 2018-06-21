import { Skill } from './skill.model';
export class Experience {
  userEmail: string;
  companyName: string;
  title: string;
  startDate: string;
  endDate: string;
  description: string;
  skills: Skill[];
}
