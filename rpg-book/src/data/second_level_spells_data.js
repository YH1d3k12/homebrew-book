const SecondLevelSpells = [
    {
        name: "Heat Metal",
        type: "Transmutation",
        castingTime: "1 Action",
        range: "60 feet",
        components: "V, S, M (a piece of iron and a flame)",
        duration: "Concentration, up to 1 minute",
        effect: "Choose a manufactured metal object, such as a metal weapon or a suit of heavy or medium metal armor, that you can see within range. You cause the object to glow red-hot. Any creature in physical contact with the object takes 2d8 fire damage when you cast the spell. Until the spell ends, you can use a bonus action on each of your subsequent turns to cause this damage again.\n If a creature is holding or wearing the object and takes the damage from it, the creature must succeed on a Constitution saving throw or drop the object if it can. If it doesn’t drop the object, it has disadvantage on attack rolls and ability checks until the start of your next turn.",
        description: "Inflicts intense heat and damage to metal objects.",
        upCasting: "When you cast this spell at higher levels, the damage increases by 1d8 for each level above 2nd.",
        available: "Druid, Ranger"
    },
    {
        name: "Hold Person",
        type: "Enchantment",
        castingTime: "1 Action",
        range: "60 feet",
        components: "V, S, M (a small, straight piece of iron)",
        duration: "Concentration, up to 1 minute",
        effect: "Choose a humanoid that you can see within range. The target must succeed on a Wisdom saving throw or be paralyzed for the duration. At the end of each of its turns, the target can make another Wisdom saving throw. On a success, the spell ends on the target.",
        description: "Immobilizes a humanoid creature, rendering them unable to move.",
        upCasting: "When you cast this spell at higher levels, you can target one additional humanoid for each level above 2nd. The humanoids must be within 30 feet of each other when you target them.",
        available: "Bard, Cleric, Druid, Sorcerer, Warlock, Wizard"
    },
    {
        name: "Pass Without a Trace",
        type: "Abjuration",
        castingTime: "1 Action",
        range: "Self",
        components: "V, S, M (ashes from a burned leaf of mistletoe and a sprig of spruce)",
        duration: "Concentration, up to 1 hour",
        effect: "A veil of shadows and silence radiates from you, masking you and your companions from detection. For the duration, each creature you choose within 30 feet of you (including you) has a +10 bonus to Dexterity (Stealth) checks and can’t be tracked except by magical means. A creature that receives this bonus leaves behind no tracks or other traces of its passage.",
        description: "Grants stealth bonuses and conceals tracks.",
        upCasting: "When you cast this spell as 5th-level spell or higher, there is no need for concentration.",
        available: "Druid, Ranger"
    },
];

export default SecondLevelSpells;