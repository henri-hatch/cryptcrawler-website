interface OriginData { 
    id: string;
    name: string;
    description: string;
    benefit: string;
    drawback: string;
    originImage: string;
    category: string[];
}

const originData: OriginData[] = [
    {
        id: "invasive-premonitions",
        name: "Invasive Premonitions",
        description: "You sometimes experience disturbing visions of possible futures, giving you glimpses into what might come to pass.",
        benefit: "Once per day, you may reroll any d20 roll you make, using the new result.",
        drawback: "You occasionally suffer from vivid nightmares and hallucinations that leave you shaken. When you roll a natural 1 on any d20 roll, you become frightened until the end of your next turn.",
        originImage: "path/to/image.jpg",
        category: ["origin"]
    },
    {
        id: "street-smart",
        name: "Street Smart",
        description: "You grew up on the rough streets, learning to survive through wit and cunning.",
        benefit: "You gain a +2 bonus to Stealth and Pickpocketing checks.",
        drawback: "Your rough upbringing makes you distrustful of authority. You have disadvantage on Persuasion checks when dealing with law enforcement or nobles.",
        originImage: "path/to/street_image.jpg",
        category: ["origin"]
    },
    {
        id: "noble-born",
        name: "Noble Born",
        description: "You were born into privilege and wealth, with access to the finest education and resources.",
        benefit: "You start with an additional 100 gold pieces and gain a +2 bonus to History and Persuasion checks.",
        drawback: "Your sheltered upbringing leaves you unprepared for hardship. You have disadvantage on Survival checks and take double damage from environmental hazards.",
        originImage: "path/to/noble_image.jpg",
        category: ["origin"]
    }
]

export default originData;