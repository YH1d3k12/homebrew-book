const FirstLevelSpells = [
    {
        name: "Cure Wounds",
        type: "Evocation",
        castingTime: "1 Action",
        range: "Touch",
        components: "V, S",
        duration: "Instantaneous",
        effect: "A creature you touch regains a number of hit points equal to 1d8 + your spellcasting ability modifier. This spell has no effect on undead or constructs.",
        description: "A healing touch that restores hit points.",
        upCasting: "The healing increases by 1d8 for each spell level above 1st.",
        available: "Artificer, Bard, Cleric, Druid, Paladin, Ranger"
    },
    {
        name: "Feather Fall",
        type: "Transmutation",
        castingTime: "1 reaction, which you take when you or a creature within 60 feet of you falls",
        range: "60 feet",
        components: "V, M (a small feather or piece of down)",
        duration: "1 minute",
        effect: "Choose up to five falling creatures within range. A falling creature’s rate of descent slows to 60 feet per round until the spell ends. If the creature lands before the spell ends, it takes no falling damage and can land on its feet, and the spell ends for that creature.",
        description: "Slows falling speed, ensuring a gentle descent and preventing fall-related injuries.",
        upCasting: "You can target one additional creature for each spell level abote 1st.",
        available: "Artificer, Bard, Sorcerer, Wizard"
    },
    {
        name: "Repair",
        type: "Transmutation",
        castingTime: "1 Action",
        range: "Touch",
        components: "V, S, M (a small toolkit or set of tools)",
        duration: "Instantaneous",
        effect: "You channel mending energy into a construct or object, restoring it to a functional state. This spell can repair simple mechanical devices, weapons, armor, or other non-magical items. However, it cannot restore missing parts or pieces of objects or constructs unless you have the required materials within 5 feet of you during casting. \n A construct regains hit points equal to 2d8 + your spellcasting ability modifier.",
        description: "Heals constructs and repairs non-magical objects.",
        upCasting: "The healing increases by 1d8 for each spell level above 1st.",
        available: "Artificer"
    },
    {
        name: "Shield",
        type: "Abjuration",
        castingTime: "1 reaction, which you take when you are hit by an attack or targeted by the magic missile spell",
        range: "Self",
        components: "V, S",
        duration: "1 round",
        effect: "An invisible barrier of magical force appears and protects you. Until the start of your next turn, you have a +5 bonus to AC, including against the triggering attack, and you take no damage from magic missile.",
        description: "Creates a temporary force field that boosts your armor class.",
        upCasting: "The duration of the spell increases by 1 round for every two levels above 1st",
        available: "Sorcerer, Wizard"
    },
];

export default FirstLevelSpells;