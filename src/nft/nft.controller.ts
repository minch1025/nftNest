import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { NftService } from './nft.service';
import { User } from './entities/nft.entity'

@Controller('nft')
export class NftController {
    //constructor 초깃값 
    constructor(private readonly nftService: NftService  )  {
      // this.nftService = nftService 
    }
    //req,res 가 없어어--
    @Get()
    getMinch(): string  {
      //객체를 내부에서 만들어서 객체에서다른 객체에 의존하면 결합성이 강해져서 단일 책임 분리가 어긋나게되는것 최대한 this. 활용해서 나눠줌
      return this.nftService.getminch();
    }

    @Get('/All')
    getParams(): User[] {
      return this.nftService.getAll();
    }

    @Post('/All')
    createName(@Body('id') id:number,@Body('name') name:string, @Body('number') age: number , @Body('address') address: string):string {
        return this.nftService.createName();
    }

    @Get('/:id')
    getUserNumber(@Param('id') id:string ) {
      return `This will return one movie with the id: ${id}`
    }

    // @Post('/create_minch')
    // postMinch(@Body('id') id:number, @Body('name') name:string):  NFT[]  {
    //   return this.nftService.postMinch(id , name);
    // }
    }


