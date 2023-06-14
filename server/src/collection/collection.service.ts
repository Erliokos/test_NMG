import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CollectionEntity } from './entities/collection.entity';
import { Repository } from 'typeorm';
import { CollectionInput } from './inputs/collection.input';

@Injectable()
export class CollectionService {
  constructor(
    @InjectRepository(CollectionEntity)
    private readonly collectionEntity: Repository<CollectionEntity>,
  ) {}

  async create(input: CollectionInput): Promise<CollectionEntity> {
    return await this.collectionEntity.save(input);
  }

  async get(): Promise<CollectionEntity[]> {
    return await this.collectionEntity.find();
  }
}
