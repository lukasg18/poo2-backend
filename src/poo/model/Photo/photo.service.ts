import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Photo } from './photo.entity';

@Injectable()
export class PhotoService {
  constructor(
    @Inject('UserRepositoryToken')
    private readonly photoRepository: Repository<Photo>,
  ) {}

  async findAll(): Promise<Photo[]> {
    return await this.photoRepository.find();
  }
}