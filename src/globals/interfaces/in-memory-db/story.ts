import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';

export interface StoryEntity extends InMemoryDBEntity {
  title: string;
  pageCount: number;
  dateCreated: Date;
  dateLastEdited: Date;
  author: string;
}
