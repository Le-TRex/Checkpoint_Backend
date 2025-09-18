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

  @OneToMany(() => Pays, (pays) => pays.continent)
  @Field(() => [Pays])
  pays?: Pays[]; // Lors de la création d'un continent, le tableau des pays associés peut-être vide
}
