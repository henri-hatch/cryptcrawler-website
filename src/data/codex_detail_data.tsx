import { CodexNode, CodexTier } from '../components/codex_tree';
import codexData from './codex_data';

export interface CodexDetail {
  id: string;
  name: string;
  description: string;
  lore?: string;
  mastery: CodexNode;
  tiers: CodexTier[];
}

const demoManeuverId = 'flurry-of-blows';

const buildTier = (tier: CodexTier['tier'], labels: string[], linkFirst = false): CodexTier => ({
  tier,
  nodes: labels.map((label, index) => ({
    label,
    maneuverId: linkFirst && index === 0 ? demoManeuverId : undefined,
  })),
});

const codexById = new Map(codexData.map((codex) => [codex.id, codex]));

const codexDetails: CodexDetail[] = [
  {
    id: 'conduit',
    name: codexById.get('conduit')?.name || 'Conduit',
    description: codexById.get('conduit')?.description || '',
    lore: 'Conduits channel voices from beyond, carrying vows and omens into the mortal world.',
    mastery: {
      label: 'Conduit Mastery',
      maneuverId: demoManeuverId,
    },
    tiers: [
      buildTier(1, ['Whispered Rite', 'Blessed Current'], true),
      buildTier(2, ['Sanctified Pulse', 'Veil of Mercy', 'Covenant Ward']),
      buildTier(3, ['Astral Echo']),
      buildTier(4, ['Divine Relay']),
      buildTier(5, ['Celestial Channel', 'Vowkeeper']),
    ],
  },
  {
    id: 'minstrel',
    name: codexById.get('minstrel')?.name || 'Minstrel',
    description: codexById.get('minstrel')?.description || '',
    lore: 'Minstrels weave fate with lyric and rhythm, turning the tide through story and song.',
    mastery: {
      label: 'Minstrel Mastery',
      maneuverId: demoManeuverId,
    },
    tiers: [
      buildTier(1, ['Opening Verse', 'Crowd Chorus', 'Lively Tempo'], true),
      buildTier(2, ['Ballad of Blades', 'Echoing Strain', 'Silver Tongue']),
      buildTier(3, ['Cadence of Courage', 'Dissonant Refrain', 'Storyteller\'s Spark']),
      buildTier(4, ['Mythic Bridge', 'Harmonized Resolve', 'Lorekeeper\'s Call']),
      buildTier(5, ['Legend\'s Crescendo', 'Finale of Dawn', 'Versebound Fate']),
    ],
  },
  {
    id: 'paragon',
    name: codexById.get('paragon')?.name || 'Paragon',
    description: codexById.get('paragon')?.description || '',
    lore: 'Paragons are oathbound champions who refine discipline into unbreakable will.',
    mastery: {
      label: 'Paragon Mastery',
      maneuverId: demoManeuverId,
    },
    tiers: [
      buildTier(1, ['Oathbearer\'s Step', 'Steadfast Guard', 'Resolute Strike'], true),
      buildTier(2, ['Honored Charge', 'Shieldwall Stance', 'Oathfire']),
      buildTier(3, ['Radiant Sentinel', 'Valor Surge', 'Judgment Path']),
      buildTier(4, ['Ideal Ascendant', 'Crest of Glory', 'Unyielding March']),
      buildTier(5, ['Pillar of Virtue', 'Hero\'s Apex', 'Eternal Standard']),
    ],
  },
  {
    id: 'shadow',
    name: codexById.get('shadow')?.name || 'Shadow',
    description: codexById.get('shadow')?.description || '',
    lore: 'Shadows carve out secrets, slipping between sightlines and striking from silence.',
    mastery: {
      label: 'Shadow Mastery',
      maneuverId: demoManeuverId,
    },
    tiers: [
      buildTier(1, ['Silent Entry', 'Night\'s Caress', 'Veilwalker'], true),
      buildTier(2, ['Ghost Step', 'Smoke and Steel', 'Broken Watch']),
      buildTier(3, ['Ebon Feint', 'Shadow Feast', 'Hidden Path']),
      buildTier(4, ['Blackout Gambit', 'Cloaked Strike', 'Wraithmind']),
      buildTier(5, ['Midnight Reign', 'Fading Legend', 'Mask of Nothing']),
    ],
  },
  {
    id: 'tactician',
    name: codexById.get('tactician')?.name || 'Tactician',
    description: codexById.get('tactician')?.description || '',
    lore: 'Tacticians bend chaos into pattern, orchestrating every battlefield exchange.',
    mastery: {
      label: 'Tactician Mastery',
      maneuverId: demoManeuverId,
    },
    tiers: [
      buildTier(1, ['First Orders', 'Forward Line', 'Measured Advance'], true),
      buildTier(2, ['Strategic Sweep', 'Battlefield Read', 'Perfect Flank']),
      buildTier(3, ['Command Pulse', 'Calculated Risk', 'Seizing Tempo']),
      buildTier(4, ['War Table', 'Masterstroke', 'Iron Discipline']),
      buildTier(5, ['Grand Strategy', 'Final Formation', 'Victory Signal']),
    ],
  },
  {
    id: 'talent',
    name: codexById.get('talent')?.name || 'Talent',
    description: codexById.get('talent')?.description || '',
    lore: 'Talents ignite inner magic, shaping raw emotion into controlled power.',
    mastery: {
      label: 'Talent Mastery',
      maneuverId: demoManeuverId,
    },
    tiers: [
      buildTier(1, ['Arcane Pulse', 'Focus Point', 'Surgecraft'], true),
      buildTier(2, ['Spellflow', 'Kindled Rage', 'Calm Channel']),
      buildTier(3, ['Resonant Heart', 'Primal Burst', 'Mana Thread']),
      buildTier(4, ['Empowered Will', 'Wellspring', 'Soulflare']),
      buildTier(5, ['Aether Crown', 'Ascendant Spark', 'Living Arcana']),
    ],
  },
  {
    id: 'abnegate',
    name: codexById.get('abnegate')?.name || 'Abnegate',
    description: codexById.get('abnegate')?.description || '',
    lore: 'Abnegates bend null-force to break magic, standing as the world\'s quiet counterspell.',
    mastery: {
      label: 'Abnegate Mastery',
      maneuverId: demoManeuverId,
    },
    tiers: [
      buildTier(1, ['Nullwalk', 'Echo Break', 'Hardened Frame'], true),
      buildTier(2, ['Silence Field', 'Disruptive Palm', 'Severing Grasp']),
      buildTier(3, ['Voidproof', 'Mirror Null', 'Stubborn Core']),
      buildTier(4, ['Shatterglyph', 'Absence Tide', 'Crack the Sigil']),
      buildTier(5, ['Total Denial', 'End of Spell', 'Still Horizon']),
    ],
  },
];

export default codexDetails;
