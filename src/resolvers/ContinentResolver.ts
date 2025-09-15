// GraphQl
import { Field, InputType, Query, Resolver } from "type-graphql";

// Entité
import { Continent } from "../entities/Continent";

@InputType()
class ContinentInput {
  @Field()
  nom!: string; //! rend obligatoire la propriété
}

@Resolver(Continent)
export class ContinentResolver{
  // Query pour récupérer tous les continents sous forme d'un tableau
  @Query(() => [Continent])
  async getAllContinents() {
    try {
      const allContinents = await Continent.find();
      return allContinents;
    } catch (error) {
      console.info(error)
    }
  }
}