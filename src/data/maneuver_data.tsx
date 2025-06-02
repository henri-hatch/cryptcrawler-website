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
    id: "attack-of-opportunity",
    name: "Attack of Opportunity",
    description: "With a quick swing, you can attack a foe that is moving away from you.",
    maneuverImage: "/manuever-images/Attack of Opportunity.png",
    category: ["maneuver"]
  },
  {
    id: "at-your-expense",
    name: "At Your Expense",
    description: "A well-timed quip against a creature causes all of it's friends to be paralyzed with loud laughter.",
    maneuverImage: "/manuever-images/At Your Expense.png",
    category: ["maneuver"]
  },
  {
    id: "battle-feint",
    name: "Battle Feint",
    description: "Your sudden movements causes your opponent to flinch, opening up an opportunity for an ally to attack.",
    maneuverImage: "/manuever-images/Battle Feint.png",
    category: ["maneuver"]
  },
  {
    id: "bargainer",
    name: "Bargainer",
    description: "You know how to play the merchant's game.",
    maneuverImage: "/manuever-images/Bargainer.png",
    category: ["maneuver"]
  },
  {
    id: "beacon-of-hope",
    name: "Beacon of Hope",
    description: "Errupting with radiant energy you damage your foes while healing your friends.",
    maneuverImage: "/manuever-images/Beacon of Hope.png",
    category: ["maneuver"]
  },
  {
    id: "blackjacket-sting",
    name: "Blackjacket Sting",
    description: "Coating your weapon in a caustic substance you inject the toxin into your foe.",
    maneuverImage: "/manuever-images/Blackjacket Sting.png",
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
    id: "chainfire",
    name: "Chainfire",
    description: "You ignite a foe with righteous flame, which explodes out consuming those around them.",
    maneuverImage: "/manuever-images/Chainfire.png",
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
    id: "confounding-strike",
    name: "Confounding Strike",
    description: "With rapid and chaotic movements you cause your opponent to swing and hit their ally.",
    maneuverImage: "/manuever-images/Confounding Strike.png",
    category: ["maneuver"]
  },
  {
    id: "continual-recovery",
    name: "Continual Recovery",
    description: "You zealously monitor your patient's progress, accelerating their recovery.",
    maneuverImage: "/manuever-images/Continual Recovery.png",
    category: ["maneuver"]
  },
  {
    id: "counterpoint",
    name: "Counterpoint",
    description: "With a verbal retort you open up a creature's defenses to attack",
    maneuverImage: "/manuever-images/Counterpoint.png",
    category: ["maneuver"]
  },
  {
    id: "counterstrike",
    name: "Counterstrike",
    description: "You don’t block — you strike as your enemy commits, punishing their aggression.",
    maneuverImage: "/manuever-images/Counterstrike.png",
    category: ["maneuver"]
  },
  {
    id: "chromantic-orb",
    name: "Chromantic Orb",
    description: "An orb of arcane energy that shifts colors as it flies.",
    maneuverImage: "/manuever-images/Chromantic Orb.png",
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
    id: "create-mechanical-companion",
    name: "Create Mechanical Companion",
    description: "With plenty of tinkering, you can create a metal friend to accompany you in your travels.",
    maneuverImage: "/manuever-images/Create Mechanical Companion.png",
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
    id: "delayed-strike",
    name: "Delayed Strike",
    description: "Strike blindingly fast causing your blow to lingers in the air, hitting in spirit after your fist is gone.",
    maneuverImage: "/manuever-images/Delayed Strike.png",
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
    id: "disarming-smile",
    name: "Disarming Smile",
    description: "You wouldn't ruin a charming face like mine? Right?",
    maneuverImage: "/manuever-images/Disarming Smile.png",
    category: ["maneuver"]
  }, 
  {
    id: "discovered-weakness",
    name: "Discovered Weakness",
    description: "Analyzing your enemy, you discover a hidden weakness.",
    maneuverImage: "/manuever-images/Discovered Weakness.png",
    category: ["maneuver"]
  }, 
  {
    id: "dramatic-intercession",
    name: "Dramatic Intercession",
    description: "At the last second, your shout wakes your friend out of their stupor and pushes them to keep fighting.",
    maneuverImage: "/manuever-images/Dramatic Intercession.png",
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
    id: "feather-fall",
    name: "Feather Fall",
    description: "You gently stop your decent, allowing you to reach the ground unharmed.",
    maneuverImage: "/manuever-images/Feather Fall.png",
    category: ["maneuver"]
  },
  {
    id: "fisticuffs",
    name: "Fisticuffs",
    description: "You become a whirlwind of motion, raining down blows like a heavy storm.",
    maneuverImage: "/manuever-images/Fisticuffs.png",
    category: ["maneuver"]
  },
  {
    id: "firebolt",
    name: "Firebolt",
    description: "Coalescing pure flame, you concentrate it into a dart of power to fire at your foe.",
    maneuverImage: "/manuever-images/Firebolt.png",
    category: ["maneuver"]
  },
  {
    id: "foe-flail",
    name: "Foe Flail",
    description: "You don’t just beat your enemies — you beat other enemies with them.",
    maneuverImage: "/manuever-images/Foe Flail.png",
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
    id: "gadget-specialist",
    name: "Gadget Specialist",
    description: "As great as you are you can't be everywhere at once.",
    maneuverImage: "/manuever-images/Gadget Specialist.png",
    category: ["maneuver"]
  },
  {
    id: "gift-of-gab",
    name: "Gift of Gab",
    description: "Umm... I didn't mean that! Forget about it would ya?",
    maneuverImage: "/manuever-images/Gift of Gab.png",
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
    id: "he-called-you-ugly-too",
    name: "He Called You Ugly Too!",
    description: "With enough antagonism, you can confuse your opponents into hitting each other.",
    maneuverImage: "/manuever-images/He Called You Ugly Too!.png",
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
    id: "hit-and-run",
    name: "Hit and Run",
    description: "With a deft strike you backflip out of harm's way.",
    maneuverImage: "/manuever-images/Hit and Run.png",
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
    id: "identify",
    name: "Identify",
    description: "Delving into the history of a magical item, you learn its properties.",
    maneuverImage: "/manuever-images/Identify.png",
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
    id: "improvised-bandage",
    name: "Improvised Bandage",
    description: "Although not your finest work, something is better than nothing right now.",
    maneuverImage: "/manuever-images/Improvised Bandage.png",
    category: ["maneuver"]
  },
  {
    id: "improvised-flash-bomb",
    name: "Improvised Flash Bomb",
    description: "Combining together some materials you have on-hand, you create an improvised bomb.",
    maneuverImage: "/manuever-images/Improvised Flash Bomb.png",
    category: ["maneuver"]
  },
  {
    id: "improvised-fire-bomb",
    name: "Improvised Fire Bomb",
    description: "Combining together some materials you have on-hand, you create an improvised bomb.",
    maneuverImage: "/manuever-images/Improvised Fire Bomb.png",
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
    id: "item-fusion",
    name: "Item Fusion",
    description: "Through technical experimentation, you can fuse two items together.",
    maneuverImage: "/manuever-images/Item Fusion.png",
    category: ["maneuver"]
  }, 
  {
    id: "know-your-enemy",
    name: "Know Your Enemy",
    description: "Taking in your environment, you can analyze your opponent's strengths and weaknesses.",
    maneuverImage: "/manuever-images/Know Your Enemy.png",
    category: ["maneuver"]
  },
  {
    id: "lamias-duplicant",
    name: "Lamia's Duplicant",
    description: "Creating a icy-duplicate, you wreath it with your own appearance.",
    maneuverImage: "/manuever-images/Lamia's Duplicant.png",
    category: ["maneuver"]
  },
  {
    id: "laugh-it-off",
    name: "Laugh It Off",
    description: "With a chuckle, you shrug off an attack, making the most mighty swing seem utterly pointless.",
    maneuverImage: "/manuever-images/Laugh It Off.png",
    category: ["maneuver"]
  },
  {
    id: "leopolds-magic-card",
    name: "Leopold's Magic Card",
    description: "Imbuing a playing card with chaotic energy, you can throw it at a foe.",
    maneuverImage: "/manuever-images/Leopold's Magic Card.png",
    category: ["maneuver"]
  },
  {
    id: "look-over-there",
    name: "Look! Over There!",
    description: "It's the oldest trick in the book, but in combat there probably is something over there.",
    maneuverImage: "/manuever-images/Look! Over There!.png",
    category: ["maneuver"]
  },
  {
    id: "loot-goblin",
    name: "Loot Goblin",
    description: "Plundering is always more fun with friends!",
    maneuverImage: "/manuever-images/Loot Goblin.png",
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
    id: "magic-missile",
    name: "Magic Missile",
    description: "Concentrating raw magical force into three darts, you launch them in rapid succession at your targets.",
    maneuverImage: "/manuever-images/Magic Missile.png",
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
    id: "not-surprised",
    name: "Not Surprised",
    description: "Never caught flat-footed, nothing really surprises you now.",
    maneuverImage: "/manuever-images/Not Surprised.png",
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
    id: "premeditation",
    name: "Premeditation",
    description: "You simulate your actions before hand, weighing their effectiveness before acting.",
    maneuverImage: "/manuever-images/Premeditation.png",
    category: ["maneuver"]
  },
  {
    id: "prescient-planning",
    name: "Prescient Planning",
    description: "Thanks to your convoluted plans and foresight you have just the thing for this situation.",
    maneuverImage: "/manuever-images/Prescient Planning.png",
    category: ["maneuver"]
  },
  {
    id: "return-to-sender",
    name: "Return to Sender",
    description: "Here! Catch!",
    maneuverImage: "/manuever-images/Return to Sender.png",
    category: ["maneuver"]
  },
  {
    id: "resuscitation",
    name: "Resuscitation",
    description: "In case of an emergency, you can bring the recently deceased back to the world of the living.",
    maneuverImage: "/manuever-images/Resuscitation.png",
    category: ["maneuver"]
  },
  {
    id: "scalpels-point",
    name: "Scalpel's Point",
    description: "With your precise anatomical knowledge, you are able to strike at a creature's weakest point.",
    maneuverImage: "/manuever-images/Scalpel's Point.png",
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
    id: "storming-shout",
    name: "Storming Shout",
    description: "With your powerful presence, you can convince a creature to follow your suggestion.",
    maneuverImage: "/manuever-images/Storming Shout.png",
    category: ["maneuver"]
  },
  {
    id: "suggestion",
    name: "Suggestion",
    description: "With your powerful presence, you can convince a creature to follow your suggestion.",
    maneuverImage: "/manuever-images/Suggestion.png",
    category: ["maneuver"]
  },
  {
    id: "sunburst",
    name: "Sunburst",
    description: "Brilliant white sun flames shoot out around you, throwing your foes back.",
    maneuverImage: "/manuever-images/Sunburst.png",
    category: ["maneuver"]
  },
  {
    id: "surgeons-remedy",
    name: "Surgeon's Remedy",
    description: "With enough patience and some elbow grease, you can fully reanimate the dead in the right circumstances.",
    maneuverImage: "/manuever-images/Surgeon's Remedy.png",
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
    id: "summon animal companion",
    name: "Summon Animal Companion",
    description: "With your deep connect with animals, you are always followed by a loyal animal spirit that aids you in your adventuring.",
    maneuverImage: "/manuever-images/Summon Animal Companion.png",
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
    id: "sucker-punch",
    name: "Sucker Punch",
    description: "You channel everything — precision, timing, fury — into one perfect strike. There’s no warning, no chance to brace. Just the sudden, soul-shaking impact of your fist, and silence.",
    maneuverImage: "/manuever-images/Sucker Punch.png",
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
    id: "terrifying-presence",
    name: "Terrifying Presence",
    description: "After seeing the damage you can do, weaker foes can't help but flee from you.",
    maneuverImage: "/manuever-images/Terrifying Presence.png",
    category: ["maneuver"]
  },
  {
    id: "titan-kick",
    name: "Titan Kick",
    description: "With a roar from the depths of your soul, you drive your foot into your enemy’s chest — a brutal, earth-shaking kick that launches them like a broken gate through the air.",
    maneuverImage: "/manuever-images/Titan Kick.png",
    category: ["maneuver"]
  },
  {
    id: "to-me!",
    name: "To Me!",
    description: "With a rallying cry, you summon your allies from around the battlefield to yourself.",
    maneuverImage: "/manuever-images/To Me!.png",
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
  {
    id: "wind-step-palm",
    name: "Wind-Step Palm",
    description: "You become a gust of wind — weightless, fluid, and unrelenting.",
    maneuverImage: "/manuever-images/Wind-Step Palm.png",
    category: ["maneuver"]
  },
];

export default maneuverData;