interface ClassData {
    id: string;
    name: string;
    description: string;
    imagePath: string;
    pageRoute: string;
    class_category: "common" | "rare";
    category: string[];
}
  
const classData: ClassData[] = [
    {
      id: "conduit",
      name: "Conduit",
      description: "Despite their promises, Gods and entities of beyond still interfere in the mortal world.",
      imagePath: "/class-images/conduit_logo.png",
      pageRoute: "/classes/conduit",
      class_category: "common",
      category: ["class"]
    },
    {
      id: "minstrel",
      name: "Minstrel",
      description: "Minstrels are poets, the authors of myth, writing the very adventure the party is in.",
      imagePath: "/class-images/minstrel_logo.png",
      pageRoute: "/classes/minstrel",
      class_category: "common",
      category: ["class"]
    },
    {
      id: "paragon",
      name: "Paragon",
      description: "Bound by a powerful oath, Paragons seek to become the ideal they have sworn to.",
      imagePath: "/class-images/paragon_logo.png",
      pageRoute: "/classes/paragon",
      class_category: "common",
      category: ["class"]
    },
    {
      id: "shadow",
      name: "Shadow",
      description: "Masters of thievery and sneak, Shadows excel from, well, the shadows.",
      imagePath: "/class-images/shadow_logo.png",
      pageRoute: "/classes/shadow",
      class_category: "common",
      category: ["class"]
    },
    {
      id: "tactician",
      name: "Tactician",
      description: "Tacticians are the masterminds of the battlefield, using strategy and cunning to outwit their foes.",
      imagePath: "/class-images/tactician_logo.png",
      pageRoute: "/classes/tactician",
      class_category: "common",
      category: ["class"]
    },
    {
      id: "talent",
      name: "Talent",
      description: "Born with incredible untapped magical power, Talents are spellcasters who control their magic through their emotional state.",
      imagePath: "/class-images/talent_logo.png",
      pageRoute: "/classes/talent",
      class_category: "common",
      category: ["class"]
    },
    {
      id: "abnegate",
      name: "Abnegate",
      description: "Born as a twin, an Abnegate is an anti-magical anomaly, blessed with supernatural physical power rather than magical gifts.",
      imagePath: "/class-images/null_logo.png",
      pageRoute: "/classes/abnegate",
      class_category: "rare",
      category: ["class"]
    }
  ];
  
  export default classData;