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
      description: "Some say using raw force and large implements lacks 'skill' or is easily bested, you think not.",
      imagePath: "/skills-images/heavyweapons_logo.png",
      pageRoute: "/skills/heavyweapons",
      skill_category: "might",
      category: ["skill"]
    },
    {
      id: "unarmed",
      name: "Unarmed",
      description: "The body is a tool lighter than any weapon, and in the right hands can be just as deadly.",
      imagePath: "/skills-images/unarmed_logo.png",
      pageRoute: "/skills/unarmed",
      skill_category: "might",
      category: ["skill"]
    },
  ];
  
  export default skillData;