const ThirdLevelSpells = [
    {
        name: "Aura of Vitality",
        type: "Evocation",
        castingTime: "1 action",
        range: "Self (30-foot radius)",
        components: "V",
        duration: "Concentration, up to 1 minute",
        effect: "Healing energy radiates from you in an aura with a 30-foot radius. Until the spell ends, the aura moves with you, centered on you. You can use a bonus action to cause one creature in the aura (including you) to regain 2d6 hit points.",
        description: "Heals a creature of choice at the start of each turn.",
        upCasting: "When you cast this spell at higher levels, the healing increases by 1d6 for each level above 3rd.",
        available: "Paladin"
    },
    {
        name: "Fireball",
        type: "Evocation",
        castingTime: "1 Action",
        range: "150 feet",
        components: "V, S, M (a tiny ball of bat guano and sulfur)",
        duration: "Instantaneous",
        effect: "A bright streak flashes from your pointing finger to a point you choose within range then blossoms with a low roar into an explosion of flame. Each creature in a 20-foot radius must make a Dexterity saving throw. A target takes 8d6 fire damage on a failed save, or half as much damage on a successful one. The fire spreads around corners. It ignites flammable objects in the area that aren't being worn or carried.",
        description: "Creates a fiery explosion dealing AoE fire damage.",
        upCasting: "When you cast this spell at higher levels, the damage increases by 1d6 for each level above 3rd.",
        available: "Sorcerer, Wizard"
    },
    {
        name: "Fly",
        type: "Transmutation",
        castingTime: "1 Action",
        range: "Touch",
        components: "V, S, M (a wing feather from any bird)",
        duration: "Concentration, up to 10 minutes",
        effect: "You touch a willing creature. The target gains a flying speed of 60 feet for the duration. When the spell ends, the target falls if it is still aloft, unless it can stop the fall.",
        description: "Grants the ability to fly for a limited duration.",
        upCasting: "When you cast this spell at higher levels, you can target one additional creature for each level above 3rd.",
        available: "Artificer, Sorcerer, Warlock, Wizard"
    }

];

export default ThirdLevelSpells;