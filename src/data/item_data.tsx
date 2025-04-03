interface ItemData {
    id: string;
    name: string;
    gpCost: number;
    weight: number;
    category: string[]; // Can be any number of: "equipment", "consumable", "weapon", "armor", "tool", "adventuring_gear", "magic_item"
    maneuverImage?: string;
}

const itemData: ItemData[] = [
    {
        id: "abacus",
        name: "Abacus",
        gpCost: 2,
        weight: 4,
        category: ["equipment"],
    },
    {
        id: "acid_vial",
        name: "Acid (Vial)",
        gpCost: 25,
        weight: 1,
        category: ["equipment", "consumable"],
    },
    {
        id: "alchemist_fire",
        name: "Alchemist Fire",
        gpCost: 50,
        weight: 1,
        category: ["equipment", "consumable"],
    },
    {
        id: "alchemist_supplies",
        name: "Alchemist Supplies",
        gpCost: 50,
        weight: 10,
        category: ["equipment", "tool"],
    }
]

export default itemData;