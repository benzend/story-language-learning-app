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

  @Post()
  create(@Body() story: StoryEntity) {
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
