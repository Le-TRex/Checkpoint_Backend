// TypeORM
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

// GraphQl
import { Field, ObjectType } from "type-graphql";

// Continents
import { Continent } from "./Continent";

@Entity()
@ObjectType()
export class Pays extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field()
  id!: number; //! rend obligatoire la propriété

  @Column({ unique: true})
  @Field()
  code!: String;
  
  @Column({ unique: true })
  @Field()
  nom!: String;

  @Column({ unique: true})
  @Field()
  emoji!: String;

  // @ManyToOne contient une fonction qui renvoie le type de l'élément lié (un pays n'appartient qu'à un continent)
  // eager permet de signifier qu'on pourra obtienir le continent dans le résultat de la requête pour obtenir des pays
  @ManyToOne(() => Continent, { eager: true })
  @Field(() => Continent) // Le champ va contenir un élément de type Continent
  continent!: Continent; // La propriété continent contiendra un élément de type Continent
}
