import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom'
import './App.css'

// Import pages
import HomePage from './pages/home.tsx'
import SkillsPage from './pages/skills.tsx'
import ClassesPage from './pages/classes.tsx'
import RacesPage from './pages/races.tsx'
import GameRulesPage from './pages/game_rules.tsx'
import ToolsPage from './pages/tools.tsx'

// Import subpages

// Classes
import Shadow from './subpages/classes/shadow.tsx'
import Tactician from './subpages/classes/tactician.tsx'
import Minstrel from './subpages/classes/minstrel.tsx'
import Warden from './subpages/classes/warden.tsx'
import Paragon from './subpages/classes/paragon.tsx'
import Abnegate from './subpages/classes/abnegate.tsx'

// Skills
import Persuasion from './subpages/skills/persuasion.tsx'
import Bartering from './subpages/skills/bartering.tsx'
import Stealth from './subpages/skills/stealth.tsx'
import Medicine from './subpages/skills/medicine.tsx'
import Crafting from './subpages/skills/crafting.tsx'
import Performance from './subpages/skills/performance.tsx'
import Survival from './subpages/skills/survival.tsx'
import Animal_Handling from './subpages/skills/animal_handling.tsx'
import Lockpicking from './subpages/skills/lockpicking.tsx'
import Deception from './subpages/skills/deception.tsx'
import Investigation from './subpages/skills/investigation.tsx'
import Pickpocketing from './subpages/skills/pickpocketing.tsx'
import Intimidation from './subpages/skills/intimidation.tsx'
import Perception from './subpages/skills/perception.tsx'

function App() {
  return (
    <BrowserRouter>
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
          <NavLink to="/races" className={({isActive}) => isActive ? "active" : ""}>Races</NavLink>
          <NavLink to="/game-rules" className={({isActive}) => isActive ? "active" : ""}>Game Rules</NavLink>
          <NavLink to="/tools" className={({isActive}) => isActive ? "active" : ""}>Tools</NavLink>
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
              <Route path="/races" element={<RacesPage />} />
              <Route path="/game-rules" element={<GameRulesPage />} />
              <Route path="/tools" element={<ToolsPage />} />

              {/* Subpages */}
              <Route path="/classes/shadow" element={<Shadow />} />
              <Route path="/classes/tactician" element={<Tactician />} />
              <Route path="/classes/minstrel" element={<Minstrel />} />
              <Route path="/classes/warden" element={<Warden />} />
              <Route path="/classes/paragon" element={<Paragon />} />  
              <Route path="/classes/abnegate" element={<Abnegate />} />              

              <Route path="/skills/persuasion" element={<Persuasion />} />
              <Route path="/skills/bartering" element={<Bartering />} />
              <Route path="/skills/stealth" element={<Stealth />} />
              <Route path="/skills/medicine" element={<Medicine />} />
              <Route path="/skills/crafting" element={<Crafting />} />
              <Route path="/skills/performance" element={<Performance />} />
              <Route path="/skills/survival" element={<Survival />} />
              <Route path="/skills/animal_handling" element={<Animal_Handling />} />
              <Route path="/skills/lockpicking" element={<Lockpicking />} />
              <Route path="/skills/deception" element={<Deception />} />
              <Route path="/skills/investigation" element={<Investigation />} />
              <Route path="/skills/pickpocketing" element={<Pickpocketing />} />
              <Route path="/skills/intimidation" element={<Intimidation />} />
              <Route path="/skills/perception" element={<Perception />} />

              {/* 404 */}

              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
          <div className="right-sidebar"></div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App