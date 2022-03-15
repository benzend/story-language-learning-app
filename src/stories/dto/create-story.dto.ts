import { TStoryContent } from 'src/globals/types/story-content';

export class CreateStoryDto {
  id: string;
  title: string;
  pageCount: number;
  content: TStoryContent;
  dateCreated: Date;
  dateLastEdited: Date;
  author: string;
}
