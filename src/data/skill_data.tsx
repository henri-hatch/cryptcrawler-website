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
    // Presence skills
    {
      id: "deception",
      name: "Deception",
      description: "Spiders aren't the only creatures to weave webs. Create complex lies and get away with it with Deception.",
      imagePath: "/skills-images/deception_logo.png",
      pageRoute: "/skills/deception",
      skill_category: "presence",
      category: ["skill"]
    },
    {
      id: "intimidation",
      name: "Intimidation",
      description: "There is nothing quite like the thrill of threatening someone. Some how you always seem to get your way.",
      imagePath: "/skills-images/intimidation_logo.png",
      pageRoute: "/skills/intimidation",
      skill_category: "presence",
      category: ["skill"]
    },
    {
      id: "persuasion",
      name: "Persuasion",
      description: "Gentlemen I know it looks bad, but have you considered not dying? Such an incredible speech is core to Persuasion.",
      imagePath: "/skills-images/persuasion_logo.png",
      pageRoute: "/skills/persuasion",
      skill_category: "presence",
      category: ["skill"]
    },
    
    // Finesse skills
    {
      id: "acrobatics",
      name: "Acrobatics",
      description: "You have to move fast. The best way to commit crimes is to never be caught. Evade the guards with the acrobatics skill.",
      imagePath: "/skills-images/acrobatics_logo.png",
      pageRoute: "/skills/acrobatics",
      skill_category: "finesse",
      category: ["skill"]
    },
    {
      id: "lockpicking",
      name: "Lockpicking",
      description: "I'm in. All the best stuff is often found behind locked doors. You are able to crack open locked containers with ease.",
      imagePath: "/skills-images/lockpicking_logo.png",
      pageRoute: "/skills/lockpicking",
      skill_category: "finesse",
      category: ["skill"]
    },
    {
      id: "pickpocketing",
      name: "Pickpocketing",
      description: "As another face in the crowd you can easily swipe the coinpurses of those around you.",
      imagePath: "/skills-images/pickpocketing_logo.png",
      pageRoute: "/skills/pickpocketing",
      skill_category: "finesse",
      category: ["skill"]
    },
    {
      id: "stealth",
      name: "Stealth",
      description: "What was that? Probably just the wind. Enter fortresses totally undetected with the Stealth skill.",
      imagePath: "/skills-images/stealth_logo.png",
      pageRoute: "/skills/stealth",
      skill_category: "finesse",
      category: ["skill"]
    },
    
    // Reason skills
    {
      id: "arcana",
      name: "Arcana",
      description: "Weilding the laws of arcane magic, you can cast multiple arcane spells through the Arcana skill.",
      imagePath: "/skills-images/arcana_logo.png",
      pageRoute: "/skills/arcana",
      skill_category: "reason",
      category: ["skill"]
    },
    {
      id: "crafting",
      name: "Crafting",
      description: "Bombs are less of a science and more of an art. Increase your utility with the Crafting skill.",
      imagePath: "/skills-images/crafting_logo.png",
      pageRoute: "/skills/crafting",
      skill_category: "reason",
      category: ["skill"]
    },
    {
      id: "history",
      name: "History",
      description: "Having a nose for books allows you to know a lot about the world. Expand your mind with the History skill.",
      imagePath: "/skills-images/history_logo.png",
      pageRoute: "/skills/history",
      skill_category: "reason",
      category: ["skill"]
    },
    {
      id: "investigation",
      name: "Investigation",
      description: "Something strange is afoot. Investigation allows you to comb through a crime scene or the pockets of your enemies.",
      imagePath: "/skills-images/investigation_logo.png",
      pageRoute: "/skills/investigation",
      skill_category: "reason",
      category: ["skill"]
    },
    
    // Intuition skills
    {
      id: "animal_handling",
      name: "Animal Handling",
      description: "Everyone needs a friend, and you tend to find them outside. Animals flock to you and your charm.",
      imagePath: "/skills-images/animalhandling_logo.png",
      pageRoute: "/skills/animal_handling",
      skill_category: "intuition",
      category: ["skill"]
    },
    {
      id: "insight",
      name: "Insight",
      description: "The hardest thing to read are the thoughts of another. Peer into the machinations of your enemies with the Insight skill.",
      imagePath: "/skills-images/insight_logo.png",
      pageRoute: "/skills/insight",
      skill_category: "intuition",
      category: ["skill"]
    },
    {
      id: "medicine",
      name: "Medicine",
      description: "Adventuring is never safe. Everyone needs a doctor, and you are better than nothing.",
      imagePath: "/skills-images/medicine_logo.png",
      pageRoute: "/skills/medicine",
      skill_category: "intuition",
      category: ["skill"]
    },
    {
      id: "perception",
      name: "Perception",
      description: "You can see danger coming from a mile away. Observation is the greatest tool in a warrior's toolbox.",
      imagePath: "/skills-images/perception_logo.png",
      pageRoute: "/skills/perception",
      skill_category: "intuition",
      category: ["skill"]
    },
    {
      id: "survival",
      name: "Survival",
      description: "There is no adventure if you get lost. As a expert in survival you know how to properly navigate, forage, and hunt in the wilderness.",
      imagePath: "/skills-images/survival_logo.png",
      pageRoute: "/skills/survival",
      skill_category: "intuition",
      category: ["skill"]
    },
    // Might skills
    {
      id: "athletics",
      name: "Athletics",
      description: "Some see trash, but you see treasure. Increase your purchasing power with the Appraisal skill.",
      imagePath: "/skills-images/athletics_logo.png",
      pageRoute: "/skills/athletics",
      skill_category: "might",
      category: ["skill"]
    },
    {
      id: "heavy-armor",
      name: "Heavy Armor",
      description: "Some see trash, but you see treasure. Increase your purchasing power with the Appraisal skill.",
      imagePath: "/skills-images/heavyarmor_logo.png",
      pageRoute: "/skills/heavyarmor",
      skill_category: "might",
      category: ["skill"]
    },
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