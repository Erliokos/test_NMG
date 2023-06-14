import { Module } from '@nestjs/common';
import { CollectionService } from './collection.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CollectionResolver } from './collection.resolver';
import { CollectionEntity } from './entities/collection.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CollectionEntity])],
  providers: [CollectionService, CollectionResolver],
})
export class CollectionModule {}
