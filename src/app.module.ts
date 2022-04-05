import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardModule } from './board/board.module';
import { NftModule } from './nft/nft.module';

@Module({
  imports: [BoardModule, NftModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
