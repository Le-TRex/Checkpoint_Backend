// GraphQL
import { Field, InputType, Resolver, Query, Arg } from "type-graphql";

// Entités
import { Pays } from "../entities/Pays";

@InputType()
class PaysInput {
  @Field()
  code!: String; //! rend obligatoire la propriété

  @Field()
  nom!: String;

  @Field()
  emoji!: String;
}

@Resolver(Pays)
export class PaysResolver {

  // Query pour récupérer tous les pays sous forme d'un tableau
  @Query(() => [Pays])
  async getAllPays() {
    try {
      const allPays = await Pays.find();
      return allPays;
    } catch (error) {
      console.info(error)
    }
  }

  // Query pour récupérer un pays à partir de son code
  @Query(() => Pays)
  async getPays(@Arg("code") code: string) {
    const pays = await Pays.findOneByOrFail({code});
    return pays;
  }
}