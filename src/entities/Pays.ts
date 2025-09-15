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

  @Field(() => Continent)
  @ManyToOne(() => Continent, (continent) => continent.pays)
  continent!: Continent
}
