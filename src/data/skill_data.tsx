interface SkillData {
    id: string;
    name: string;
    description: string;
    imagePath: string;
    pageRoute: string;
    category: "might" | "finesse" | "fortitude" | "reason" | "intuition" | "presence";
    bonuses?: {
      [key: string]: any;
    };
  }
  
  const skillData: SkillData[] = [
    // Presence skills
    {
      id: "deception",
      name: "Deception",
      description: "Spiders aren't the only creatures to weave webs. Create complex lies and get away with it with Deception.",
      imagePath: "/skills-images/deception_logo.png",
      pageRoute: "/skills/deception",
      category: "presence"
    },
    {
      id: "intimidation",
      name: "Intimidation",
      description: "There is nothing quite like the thrill of threatening someone. Some how you always seem to get your way.",
      imagePath: "/skills-images/intimidation_logo.png",
      pageRoute: "/skills/intimidation",
      category: "presence"
    },
    {
      id: "performance",
      name: "Performance",
      description: "Look at me! Have you seen some juggle so many knifes? Yes? How about now? Still? Geez tough crowd.",
      imagePath: "/skills-images/performance_logo.png",
      pageRoute: "/skills/performance",
      category: "presence"
    },
    {
      id: "persuasion",
      name: "Persuasion",
      description: "Gentlemen I know it looks bad, but have you considered not dying? Such an incredible speech is core to Persuasion.",
      imagePath: "/skills-images/persuasion_logo.png",
      pageRoute: "/skills/persuasion",
      category: "presence"
    },
    
    // Finesse skills
    {
      id: "acrobatics",
      name: "Acrobatics",
      description: "You have to move fast. The best way to commit crimes is to never be caught. Evade the guards with the acrobatics skill.",
      imagePath: "/skills-images/acrobatics_logo.png",
      pageRoute: "/skills/acrobatics",
      category: "finesse"
    },
    {
      id: "lockpicking",
      name: "Lockpicking",
      description: "I'm in. All the best stuff is often found behind locked doors. You are able to crack open locked containers with ease.",
      imagePath: "/skills-images/lockpicking_logo.png",
      pageRoute: "/skills/lockpicking",
      category: "finesse"
    },
    {
      id: "pickpocketing",
      name: "Pickpocketing",
      description: "As another face in the crowd you can easily swipe the coinpurses of those around you.",
      imagePath: "/skills-images/pickpocketing_logo.png",
      pageRoute: "/skills/pickpocketing",
      category: "finesse"
    },
    {
      id: "stealth",
      name: "Stealth",
      description: "What was that? Probably just the wind. Enter fortresses totally undetected with the Stealth skill.",
      imagePath: "/skills-images/stealth_logo.png",
      pageRoute: "/skills/stealth",
      category: "finesse"
    },
    
    // Reason skills
    {
      id: "appraisal",
      name: "Appraisal",
      description: "Some see trash, but you see treasure. Increase your purchasing power with the Appraisal skill.",
      imagePath: "/skills-images/appraisal_logo.png",
      pageRoute: "/skills/appraisal",
      category: "reason"
    },
    {
      id: "crafting",
      name: "Crafting",
      description: "Bombs are less of a science and more of an art. Increase your utility with the Crafting skill.",
      imagePath: "/skills-images/crafting_logo.png",
      pageRoute: "/skills/crafting",
      category: "reason"
    },
    {
      id: "history",
      name: "History",
      description: "Having a nose for books allows you to know a lot about the world. Expand your mind with the History skill.",
      imagePath: "/skills-images/history_logo.png",
      pageRoute: "/skills/history",
      category: "reason"
    },
    {
      id: "investigation",
      name: "Investigation",
      description: "Something strange is afoot. Investigation allows you to comb through a crime scene or the pockets of your enemies.",
      imagePath: "/skills-images/investigation_logo.png",
      pageRoute: "/skills/investigation",
      category: "reason"
    },
    
    // Intuition skills
    {
      id: "animal_handling",
      name: "Animal Handling",
      description: "Everyone needs a friend, and you tend to find them outside. Animals flock to you and your charm.",
      imagePath: "/skills-images/animalhandling_logo.png",
      pageRoute: "/skills/animal_handling",
      category: "intuition"
    },
    {
      id: "insight",
      name: "Insight",
      description: "The hardest thing to read are the thoughts of another. Peer into the machinations of your enemies with the Insight skill.",
      imagePath: "/skills-images/insight_logo.png",
      pageRoute: "/skills/insight",
      category: "intuition"
    },
    {
      id: "medicine",
      name: "Medicine",
      description: "Adventuring is never safe. Everyone needs a doctor, and you are better than nothing.",
      imagePath: "/skills-images/medicine_logo.png",
      pageRoute: "/skills/medicine",
      category: "intuition"
    },
    {
      id: "perception",
      name: "Perception",
      description: "You can see danger coming from a mile away. Observation is the greatest tool in a warrior's toolbox.",
      imagePath: "/skills-images/perception_logo.png",
      pageRoute: "/skills/perception",
      category: "intuition"
    },
    {
      id: "survival",
      name: "Survival",
      description: "There is no adventure if you get lost. As a expert in survival you know how to properly navigate, forage, and hunt in the wilderness.",
      imagePath: "/skills-images/survival_logo.png",
      pageRoute: "/skills/survival",
      category: "intuition"
    }
  ];
  
  export default skillData;