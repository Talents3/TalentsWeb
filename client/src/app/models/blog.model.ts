import { Comment } from './comment.model';
export class Blog {
    postTime: string;
    contents: string;
    image: string;
    power: number;
    comments: Comment[];
}
