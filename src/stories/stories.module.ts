import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';
import { Module } from '@nestjs/common';
import { StoriesController } from './stories.controller';

@Module({
  imports: [InMemoryDBModule.forRoot({})],
  controllers: [StoriesController],
})
export class StoriesModule {}
