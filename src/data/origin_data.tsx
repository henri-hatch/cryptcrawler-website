interface OriginData { 
    equipment: EquipmentOriginData[];
    quirks: QuirkOriginData[];
    histories: HistoryOriginData[];
}

interface EquipmentOriginData {
    id: string;
    name: string;
    cost: number;
    description: string;
    type: "equipment";
}

interface QuirkOriginData {
    id: string;
    name: string;
    cost: number;
    description: string;
    type: "quirk";
}

interface HistoryOriginData {
    id: string;
    name: string;
    cost: number;
    description: string;
    type: "history";
}
  
const equipmentOriginData: EquipmentOriginData[] = [
    {
        id: "abacus",
        name: "Abacus",
        cost: 1,
        description: "AAA",
        type: "equipment"
    },
    {
        id: "acid_vial",
        name: "Acid (Vial)",
        cost: 1,
        description: "AAA",
        type: "equipment"
    },
    {
        id: "alchemist_fire",
        name: "Alchemist Fire",
        cost: 1,
        description: "AAA",
        type: "equipment"
    },
    {
        id: "alchemist_supplies",
        name: "Alchemist Supplies",
        cost: 1,
        description: "AAA",
        type: "equipment"
    },
    {
        id: "antitoxin",
        name: "Anti-toxin (Vial)",
        cost: 1,
        description: "AAA",
        type: "equipment"
    }
]

const quirkOriginData: QuirkOriginData[] = [
    {
        id: "amnesia",
        name: "Amnesia",
        cost: 1,
        description: "AAA",
        type: "quirk"
    },
    {
        id: "strange_tattoo",
        name: "Strange Tattoo",
        cost: 1,
        description: "AAA",
        type: "quirk"
    },
    {
        id: "paranoid",
        name: "Paranoid",
        cost: 1,
        description: "AAA",
        type: "quirk"
    },
    {
        id: "voices_in_head",
        name: "Voice(s) in your Head",
        cost: 1,
        description: "AAA",
        type: "quirk"
    }
]

const historyOriginData: HistoryOriginData[] = [
    {
        id: "betrayed_by_close_friend",
        name: "Betrayed by a Close Friend",
        cost: 1,
        description: "AAA",
        type: "history"
    },
    {
        id: "parents_were_killed",
        name: "Parents were Killed",
        cost: 1,
        description: "AAA",
        type: "history"
    },
    {
        id: "inherited_family_wealth",
        name: "Inherited Family Wealth",
        cost: 1,
        description: "AAA",
        type: "history"
    },
    {
        id: "miraculous_experience",
        name: "Miraculous Experience",
        cost: 1,
        description: "AAA",
        type: "history"
    },
    {
        id: "discovered_a_secret",
        name: "Discovered a Long-Lost Secret",
        cost: 1,
        description: "AAA",
        type: "history"
    }
]

const originData: OriginData = {
    equipment: equipmentOriginData,
    quirks: quirkOriginData,
    histories: historyOriginData
}


export default originData;