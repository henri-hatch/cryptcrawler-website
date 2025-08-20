import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom'
import './App.css'
import { ManeuverModalProvider } from './components/maneuver_modal'

// Import pages
import HomePage from './pages/home.tsx'
import SkillsPage from './pages/skills.tsx'
import ClassesPage from './pages/classes.tsx'
import AncestriesPage from './pages/ancestries.tsx'
import GameRulesPage from './pages/game_rules.tsx'
import ToolsPage from './pages/tools.tsx'
import SearchDatabasePage from './pages/search_database.tsx'

// Import subpages

// Classes
import Shadow from './subpages/classes/shadow.tsx'
import Tactician from './subpages/classes/tactician.tsx'
import Minstrel from './subpages/classes/minstrel.tsx'
import Paragon from './subpages/classes/paragon.tsx'
import Abnegate from './subpages/classes/abnegate.tsx'
import Conduit from './subpages/classes/conduit.tsx'
import Talent from './subpages/classes/talent.tsx'

// Ancestries
import Changeling from './subpages/ancestries/changeling.tsx'
import Draeling from './subpages/ancestries/draeling.tsx'
import Dragonborn from './subpages/ancestries/dragonborn.tsx'
import Dwarf from './subpages/ancestries/dwarf.tsx'
import Elf from './subpages/ancestries/elf.tsx'
import Githyanki from './subpages/ancestries/githyanki.tsx'
import Goblin from './subpages/ancestries/goblin.tsx'
import HalfElf from './subpages/ancestries/half-elf.tsx'
import HalfOrc from './subpages/ancestries/half-orc.tsx'
import Hartkin from './subpages/ancestries/hartkin.tsx'
import Harengon from './subpages/ancestries/harengon.tsx'
import Hobgoblin from './subpages/ancestries/hobgoblin.tsx'
import Human from './subpages/ancestries/human.tsx'
import Kenku from './subpages/ancestries/kenku.tsx'
import Kobold from './subpages/ancestries/kobold.tsx'
import Lizardfolk from './subpages/ancestries/lizardfolk.tsx'
import Mul from './subpages/ancestries/mul.tsx'
import Orc from './subpages/ancestries/orc.tsx'
import Tabaxi from './subpages/ancestries/tabaxi.tsx'
import Warforged from './subpages/ancestries/warforged.tsx'
import Gnome from './subpages/ancestries/gnome.tsx'

// Skills
import Persuasion from './subpages/skills/persuasion.tsx'
import Stealth from './subpages/skills/stealth.tsx'
import Medicine from './subpages/skills/medicine.tsx'
import Crafting from './subpages/skills/crafting.tsx'
import Survival from './subpages/skills/survival.tsx'
import Animal_Handling from './subpages/skills/animal_handling.tsx'
import Lockpicking from './subpages/skills/lockpicking.tsx'
import Deception from './subpages/skills/deception.tsx'
import Investigation from './subpages/skills/investigation.tsx'
import Pickpocketing from './subpages/skills/pickpocketing.tsx'
import Intimidation from './subpages/skills/intimidation.tsx'
import Perception from './subpages/skills/perception.tsx'
import Insight from './subpages/skills/insight.tsx'
import History from './subpages/skills/history.tsx'
import Acrobatics from './subpages/skills/acrobatics.tsx'
import Arcana from './subpages/skills/arcana.tsx'
import Unarmed from './subpages/skills/unarmed.tsx'


// Skills Subpages
import ArcanaSpells from './subpages/skill_subpages/arcana_spells.tsx'
import ArcanaSpells2 from './subpages/skill_subpages/arcana_spells_2.tsx'
import ArcanaSpells3 from './subpages/skill_subpages/arcana_spells_3.tsx'

// Tools
import CardCreator from './subpages/tools/maneuver_creator.tsx'
import DiceRoller from './subpages/tools/dice_roller.tsx'
import CharacterCreator from './subpages/tools/character_creator.tsx'
import CharacterManager from './subpages/tools/character_manager.tsx'

