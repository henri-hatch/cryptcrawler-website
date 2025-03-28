import ContentCard from '../components/content_card';
import '../components/content_card.css';

const RacesPage = () => {
  return (
    <>
      <h2>Character Races</h2>
      <p>The world of CryptCrawler features a diverse array of races, each with their own history, culture, and abilities.</p>
      
      <h3>Common Races</h3>
      <div className="cards-container">
      <ContentCard 
          title="Human" 
          imagePath="/race-images/human_logo.png" 
          linkTo="/races/human"
          description="The most common species in the world of Keldon, Humans are a walking anomaly. Each race have a god who made them, humanity, however, has no divine progenitor. Notorious for their lawful nature, and adaptability, humans make up the majority of society."
          className="race-card"
        />

      <ContentCard 
          title="Elf" 
          imagePath="/race-images/elf_logo.png" 
          linkTo="/races/elf"
          description="Incredibly naturalistic and free-spirited, the long lived elves are seen as agents of the nature around them. Created by the gods Corellon and Laera, each elf can track their lineage to the original ten children of Corellon. With the arrival of humanity, elves have been pushed back from their ancestral lands into the corners of the wilderness."
          className="race-card"
        />

      <ContentCard 
          title="Dwarf" 
          imagePath="/race-images/dwarf_logo.png" 
          linkTo="/races/dwarf"
          description="Notoriously sturdy and stubborn, Dwarves once dominated the land with their brilliant architecture. However, with the rise of their arch-nemesis in Orckind, their numbers have dwindled significantly. The once proud race has since retreated deep into their underground cities, a shadow of their former glory."
          className="race-card"
        />

      <ContentCard 
          title="Draeling" 
          imagePath="/race-images/draeling_logo.png" 
          linkTo="/races/draeling"
          description="With their demonic heritage painted across their face, Draelings draw attention wherever they travel. Every society has myth and legends of Demonkind and their attempts to invade or corrupt this world. Although they never asked for it, Draelings are often the scapegoats for society prejudice and discrimination."
          className="race-card"
        />

      <ContentCard 
          title="Halfling" 
          imagePath="/race-images/halfling_logo.png" 
          linkTo="/races/halfling"
          description="A quiet and content people with a streak of trickery, halflings are admired by their neighbors. Created by the trickster god Ados, Halflings enjoy games of chance, riddles, and mysteries. They often form their own peaceful communities."
          className="race-card"
        />

      <ContentCard 
          title="Dragonborn"
          imagePath="/race-images/dragonborn_logo.png" 
          linkTo="/races/dragonborn"
          description="Tall and proud, Dragonborn are rarely seen beyond their homeland of Draconia. Despite their dragonic appearance, the loyalty of Dragonborn have allowed them to go unmolested in most societies. Their booming voices demand the attention of the crowds around them. Torn between their two creator's lawful and chaotic natures, Dragonborn will defend their convictions to the end."
          className="race-card"
        />

      <ContentCard 
          title="Half-Elf"
          imagePath="/race-images/half_elf_logo.png" 
          linkTo="/races/half_elf"
          description="The great in-betweeners, half-elves are often shunned by both of their parents. Humans find them to alien and unaging to relate to them, while elves see half-elves as another step to kill their long standing traditions and culture. Because of this, half-elves learn to negotiate and compromise each side."
          className="race-card"
        />

      <ContentCard 
          title="Half-Orc"
          imagePath="/race-images/half_orc_logo.png" 
          linkTo="/races/half_orc"
          description="Like most other half-human hybrids, half-orcs are torn between two cultures. Hated by humans due to their monstrous appearance, and spurned by orc tribes for being too weak, half-orcs often lash out on their own, following their own desires."
          className="race-card"
        />
      </div>

      <hr />

      <h3>Exotic Races</h3>
      <div className="cards-container">
      <ContentCard 
          title="Tabaxi"
          imagePath="/race-images/tabaxi_logo.png" 
          linkTo="/races/tabaxi"
          description="Often grouped in with common cats, Tabaxi are a fully intelligent mortal race. Culturally divided between the wealthy and aristocratic Majari and the survivalist warrior class of Ojari, Tabaxi vary wildly in personality and appearance. No matter what caste they come from, it is always a strange sight to see a Tabaxi walking the streets of a human town."
          className="race-card"
        />

      <ContentCard 
          title="Harengon"
          imagePath="/race-images/harengon_logo.png" 
          linkTo="/races/harengon"
          description="The creation of an ancient order of alchemists, the Harengon were made as slaves. Their enslavement was broken by a massive slave revolt, which earned the Harengon their freedom. The majority of the Harengon population lives in the Wyrlands, making them only a myth to those of the eastern continents."
          className="race-card"
        />

      <ContentCard 
          title="Warforged"
          imagePath="/race-images/warforged_logo.png" 
          linkTo="/races/warforged"
          description="Created by the Vix Confederacy as walking weapons, peacetime caused the Warforged to become independent members of society. Their means of reproduction, the Genesis Forges, where dismantled with the end of the war, effectively cutting off the continuation of this new species. Warforged are often treated as machines, despite their sentience."
          className="race-card"
        />

      <ContentCard 
          title="Kobold"
          imagePath="/race-images/kobold_logo.png" 
          linkTo="/races/kobold"
          description="Despite the draconic appearance, Kobolds are completely unrelated to dragonborn. Created by the commerce god Marcadia, Kobolds are natural miners and appraisers. Often seen as hoarders and theives by other races, a Kobold's mathmatical mind is often overlooked."
          className="race-card"
        />

      <ContentCard 
          title="Mul"
          imagePath="/race-images/mul_logo.png" 
          linkTo="/races/mul"
          description="The offspring of a dwarf and human, mul appear to be slightly more muscular humans. Although normally totally indistiguishable from humans, mul have two hearts, three lungs, and a sturdy bone structure like a dwarf. As bizzare as they are, mul are incredibly rare due to being born sterile, making generations of mul impossible. Dwarves call often refer to mul as 'Harkgar' or 'Warbreed'."
          className="race-card"
        />

      <ContentCard 
          title="Githyanki"
          imagePath="/race-images/githyanki_logo.png" 
          linkTo="/races/githyanki"
          description="Hailing from the astral sea, Githyanki are a race of tall psionic humanoids. The history of the Githyanki is marked with war and violence. Once controlled as slaves by the Ilathids, Githyanki broke the chains of slavery to rebel against their monstrous masters. This war has lasted for thousands of years, and still tears across the multiverse."
          className="race-card"
        />

      <ContentCard 
          title="Kenku"
          imagePath="/race-images/kenku_logo.png" 
          linkTo="/races/kenku"
          description="Inhabitants of the mysterious islands of Kenkara, Kenku are the creation of Masque, god of thieves. As a race, they are cursed to steal the culture and language of the things around them, incapable of making their own unique sounds. Since Kenkara is a recent discovery, Kenku are exceptionally rare."
          className="race-card"
        />
      </div>

      <hr />

      <h3>Monstrous Races</h3>
      <div className="cards-container">
      <ContentCard 
          title="Goblin"
          imagePath="/race-images/goblin_logo.png" 
          linkTo="/races/goblin"
          description="The younger brothers of Orcs, Goblins are scrawny and intelligent creatures who delight in mechanical weaponry. Often organized into clans, Goblins are mostly found under mountains, where they can test their strange metal machines without consquence. Goblins seem to enjoy death, and find explosions incredibly humorous."
          className="race-card"
        />

      <ContentCard 
          title="Hobgoblin"
          imagePath="/race-images/hobgoblin_logo.png" 
          linkTo="/races/hobgoblin"
          description="The older brothers to goblins, hobgoblins pride themselves for their mental and physical strength. As the only organized orckind race, hobgoblins believe that to be the strongest you must best your opponent physically and mentally. This makes hobgoblins dangerous warchiefs, and feared by goblin and man alike."
          className="race-card"
        />

      <ContentCard 
          title="Orc"
          imagePath="/race-images/orc_logo.png" 
          linkTo="/races/orc"
          description="Created by the god Gruul with the explicit mission to destroy all life, orcs and their sister kin are not welcomed in society. Often gathered together in massive herds and bands, Orcs are famous for pillaging and looting undefended villages. Although some Orcs have been able to leave their mother herd and joined society, they still carry the monstrous reputation where ever they go."
          className="race-card"
        />

      <ContentCard 
          title="Lizardfolk"
          imagePath="/race-images/lizardfolk_logo.png" 
          linkTo="/races/lizardfolk"
          description="The terror of southern nations, Lizardfolk strike at night, burning and pillaging all that they find. Originating from the mysterious southern continent of Shima, not much is know about Lizardfolk other than what their victims report. Cruel, calculating, violent, and cannibalistic, the mere sight of a Lizardfolk in parts of the world will summon the city guard."
          className="race-card"
        />
        
      <ContentCard 
          title="Changeling"
          imagePath="/race-images/changeling_logo.png" 
          linkTo="/races/changeling"
          description="Created by the chaos god Emdo, changelings were hunted down to nigh extinction in the First Shattering. Since then, changelings have gone underground slinking in the shadows of society. The horrors of Emdo are fresh in the world's mind after the Second Shattering, and any changelings are rounded up and killed."
          className="race-card"
        />
      </div>
    </>
  );
};

export default RacesPage;