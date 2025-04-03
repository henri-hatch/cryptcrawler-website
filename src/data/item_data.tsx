interface ItemData {
    id: string;
    name: string;
    gpCost: number;
    weight: number;
    category: string[]; // Can be any number of: "equipment", "consumable", "weapon", "armor", "tool", "adventuring_gear", "magic_item"
    description: string;
    maneuverImage?: string;
}

const itemData: ItemData[] = [
    {
        id: "abacus",
        name: "Abacus",
        gpCost: 2,
        weight: 4,
        description: "A counting frame with beads, used for calculations and accounting.",
        category: ["equipment"],
    },
    {
        id: "acid_vial",
        name: "Acid (Vial)",
        gpCost: 25,
        weight: 1,
        description: "A vial of corrosive acid that can be used to dissolve materials or as a weapon.",
        category: ["equipment", "consumable"],
    },
    {
        id: "alchemist_fire",
        name: "Alchemist Fire",
        gpCost: 50,
        weight: 1,
        description: "A sticky, flammable substance that ignites on contact with air. It can be thrown as a weapon or used to create a fire.",
        category: ["equipment", "consumable"],
    },
    {
        id: "alchemist_supplies",
        name: "Alchemist Supplies",
        gpCost: 50,
        weight: 10,
        description: "A set of tools and ingredients used by alchemists to create potions, poisons, and other chemical concoctions.",
        category: ["equipment", "tool"],
    }
]

export default itemData;