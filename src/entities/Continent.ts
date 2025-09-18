// TypeORM
import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

// GraphQl
import { Field, ObjectType } from "type-graphql";

// Pays
import { Pays } from "./Pays";

@Entity()
@ObjectType()
export class Continent extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field()
  id!: number; //! rend obligatoire la propriété

  @Column({ unique: true })
  @Field()
  nom!: String;

  // @OneToMany contient deux fonctions
  // La première renvoie le type des éléments liés (un continent est lié à PLUSIEURS pays)
  // La deuxième renvoie la propriété à laquelle est lié l'entité sur laquelle on se trouve : Sur l'entité pays, on retrouve le continent sur la propriété continent
  @OneToMany(() => Pays, (pays) => pays.continent)
  @Field(() => [Pays]) // Le champ contiendra un tableau d'éléments de type Pays
  pays?: Pays[]; // Lors de la création d'un continent, le tableau des pays associés peut-être vide
}
