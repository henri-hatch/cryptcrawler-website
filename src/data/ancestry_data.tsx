interface AncestryData {
    id: string;
    name: string;
    description: string;
    imagePath: string;
    pageRoute: string;
    category: string[];
  }
  
  const ancestryData: AncestryData[] = [
    {
      id: "human",
      name: "Human",
      description: "The most common species in the world of Keldon, Humans are a walking anomaly. Each race have a god who made them, humanity, however, has no divine progenitor. Notorious for their lawful nature, and adaptability, humans make up the majority of society.",
      imagePath: "/ancestry-images/human_logo.png",
      pageRoute: "/ancestries/human",
      category: ["ancestry"]
    },
    {
      id: "elf",
      name: "Elf",
      description: "Incredibly naturalistic and free-spirited, the long lived elves are seen as agents of the nature around them. Created by the gods Corellon and Laera, each elf can track their lineage to the original ten children of Corellon.",
      imagePath: "/ancestry-images/elf_logo.png",
      pageRoute: "/ancestries/elf",
      category: ["ancestry"]
    },
    {
      id: "dwarf",
      name: "Dwarf",
      description: "Notoriously sturdy and stubborn, Dwarves once dominated the land with their brilliant architecture. However, with the rise of their arch-nemesis in Orckind, their numbers have dwindled significantly.",
      imagePath: "/ancestry-images/dwarf_logo.png",
      pageRoute: "/ancestries/dwarf",
      category: ["ancestry"]
    },
    {
      id: "draeling",
      name: "Draeling",
      description: "With their demonic heritage painted across their face, Draelings draw attention wherever they travel. Every society has myth and legends of Demonkind and their attempts to invade or corrupt this world. Although they never asked for it, Draelings are often the scapegoats for society prejudice and discrimination.",
      imagePath: "/ancestry-images/draeling_logo.png",
      pageRoute: "/ancestries/draeling",
      category: ["ancestry"]
    },
    {
      id: "hartkin",
      name: "Hartkin",
      description: "A quiet and content people with a streak of trickery, hartkin are admired by their neighbors. Created by the trickster god Ados, hartkin enjoy games of chance, riddles, and mysteries. They often form their own peaceful communities.",
      imagePath: "/ancestry-images/halfling_logo.png",
      pageRoute: "/ancestries/hartkin",
      category: ["ancestry"]
    },
    {
      id: "dragonborn",
      name: "Dragonborn",
      description: "Tall and proud, Dragonborn are rarely seen beyond their homeland of Draconia. Despite their dragonic appearance, the loyalty of Dragonborn have allowed them to go unmolested in most societies. Their booming voices demand the attention of the crowds around them. Torn between their two creator's lawful and chaotic natures, Dragonborn will defend their convictions to the end.",
      imagePath: "/ancestry-images/dragonborn_logo.png",
      pageRoute: "/ancestries/dragonborn",
      category: ["ancestry"]
    },
    {
      id: "tabaxi",
      name: "Tabaxi",
      description: "Tabaxi are a nomadic people, known for their feline features and insatiable curiosity. They travel the world in search of stories, treasures, and new experiences. Their agility and keen senses make them exceptional explorers and adventurers.",
      imagePath: "/ancestry-images/tabaxi_logo.png",
      pageRoute: "/ancestries/tabaxi",
      category: ["ancestry"]
    },
    {
      id: "harengon",
      name: "Harengon",
      description: "The creation of an ancient order of alchemists, the Harengon were made as slaves. Their enslavement was broken by a massive slave revolt, which earned the Harengon their freedom. The majority of the Harengon population lives in the Wyrlands, making them only a myth to those of the eastern continents.",
      imagePath: "/ancestry-images/harengon_logo.png",
      pageRoute: "/ancestries/harengon",
      category: ["ancestry"]
    },
    {
      id: "warforged",
      name: "Warforged",
      description: "Warforged are living constructs, created for war but now seeking their own purpose in a world that no longer needs them as soldiers. They are a blend of magic and machinery, with a unique perspective on life and existence. Warforged often struggle with their identity and place in society.",
      imagePath: "/ancestry-images/warforged_logo.png",
      pageRoute: "/ancestries/warforged",
      category: ["ancestry"]
    },
    {
      id: "kobold",
      name: "Kobold",
      description: "Kobolds are small, reptilian humanoids known for their cunning and resourcefulness. Often found in underground lairs, they are skilled trap-makers and miners. Despite their small stature, they are fiercely loyal to their clans and will defend their territory with surprising ferocity.",
      imagePath: "/ancestry-images/kobold_logo.png",
      pageRoute: "/ancestries/kobold",
      category: ["ancestry"]
    },
    {
      id: "githyanki",
      name: "Githyanki",
      description: "Hailing from the astral sea, Githyanki are a race of tall psionic humanoids. The history of the Githyanki is marked with war and violence. Once controlled as slaves by the Ilathids, Githyanki broke the chains of slavery to rebel against their monstrous masters. This war has lasted for thousands of years, and still tears across the multiverse.",
      imagePath: "/ancestry-images/githyanki_logo.png",
      pageRoute: "/ancestries/githyanki",
      category: ["ancestry"]
    },
    {
      id: "kenku",
      name: "Kenku",
      description: "Kenku are avian humanoids known for their mimicry and stealth. Once cursed by a powerful deity, they lost their ability to fly and speak in their own voices. Now, they communicate through imitation and are often found as thieves or spies, using their unique talents to navigate the world.",
      imagePath: "/ancestry-images/kenku_logo.png",
      pageRoute: "/ancestries/kenku",
      category: ["ancestry"]
    },
    {
      id: "goblin",
      name: "Goblin",
      description: "Goblins are small, mischievous creatures known for their cunning and resourcefulness. Often found in the shadows, they are skilled at scavenging and tinkering. Despite their reputation for being troublemakers, goblins can be surprisingly clever and adaptable, making them valuable allies in the right circumstances.",
      imagePath: "/ancestry-images/goblin_logo.png",
      pageRoute: "/ancestries/goblin",
      category: ["ancestry"]
    },
    {
      id: "hobgoblin",
      name: "Hobgoblin",
      description: "Hobgoblins are larger and more disciplined cousins of goblins, known for their military prowess and strategic minds. They often form organized societies and are skilled in warfare. Hobgoblins value strength and order, making them formidable opponents on the battlefield.",
      imagePath: "/ancestry-images/hobgoblin_logo.png",
      pageRoute: "/ancestries/hobgoblin",
      category: ["ancestry"]
    },
    {
      id: "orc",
      name: "Orc",
      description: "Created by the god Gruul with the explicit mission to destroy all life, orcs and their sister kin are not welcomed in society. Often gathered together in massive herds and bands, Orcs are famous for pillaging and looting undefended villages. Although some Orcs have been able to leave their mother herd and joined society, they still carry the monstrous reputation where ever they go.",
      imagePath: "/ancestry-images/dwarf_logo.png",
      pageRoute: "/ancestries/dwarf",
      category: ["ancestry"]
    },
    {
      id: "lizardfolk",
      name: "Lizardfolk",
      description: "Lizardfolk are reptilian humanoids known for their primal instincts and connection to the natural world. They are often found in swamps and jungles, living in tribes and following their own unique customs. Lizardfolk are skilled hunters and survivalists, with a deep respect for the balance of nature.",
      imagePath: "/ancestry-images/lizardfolk_logo.png",
      pageRoute: "/ancestries/lizardfolk",
      category: ["ancestry"]
    },
    {
      id: "changeling",
      name: "Changeling",
      description: "Changelings are shape-shifters, able to alter their appearance at will. This unique ability allows them to blend into any society, making them exceptional spies and infiltrators. However, their constant shifting can lead to an identity crisis, as they struggle to find their true selves amidst the many faces they wear.",
      imagePath: "/ancestry-images/changeling_logo.png",
      pageRoute: "/ancestries/changeling",
      category: ["ancestry"]
    },
  ];
  
  export default ancestryData;