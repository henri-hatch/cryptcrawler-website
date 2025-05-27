interface MasteryData {
  id: string;
  name: string;
  description: string;
  masteryImage: string;
  category: string[];
}

const masteryData: MasteryData[] = [
    {
        id: "charge-daffaires",
        name: "Charge d'Affaires",
        description: "There is always a way for both parties to reach an equal and amicable arrangement.",
        masteryImage: "/mastery-images/Charge d'Affaires.png",
        category: ["mastery"]
    }
];

export default masteryData;