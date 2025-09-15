// GraphQL
import { Field, InputType, Resolver, Query, Arg, Mutation, ID } from "type-graphql";

// Entités
import { Pays } from "../entities/Pays";

@InputType()
class PaysInput {
  @Field()
  code!: string; //! rend obligatoire la propriété

  @Field()
  nom!: string;

  @Field()
  emoji!: string;

  @Field()
  continent!: number;
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

  // Query pour récupérer tous les pays liés à un continent
  @Query(() => [Pays])
  async getPaysByContinent(@Arg("continent") continent: number) {
    try {
      const paysParContinent = await Pays.find({
        relations: {
          continent: true,
        }
      })
    } catch (error) {
      console.info(error)
    }
  }

  // Mutation pour l'ajout d'un pays
  @Mutation(() => ID)
  async addNewPays(@Arg("data") data: PaysInput) {
    const newPays = Pays.create({...data});

    try {
      await newPays.save();
      console.info(200 + ` Nouveau pays créé : ${data.nom}`);
      return newPays.id;
    } catch(error) {
      console.error(500 + ` ${error}`)
      throw new Error(500 + ` La création du pays a échoué`)
    }
  }
}