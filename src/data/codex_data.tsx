interface CodexData {
    id: string;
    name: string;
    description: string;
    imagePath: string;
    pageRoute: string;
    codex_category: "common" | "rare";
    category: string[];
}
  
const codexData: CodexData[] = [
    {
      id: "conduit",
      name: "Conduit",
      description: "Despite their promises, Gods and entities of beyond still interfere in the mortal world.",
      imagePath: "/codex-images/conduit_logo.png",
      pageRoute: "/codices/conduit",
      codex_category: "common",
      category: ["codex"]
    },
    {
      id: "minstrel",
      name: "Minstrel",
      description: "Minstrels are poets, the authors of myth, writing the very adventure the party is in.",
      imagePath: "/codex-images/minstrel_logo.png",
      pageRoute: "/codices/minstrel",
      codex_category: "common",
      category: ["codex"]
    },
    {
      id: "paragon",
      name: "Paragon",
      description: "Bound by a powerful oath, Paragons seek to become the ideal they have sworn to.",
      imagePath: "/codex-images/paragon_logo.png",
      pageRoute: "/codices/paragon",
      codex_category: "common",
      category: ["codex"]
    },
    {
      id: "shadow",
      name: "Shadow",
      description: "Masters of thievery and sneak, Shadows excel from, well, the shadows.",
      imagePath: "/codex-images/shadow_logo.png",
      pageRoute: "/codices/shadow",
      codex_category: "common",
      category: ["codex"]
    },
    {
      id: "tactician",
      name: "Tactician",
      description: "Tacticians are the masterminds of the battlefield, using strategy and cunning to outwit their foes.",
      imagePath: "/codex-images/tactician_logo.png",
      pageRoute: "/codices/tactician",
      codex_category: "common",
      category: ["codex"]
    },
    {
      id: "talent",
      name: "Talent",
      description: "Born with incredible untapped magical power, Talents are spellcasters who control their magic through their emotional state.",
      imagePath: "/codex-images/talent_logo.png",
      pageRoute: "/codices/talent",
      codex_category: "common",
      category: ["codex"]
    },
    {
      id: "abnegate",
      name: "Abnegate",
      description: "Born as a twin, an Abnegate is an anti-magical anomaly, blessed with supernatural physical power rather than magical gifts.",
      imagePath: "/codex-images/null_logo.png",
      pageRoute: "/codices/abnegate",
      codex_category: "rare",
      category: ["codex"]
    }
  ];
  
  export default codexData;
