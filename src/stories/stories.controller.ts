import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StoryEntity } from './interfaces/story';

@Controller('stories')
export class StoriesController {
  constructor(
    private readonly storiesService: InMemoryDBService<StoryEntity>,
  ) {}

  @Get()
  findAll() {
    return this.storiesService.getAll();
  }

  @Post()
  create(@Body() story: StoryEntity) {
    const date = new Date();

    if (story.pageCount === undefined) story.pageCount = 0;
    story.dateCreated = date;
    story.dateLastEdited = date;

    return this.storiesService.create(story);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.storiesService.get(id);
  }

  @Patch(':id')
  update(@Param('id') @Body() story: StoryEntity) {
    return this.storiesService.update(story);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.storiesService.delete(id);
  }
}
