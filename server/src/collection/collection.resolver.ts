import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CollectionService } from './collection.service';
import { CollectionEntity } from './entities/collection.entity';
import { CollectionInput } from './inputs/collection.input';

@Resolver('Collection')
export class CollectionResolver {
  constructor(private readonly collectionService: CollectionService) {}

  @Mutation(() => CollectionEntity)
  async create(
    @Args('input') input: CollectionInput,
  ): Promise<CollectionEntity> {
    return this.collectionService.create(input);
  }

  @Query(() => [CollectionEntity])
  async get(): Promise<CollectionEntity[]> {
    return await this.collectionService.get();
  }

  @Mutation(() => Boolean)
  async delete(@Args('id') id: number): Promise<boolean> {
    return this.collectionService.delete(id);
  }
}
