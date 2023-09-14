const ThirdLevelSpells = [
    {
        name: "Fireball",
        type: "Evocation",
        castingTime: "1 Action",
        range: "150 feet",
        components: "V, S, M (a tiny ball of bat guano and sulfur)",
        duration: "Instantaneous",
        effects: "A bright streak flashes from your pointing finger to a point you choose within range then blossoms with a low roar into an explosion of flame. Each creature in a 20-foot radius must make a Dexterity saving throw. A target takes 8d6 fire damage on a failed save, or half as much damage on a successful one. The fire spreads around corners. It ignites flammable objects in the area that aren’t being worn or carried.",
        description: "A powerful fire-based spell that deals damage in an area.",
        upCasting: "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd.",
        available: "Sorcerer, Wizard"
    },
    {
        name: "Lightning Bolt",
        source: "D&D Beyond",
        description: "A spell that creates a bolt of lightning to strike a target.",
    },
    {
        name: "Acid Arrow",
        source: "D&D Beyond",
        description: "A spell that conjures an arrow coated in acid.",
    },
];

export default ThirdLevelSpells;