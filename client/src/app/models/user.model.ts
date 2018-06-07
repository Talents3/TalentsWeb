import { Experience } from './experience.model';
import { Education } from './education.model';
import { Blog } from './blog.model';

export class User{
  id: number;
  username: string;
  password: string;
  image: string;
  backgroundImage: string;
  age: number;
  adress: string;
  phone: string;
  email: string;
  isMale: boolean;
  description: string;
  usAuthorization: boolean;
  needVisaSponsor: boolean;
  newGrads: boolean;
  skills: string[];
  links: string[];
  certificates: string[];
  experiences: Experience[];
  educations: Education[];
  blogs: Blog[];

}
