import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StoriesModule } from './stories/stories.module';
import { WordsModule } from './words/words.module';
import { SentencesModule } from './sentences/sentences.module';
import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    StoriesModule,
    WordsModule,
    SentencesModule,
    InMemoryDBModule.forRoot({}),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
      exclude: ['/api*'],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
