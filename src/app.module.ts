import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StoriesModule } from './stories/stories.module';
import { WordsModule } from './words/words.module';
import { SentencesModule } from './sentences/sentences.module';

@Module({
  imports: [StoriesModule, WordsModule, SentencesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
