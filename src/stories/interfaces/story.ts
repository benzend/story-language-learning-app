import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';

export interface StoryEntity extends InMemoryDBEntity {
  title: string;
  author: string;
  pageCount: number;
  dateCreated: Date;
  dateLastEdited: Date;
}
