interface ClassData {
    id: string;
    name: string;
    description: string;
    imagePath: string;
    pageRoute: string;
    category: "common" | "rare";
  }
  
  const classData: ClassData[] = [
    {
      id: "conduit",
      name: "Conduit",
      description: "Despite their promises, Gods and entities of beyond still interfere in the mortal world.",
      imagePath: "/class-images/conduit_logo.png",
      pageRoute: "/classes/conduit",
      category: "common",
    },
    {
      id: "minstrel",
      name: "Minstrel",
      description: "Minstrels are poets, the authors of myth, writing the very adventure the party is in.",
      imagePath: "/class-images/minstrel_logo.png",
      pageRoute: "/classes/minstrel",
      category: "common",
    },
    {
      id: "paragon",
      name: "Paragon",
      description: "Bound by a powerful oath, Paragons seek to become the ideal they have sworn to.",
      imagePath: "/class-images/paragon_logo.png",
      pageRoute: "/classes/paragon",
      category: "common",
    },
    {
      id: "shadow",
      name: "Shadow",
      description: "Masters of thievery and sneak, Shadows excel from, well, the shadows.",
      imagePath: "/class-images/shadow_logo.png",
      pageRoute: "/classes/shadow",
      category: "common",
    },
    {
      id: "tactician",
      name: "Tactician",
      description: "Tacticians are the masterminds of the battlefield, using strategy and cunning to outwit their foes.",
      imagePath: "/class-images/tactician_logo.png",
      pageRoute: "/classes/tactician",
      category: "common",
    },
    {
      id: "abnegate",
      name: "Abnegate",
      description: "Born as a twin, an Abnegate is an anti-magical anomaly, blessed with supernatural physical power rather than magical gifts.",
      imagePath: "/class-images/null_logo.png",
      pageRoute: "/classes/abnegate",
      category: "rare",
    }
  ];
  
  export default classData;