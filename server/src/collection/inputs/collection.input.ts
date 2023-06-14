import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CollectionInput {
  @Field()
  caption: string;

  @Field()
  text: string;
}
