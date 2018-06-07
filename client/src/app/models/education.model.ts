import { Course } from './course.model';

export class Education {
  universityName: string;
  degreeType: string;
  major: string;
  startDate: string;
  endDate: string;
  inProgress: boolean;
  transcripts: string;
  courses: Course[];
}
