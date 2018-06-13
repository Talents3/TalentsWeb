import { Course } from './course.model';

export class Education {
  userEmail: string;   
  universityName: string;
  gpa: number;
  degreeType: string;
  major: string;
  startDate: string;
  endDate: string;
  inProgress: boolean;
  transcripts: string;
  courses: Course[];
}
