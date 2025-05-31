interface MasteryData {
  id: string;
  name: string;
  description: string;
  masteryImage: string;
  category: string[];
}

const masteryData: MasteryData[] = [
    {
        id: "aesculapius",
        name: "Aesculapius",
        description: "Surgery is more than just keeping a patient alive, you also take on the responsibility to make the patient stronger than before.",
        masteryImage: "/mastery-images/Aesculapius.png",
        category: ["mastery"],
    },
    {
        id: "contortionist",
        name: "Contortionist",
        description: "You are able to stretch, bend, and twist your body to absurd extents.",
        masteryImage: "/mastery-images/Contortionist.png",
        category: ["mastery"],
    },
    {
        id: "charge-daffaires",
        name: "Charge d'Affaires",
        description: "There is always a way for both parties to reach an equal and amicable arrangement.",
        masteryImage: "/mastery-images/Charge d'Affaires.png",
        category: ["mastery"],
    },  
    {
        id: "devils-advocate",
        name: "Devil's Advocate",
        description: "Your honor I  am innocent!",
        masteryImage: "/mastery-images/Devils_Advocate.png",
        category: ["mastery"]
    },
    {
        id: "flesh-sculptor",
        name: "Flesh Sculptor",
        description: "One should try not to get too sentimentally attached to their own skin.",
        masteryImage: "/mastery-images/Flesh Sculptor.png",
        category: ["mastery"],
    },
    {
        id: "lucid-dreamer",
        name: "Lucid Dreamer",
        description: "Your perception has grown to such an extreme that you see the world for what it truly is.",
        masteryImage: "/mastery-images/Lucid Dreamer.png",
        category: ["mastery"]
    },
    {
        id: "midas-touch",
        name: "Midas Touch",
        description: "Why translate when money is a universal language?",
        masteryImage: "/mastery-images/Midas Touch.png",
        category: ["mastery"]
    },
    {
        id: "toxicologist",
        name: "Toxicologist",
        description: "The best way to pursue a cure, is to understand the illness.",
        masteryImage: "/mastery-images/Toxicologist.png",
        category: ["mastery"]
    },
];

export default masteryData;