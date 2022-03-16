export class CreateStoryDto {
  id: string;
  title: string;
  pageCount: number;
  dateCreated: Date;
  dateLastEdited: Date;
  author: string;
}
