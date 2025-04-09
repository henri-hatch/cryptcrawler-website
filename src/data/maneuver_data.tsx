interface ManeuverData {
  id: string;
  name: string;
  description: string;
  maneuverImage: string;
  category: string[];
}

const maneuverData: ManeuverData[] = [
  {
    id: "anticipated-defense",
    name: "Anticipated Defense",
    description: "Prepared for anything, you can nimbly avoid an oncoming attack.",
    maneuverImage: "/manuever-images/Anticipated Defense.png",
    category: ["maneuver"]
  },
  {
    id: "blade-dance",
    name: "Blade Dance",
    description: "With nimble dexterity, you can move and spin around your opponent as you fight.",
    maneuverImage: "/manuever-images/Blade Dance.png",
    category: ["maneuver"]
  },
  {
    id: "book-worm",
    name: "Book Worm",
    description: "Tap into your extensive knowledge to gain an advantage on your next skill check.",
    maneuverImage: "/manuever-images/Book Worm.png",
    category: ["maneuver"]
  },
  {
    id: "breath-weapon-acid",
    name: "Breath Weapon (Acid)",
    description: "Channel your draconic heritage to unleash a devastating cone of acid.",
    maneuverImage: "/manuever-images/Breath Weapon (Acid).png",
    category: ["maneuver"]
  },
  {
    id: "breath-weapon-fire",
    name: "Breath Weapon (Fire)",
    description: "Channel your draconic heritage to unleash a devastating cone of fire.",
    maneuverImage: "/manuever-images/Breath Weapon (Fire).png",
    category: ["maneuver"]
  },
  {
    id: "breath-weapon-ice",
    name: "Breath Weapon (Ice)",
    description: "Channel your draconic heritage to unleash a devastating cone of frost.",
    maneuverImage: "/manuever-images/Breath Weapon (Ice).png",
    category: ["maneuver"]
  },
  {
    id: "breath-weapon-lightning",
    name: "Breath Weapon (Lightning)",
    description: "Channel your draconic heritage to unleash a devastating line of lightning.",
    maneuverImage: "/manuever-images/Breath Weapon (Lightning).png",
    category: ["maneuver"]
  },
  {
    id: "captivation",
    name: "Captivation",
    description: "Your performance is so compelling that it can totally entrance your audience.",
    maneuverImage: "/manuever-images/Captivation.png",
    category: ["maneuver"]
  },
  {
    id: "command",
    name: "Command",
    description: "Issue a one-word command that a creature must obey if it fails its saving throw.",
    maneuverImage: "/manuever-images/Command.png",
    category: ["maneuver"]
  },
  {
    id: "cunning-dodge",
    name: "Cunning Dodge",
    description: "Use your quick reflexes to evade an incoming attack at the last moment.",
    maneuverImage: "/manuever-images/Cunning Dodge.png",
    category: ["maneuver"]
  },
  {
    id: "cutting-words",
    name: "Cutting Words",
    description: "Distract and demoralize your opponent with a well-timed insult or jest.",
    maneuverImage: "/manuever-images/Cutting Words.png",
    category: ["maneuver"]
  },
  {
    id: "deep-pockets",
    name: "Deep Pockets",
    description: "Your pockets can hold more than they should.",
    maneuverImage: "/manuever-images/Deep Pockets.png",
    category: ["maneuver"]
  },
  {
    id: "detect-magic",
    name: "Detect Magic",
    description: "Swirling with arcane magic, all magic is sparkles with light that only you can see.",
    maneuverImage: "/manuever-images/Detect Magic.png",
    category: ["maneuver"]
  },  
  {
    id: "eureka!",
    name: "Eureka!",
    description: "Your analytical mind allows you to draw connections to things normally unrelated.",
    maneuverImage: "/manuever-images/Eureka!.png",
    category: ["maneuver"]
  },
  {
    id: "expeditious-retreat",
    name: "Expeditious Retreat",
    description: "When things get bad, you know when to run.",
    maneuverImage: "/manuever-images/Expeditious Retreat.png",
    category: ["maneuver"]
  },
  {
    id: "evasion",
    name: "Evasion",
    description: "Your reflexes allow you to dodge out of the way of certain area effects.",
    maneuverImage: "/manuever-images/Evasion.png",
    category: ["maneuver"]
  },
  {
    id: "favor-for-a-neighbor",
    name: "Favor for a Neighbor",
    description: "Hartkin communities are incredibly close and trusting, happy to help those in need.",
    maneuverImage: "/manuever-images/Favor for a Neighbor.png",
    category: ["maneuver"]
  },
  {
    id: "frenzied-charge",
    name: "Frenzied Charge",
    description: "Barreling forward you swing your weapon in a series of crazed arcs, hitting anything in your path.",
    maneuverImage: "/manuever-images/Frenzied Charge.png",
    category: ["maneuver"]
  },
  {
    id: "goad",
    name: "Goad",
    description: "Projecting your presence out, you force your target's attention on you.",
    maneuverImage: "/manuever-images/Goad.png",
    category: ["maneuver"]
  },
  {
    id: "hesitation-is-weakness",
    name: "Hesitation Is Weakness",
    description: "Strike when your opponent least expects it, using their moment of indecision against them.",
    maneuverImage: "/manuever-images/Hesitation Is Weakness.png",
    category: ["maneuver"]
  },
  {
    id: "human-determination",
    name: "Human Determination",
    description: "Call upon your innate human resilience to push beyond your normal limits.",
    maneuverImage: "/manuever-images/Human Determination.png",
    category: ["maneuver"]
  },
  {
    id: "i-know-a-guy",
    name: "I Know A Guy!",
    description: "You create a NPC out of thin air who you apparently met before.",
    maneuverImage: "/manuever-images/I Know A Guy!.png",
    category: ["maneuver"]
  },
  {
    id: "improvised-cover",
    name: "Improvised Cover",
    description: "Quickly create cover from nearby objects to protect yourself from attacks.",
    maneuverImage: "/manuever-images/Improvised Cover.png",
    category: ["maneuver"]
  },
  {
    id: "infravision",
    name: "Infravision",
    description: "Your eyes allow you to see more kinds of light than most of mortalkind.",
    maneuverImage: "/manuever-images/Infravision.png",
    category: ["maneuver"]
  },
  {
    id: "inspiration",
    name: "Inspiration",
    description: "Your words or music inspire allies to greater heights of achievement.",
    maneuverImage: "/manuever-images/Inspiration.png",
    category: ["maneuver"]
  },
  {
    id: "lie-detector",
    name: "Lie Detector",
    description: "Your keen insight allows you to detect when someone is not telling the truth.",
    maneuverImage: "/manuever-images/Lie Detector.png",
    category: ["maneuver"]
  },
  {
    id: "metamagic",
    name: "Metamagic",
    description: "Use your weapon to deflect an incoming attack, reducing the damage you take.",
    maneuverImage: "/manuever-images/Metamagic.png",
    category: ["maneuver"]
  },
  {
    id: "midas-touch",
    name: "Midas Touch",
    description: "Fortune favors those who take it.",
    maneuverImage: "/manuever-images/Midas Touch.png",
    category: ["maneuver"]
  },
  {
    id: "misty-step",
    name: "Misty Step",
    description: "Stepping into the Astral Plane, you blink from one location to another.",
    maneuverImage: "/manuever-images/Misty Step.png",
    category: ["maneuver"]
  },
  {
    id: "parry",
    name: "Parry",
    description: "Use your weapon to deflect an incoming attack, reducing the damage you take.",
    maneuverImage: "/manuever-images/Parry.png",
    category: ["maneuver"]
  },
  {
    id: "plot-twist",
    name: "Plot Twist",
    description: "In the midst of a story, alter the narrative by introducing an unexpected turn of events.",
    maneuverImage: "/manuever-images/Plot Twist.png",
    category: ["maneuver"]
  },
  {
    id: "sense-undead",
    name: "Sense Undead",
    description: "You always get an ominous feeling whenever undead are near.",
    maneuverImage: "/manuever-images/Sense Undead.png",
    category: ["maneuver"]
  },
  {
    id: "sideswipe",
    name: "Sideswipe",
    description: "Some call it dishonorable, you call it winning.",
    maneuverImage: "/manuever-images/Sideswipe.png",
    category: ["maneuver"]
  },
  {
    id: "silent-takedown",
    name: "Silent Takedown",
    description: "Leaping from the shadows, you attack a target, silently eliminating them with a single strike.",
    maneuverImage: "/manuever-images/Silent Takedown.png",
    category: ["maneuver"]
  },
  {
    id: "shadow-step",
    name: "Shadow Step",
    description: "Harness the shadows to teleport to a nearby location, vanishing in a cloud of dark smoke.",
    maneuverImage: "/manuever-images/Shadow Step.png",
    category: ["maneuver"]
  },
  {
    id: "sharpened-claws",
    name: "Sharpened Claws",
    description: "Sharpen your natural weapons for a devastating strike against your foes.",
    maneuverImage: "/manuever-images/Sharpened Claws.png",
    category: ["maneuver"]
  },
  {
    id: "snowblind",
    name: "Snowblind",
    description: "Due to the incredibly cold and dark climate of your enviornment, you can naturally see infared.",
    maneuverImage: "/manuever-images/Snowblind.png",
    category: ["maneuver"]
  },
  {
    id: "spider-climb",
    name: "Spider Climb",
    description: "With your intense training, you are able to climb sheer surfaces with ease.",
    maneuverImage: "/manuever-images/Spider Climb.png",
    category: ["maneuver"]
  },
  {
    id: "sneak-attack",
    name: "Sneak Attack",
    description: "Strike a vital spot when your target is distracted, dealing extra damage.",
    maneuverImage: "/manuever-images/Sneak Attack.png",
    category: ["maneuver"]
  },
  {
    id: "stampede-of-steel",
    name: "Stampede of Steel",
    description: "Unleash a flurry of blows against multiple enemies, overwhelming them with speed and precision.",
    maneuverImage: "/manuever-images/Stampede of Steel.png",
    category: ["maneuver"]
  },
  {
    id: "sorcery",
    name: "Sorcery",
    description: "As a fountain of magic power, your spells manifest through concentrated will alone.",
    maneuverImage: "/manuever-images/Sorcery.png",
    category: ["maneuver"]
  },
  {
    id: "steady-shot",
    name: "Steady Shot",
    description: "Take aim carefully to deliver a precise ranged attack with increased accuracy.",
    maneuverImage: "/manuever-images/Steady Shot.png",
    category: ["maneuver"]
  },
  {
    id: "tactical-invitation",
    name: "Tactical Invitation",
    description: "Create a distraction that disrupts enemy organization and lures them into a vulnerable position.",
    maneuverImage: "/manuever-images/Tactical Invitation.png",
    category: ["maneuver"]
  },
  {
    id: "trip-attack",
    name: "Trip Attack",
    description: "Your natural sense of balance allows you to easily trip the less gifted.",
    maneuverImage: "/manuever-images/Trip Attack.png",
    category: ["maneuver"]
  },
  {
    id: "underdark-venom",
    name: "Underdark Venom",
    description: "You coat your weapon with a powerful venom, the recipe of which is closely guarded.",
    maneuverImage: "/manuever-images/Underdark Venom.png",
    category: ["maneuver"]
  },
];

export default maneuverData;