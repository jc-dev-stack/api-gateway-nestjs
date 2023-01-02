import { DatabaseModule } from './../../infra/database/database.module';
import { Module } from '@nestjs/common';
import { PathService } from './path.service';

@Module({
  imports: [DatabaseModule],
  providers: [PathService],
  controllers: []
})
export class PathModule { }
