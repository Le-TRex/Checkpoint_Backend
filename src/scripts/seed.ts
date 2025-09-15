import { dataSource } from "../config/db";
import { Pays } from "../entities/Pays";
import { Continent } from "../entities/Continent";

// Seed
const continents = [
  {
    nom: "Afrique"
  },
  {
    nom: "Amérique"
  },
  {
    nom: "Asie"
  },
  {
    nom: "Antarctique"
  },
  {
    nom: "Europe"
  },
  {
    nom: "Océanie"
  }
]

const pays = [
  {
    code: "FR",
    nom: "France",
    emoji: "🇫🇷",
    continent: 5,
  },
  {
    code: "DE",
    nom: "Allemagne",
    emoji: "🇩🇪",
    continent: 5,
  },
  {
    code: "IR",
    nom: "Irlande",
    emoji: "🇮🇪",
    continent: 5,
  },
  {
    code: "DK",
    nom: "Danemark",
    emoji: "🇩🇰",
    continent: 5,
  },
  {
    code: "JP",
    nom: "Japon",
    emoji: "🇯🇵",
    continent: 3,
  }
]

async function seed() {
  try {
    await dataSource.initialize();

    // Ajout des continents :
    continents.map((currContinent) => {
      const newContinent = Object.assign(new Continent(), {...currContinent});
      return newContinent.save();
    })

    // Ajout des pays : 
    pays.map((currPays) => {
      const newPays = Object.assign(new Pays(), {...currPays});
      return newPays.save();
    })

  } catch (error) {
    console.error(error);
  }
};

seed();