function App() {
  return (
    <BrowserRouter>
      <ManeuverModalProvider>
        <div className="app-container">
          {/* TOP BANNER */}
          <header className="header">
            <img src="/banner.png" alt="CryptCrawler 5e Banner" />
            <img src="/CryptCrawlerLogo.png" alt="CryptCrawler Logo" className="logo-overlay" />
          </header>

          {/* NAVIGATION BAR */}
          <nav className="navbar">
            <NavLink to="/" className={({isActive}) => isActive ? "active" : ""}>Home</NavLink>
            <NavLink to="/skills" className={({isActive}) => isActive ? "active" : ""}>Skills</NavLink>
            <NavLink to="/classes" className={({isActive}) => isActive ? "active" : ""}>Classes</NavLink>
            <NavLink to="/ancestries" className={({isActive}) => isActive ? "active" : ""}>Ancestries</NavLink>
            <NavLink to="/game-rules" className={({isActive}) => isActive ? "active" : ""}>Game Rules</NavLink>
            <NavLink to="/tools" className={({isActive}) => isActive ? "active" : ""}>Tools</NavLink>
            <NavLink to="/search-database" className={({isActive}) => isActive ? "active" : ""}>Search Database</NavLink>
          </nav>
      
          {/* MAIN CONTENT */}
          <div className="main-layout">
            <div className="left-sidebar"></div>
            <div className="content">
              <Routes>
                {/* Main pages */}
                
                <Route path="/" element={<HomePage />} />
                <Route path="/skills" element={<SkillsPage />} />
                <Route path="/classes" element={<ClassesPage />} />
                <Route path="/ancestries" element={<AncestriesPage />} />
                <Route path="/game-rules" element={<GameRulesPage />} />
                <Route path="/tools" element={<ToolsPage />} />
                <Route path="/search-database" element={<SearchDatabasePage />} />

                {/* Subpages */}

                {/* Classes */}
                <Route path="/classes/shadow" element={<Shadow />} />
                <Route path="/classes/tactician" element={<Tactician />} />
                <Route path="/classes/minstrel" element={<Minstrel />} />
                <Route path="/classes/paragon" element={<Paragon />} />
                <Route path="/classes/abnegate" element={<Abnegate />} />
                <Route path="/classes/conduit" element={<Conduit />} />
                <Route path="/classes/talent" element={<Talent />} />

                {/* Ancestries */}
                <Route path="/ancestries/changeling" element={<Changeling />} />
                <Route path="/ancestries/draeling" element={<Draeling />} />
                <Route path="/ancestries/dragonborn" element={<Dragonborn />} />
                <Route path="/ancestries/dwarf" element={<Dwarf />} />
                <Route path="/ancestries/elf" element={<Elf />} />
                <Route path="/ancestries/githyanki" element={<Githyanki />} />
                <Route path="/ancestries/goblin" element={<Goblin />} />
                <Route path="/ancestries/half-elf" element={<HalfElf />} />
                <Route path="/ancestries/half-orc" element={<HalfOrc />} />
                <Route path="/ancestries/hartkin" element={<Hartkin />} />
                <Route path="/ancestries/harengon" element={<Harengon />} />
                <Route path="/ancestries/hobgoblin" element={<Hobgoblin />} />
                <Route path="/ancestries/human" element={<Human />} />
                <Route path="/ancestries/kenku" element={<Kenku />} />
                <Route path="/ancestries/kobold" element={<Kobold />} />
                <Route path="/ancestries/lizardfolk" element={<Lizardfolk />} />
                <Route path="/ancestries/mul" element={<Mul />} />
                <Route path="/ancestries/orc" element={<Orc />} />
                <Route path="/ancestries/tabaxi" element={<Tabaxi />} />
                <Route path="/ancestries/warforged" element={<Warforged />} />
                <Route path="/ancestries/gnome" element={<Gnome />} />

                {/* Skills */}
                <Route path="/skills/persuasion" element={<Persuasion />} />
                <Route path="/skills/stealth" element={<Stealth />} />
                <Route path="/skills/medicine" element={<Medicine />} />
                <Route path="/skills/crafting" element={<Crafting />} />
                <Route path="/skills/survival" element={<Survival />} />
                <Route path="/skills/animal_handling" element={<Animal_Handling />} />
                <Route path="/skills/lockpicking" element={<Lockpicking />} />
                <Route path="/skills/deception" element={<Deception />} />
                <Route path="/skills/investigation" element={<Investigation />} />
                <Route path="/skills/pickpocketing" element={<Pickpocketing />} />
                <Route path="/skills/intimidation" element={<Intimidation />} />
                <Route path="/skills/perception" element={<Perception />} />
                <Route path="/skills/insight" element={<Insight />} />
                <Route path="/skills/history" element={<History />} />
                <Route path="/skills/acrobatics" element={<Acrobatics />} />
                <Route path="/skills/arcana" element={<Arcana />} />
                <Route path="/skills/unarmed" element={<Unarmed />} />                


                {/* Skills Subpages */}
                <Route path="/skills/crafting/arcana-spells" element={<ArcanaSpells />} />
                <Route path="/skills/crafting/arcana-spells-2" element={<ArcanaSpells2 />} />
                <Route path="/skills/crafting/arcana-spells-3" element={<ArcanaSpells3 />} />

                {/* Tools */}
                <Route path="/tools/card-creator" element={<CardCreator />} />
                <Route path="/tools/maneuver-creator" element={<CardCreator />} />  {/* Legacy route */}
                <Route path="/tools/dice-roller" element={<DiceRoller />} />
                <Route path="/tools/character-creator" element={<CharacterCreator />} />
                <Route path="/tools/character-manager" element={<CharacterManager />} />

                {/* 404 */}

                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </div>
            <div className="right-sidebar"></div>
          </div>
        </div>
      </ManeuverModalProvider>
    </BrowserRouter>
  )
}

export default App