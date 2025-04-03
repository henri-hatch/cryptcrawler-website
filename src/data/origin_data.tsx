import itemData from './item_data';

interface OriginData { 
    equipment: EquipmentOriginData[];
    quirks: QuirkOriginData[];
    histories: HistoryOriginData[];
}

// Simplified interface that references item IDs
interface EquipmentOriginData {
    id: string; // References an item ID in itemData
    origin_cost: number; // Always 1 as per your requirement
    type: "equipment";
}

interface QuirkOriginData {
    id: string;
    name: string;
    origin_cost: number;
    description: string;
    type: "quirk";
}

interface HistoryOriginData {
    id: string;
    name: string;
    origin_cost: number;
    description: string;
    type: "history";
}

const equipmentOriginData: EquipmentOriginData[] = [
    {
        id: "abacus",
        origin_cost: 1,
        type: "equipment"
    },
    {
        id: "acid_vial",
        origin_cost: 1,
        type: "equipment"
    },
    {
        id: "alchemist_fire",
        origin_cost: 1,
        type: "equipment"
    },
    {
        id: "alchemist_supplies",
        origin_cost: 1,
        type: "equipment"
    },
    {
        id: "antitoxin",
        origin_cost: 1,
        type: "equipment"
    }
];

// No changes to quirks and histories
const quirkOriginData: QuirkOriginData[] = [
    {
        id: "amnesia",
        name: "Amnesia",
        origin_cost: 1,
        description: "AAA",
        type: "quirk"
    },
    {
        id: "strange_tattoo",
        name: "Strange Tattoo",
        origin_cost: 1,
        description: "AAA",
        type: "quirk"
    },
    {
        id: "paranoid",
        name: "Paranoid",
        origin_cost: 1,
        description: "AAA",
        type: "quirk"
    },
    {
        id: "voices_in_head",
        name: "Voice(s) in your Head",
        origin_cost: 1,
        description: "AAA",
        type: "quirk"
    }
];

const historyOriginData: HistoryOriginData[] = [
    {
        id: "betrayed_by_close_friend",
        name: "Betrayed by a Close Friend",
        origin_cost: 1,
        description: "AAA",
        type: "history"
    },
    {
        id: "parents_were_killed",
        name: "Parents were Killed",
        origin_cost: 1,
        description: "AAA",
        type: "history"
    },
    {
        id: "inherited_family_wealth",
        name: "Inherited Family Wealth",
        origin_cost: 1,
        description: "AAA",
        type: "history"
    },
    {
        id: "miraculous_experience",
        name: "Miraculous Experience",
        origin_cost: 1,
        description: "AAA",
        type: "history"
    },
    {
        id: "discovered_a_secret",
        name: "Discovered a Long-Lost Secret",
        origin_cost: 1,
        description: "AAA",
        type: "history"
    }
];

// Add a helper function to get full item details
// This will help your UI display correct information
export const getEquipmentDetails = (itemId: string) => {
    const originItem = equipmentOriginData.find(item => item.id === itemId);
    const itemDetails = itemData.find(item => item.id === itemId);
    
    if (!originItem || !itemDetails) return null;
    
    return {
        id: itemId,
        name: itemDetails.name,
        origin_cost: originItem.origin_cost,
        description: `${itemDetails.name} (${itemDetails.gpCost}gp, ${itemDetails.weight}lbs)`,
        type: "equipment" as const
    };
};

const originData: OriginData = {
    equipment: equipmentOriginData,
    quirks: quirkOriginData,
    histories: historyOriginData
};

export default originData;