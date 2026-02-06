import { BrowserRouter, Routes, Route, NavLink, Navigate, useLocation } from 'react-router-dom'
import './App.css'
import { ManeuverModalProvider } from './components/maneuver_modal'

// Import pages
import HomePage from './pages/home.tsx'
import SkillsPage from './pages/skills.tsx'
import CodicesPage from './pages/codices.tsx'
import AncestriesPage from './pages/ancestries.tsx'
import GameRulesPage from './pages/game_rules.tsx'
import ToolsPage from './pages/tools.tsx'
import SearchDatabasePage from './pages/search_database.tsx'

// Import subpages

// Codices
import Abnegate from './subpages/codices/abnegate.tsx'
import Conduit from './subpages/codices/conduit.tsx'
import Minstrel from './subpages/codices/minstrel.tsx'
import Paragon from './subpages/codices/paragon.tsx'
import Shadow from './subpages/codices/shadow.tsx'
import Tactician from './subpages/codices/tactician.tsx'
import Talent from './subpages/codices/talent.tsx'

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
import Abjuration from './subpages/skills/abjuration.tsx'
import HeavyWeapons from './subpages/skills/heavyweapons.tsx'
import Unarmed from './subpages/skills/unarmed.tsx'

// Tools
import CardCreator from './subpages/tools/maneuver_creator.tsx'
import DiceRoller from './subpages/tools/dice_roller.tsx'
import CharacterCreator from './subpages/tools/character_creator.tsx'
import CharacterManager from './subpages/tools/character_manager.tsx'

function AppLayout() {
  const location = useLocation()
  const isGameRulesRoute = location.pathname === '/game-rules'

  return (
    <ManeuverModalProvider>
      <div className="app-container">
        {/* TOP BANNER */}
        <header className="header">
          <img src="/banner.png" alt="CryptCrawler 5e Banner" />
          <img src="/CryptCrawlerLogo.png" alt="CryptCrawler Logo" className="logo-overlay" />
        </header>

        {/* NAVIGATION BAR */}
        <nav className="navbar">
          <NavLink to="/" className={({isActive}) => isActive ? 'active' : ''}>Home</NavLink>
          <NavLink to="/skills" className={({isActive}) => isActive ? 'active' : ''}>Skills</NavLink>
          <NavLink to="/codices" className={({isActive}) => isActive ? 'active' : ''}>Codices</NavLink>
          <NavLink to="/ancestries" className={({isActive}) => isActive ? 'active' : ''}>Ancestries</NavLink>
          <NavLink to="/game-rules" className={({isActive}) => isActive ? 'active' : ''}>Game Rules</NavLink>
          <NavLink to="/tools" className={({isActive}) => isActive ? 'active' : ''}>Tools</NavLink>
          <NavLink to="/search-database" className={({isActive}) => isActive ? 'active' : ''}>Search Database</NavLink>
        </nav>

        {/* MAIN CONTENT */}
        <div className={`main-layout ${isGameRulesRoute ? 'main-layout-rules' : ''}`}>
          <div className="left-sidebar"></div>
          <div className="content">
            <Routes>
              {/* Main pages */}
              <Route path="/" element={<HomePage />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/codices" element={<CodicesPage />} />
              <Route path="/ancestries" element={<AncestriesPage />} />
              <Route path="/game-rules" element={<GameRulesPage />} />
              <Route path="/tools" element={<ToolsPage />} />
              <Route path="/search-database" element={<SearchDatabasePage />} />

              {/* Codices */}
              <Route path="/codices/abnegate" element={<Abnegate />} />
              <Route path="/codices/conduit" element={<Conduit />} />
              <Route path="/codices/minstrel" element={<Minstrel />} />
              <Route path="/codices/paragon" element={<Paragon />} />
              <Route path="/codices/shadow" element={<Shadow />} />
              <Route path="/codices/tactician" element={<Tactician />} />
              <Route path="/codices/talent" element={<Talent />} />

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
              <Route path="/skills/abjuration" element={<Abjuration />} />
              <Route path="/skills/heavyweapons" element={<HeavyWeapons />} />
              <Route path="/skills/unarmed" element={<Unarmed />} />

              {/* Tools */}
              <Route path="/tools/card-creator" element={<CardCreator />} />
              <Route path="/tools/maneuver-creator" element={<CardCreator />} />
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
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  )
}

export default App
