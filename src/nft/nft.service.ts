import { Injectable, NotFoundException  } from '@nestjs/common';
import { User } from './entities/nft.entity';


@Injectable()
export class NftService {
  private users:User[] = [];
  getminch(): string  {
    return 'Hello mincho';
  }

  getAll(): User[] {
    return this.users;
  }
  createName(): string {
    return 
  }
// postMinch(id: number, name: string): NFT[] {
//   return nfts.concat({ id, name });
// }

}
