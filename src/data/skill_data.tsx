interface SkillData {
    id: string;
    name: string;
    description: string;
    imagePath: string;
    pageRoute: string;
    skill_category: "might" | "finesse" | "fortitude" | "reason" | "intuition" | "presence";
    category: string[];
  }
  
  const skillData: SkillData[] = [
    {
      id: "heavy-weapons",
      name: "Heavy Weapons",
      description: "Some see trash, but you see treasure. Increase your purchasing power with the Appraisal skill.",
      imagePath: "/skills-images/heavyweapons_logo.png",
      pageRoute: "/skills/heavyweapons",
      skill_category: "might",
      category: ["skill"]
    },
    {
      id: "unarmed",
      name: "Unarmed",
      description: "Some see trash, but you see treasure. Increase your purchasing power with the Appraisal skill.",
      imagePath: "/skills-images/unarmed_logo.png",
      pageRoute: "/skills/unarmed",
      skill_category: "might",
      category: ["skill"]
    },
  ];
  
  export default skillData;