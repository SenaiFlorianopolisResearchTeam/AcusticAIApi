import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ListsModule } from './lists/lists.module';

@Module({
  imports: [ListsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
