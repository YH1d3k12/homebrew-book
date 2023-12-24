const meleeWeapons = [
    {
        // Item Attributes.
        name: "Hand Axe",
        source: "Homebrew",
        rarity: "Common",
        description: "A short-handled axe intended for use with one hand",
        cost: "2gp",
        magical: false,
        attunement: false,
        // Weapon Attributes.
        type: "Axes",
        category: "Simple",
        slashing: "1d6",
        piercing: "-",
        bludgeoning: "-",
        critRange: "-",
        critDMG: "*3",
        properties: "Light, Thrown (range 20/60)"
    },
    {
        // Item Attributes.
        name: "Battle Axe",
        source: "Homebrew",
        rarity: "Common",
        description: "-",
        cost: "7gp",
        magical: false,
        attunement: false,
        // Weapon Attributes.
        type: "Axes",
        category: "Martial",
        slashing: "1d8",
        piercing: "-",
        bludgeoning: "-",
        critRange: "-",
        critDMG: "*3",
        properties: "Versatile (1d10 slashing, 1d6 bludgeoning), Thrown (20/40)"
    },
    {
        // Item Attributes.
        name: "Pole Axe",
        source: "Homebrew",
        rarity: "Common",
        description: "-",
        cost: "20gp",
        magical: false,
        attunement: false,
        // Weapon Attributes.
        type: "Axes",
        category: "Martial",
        slashing: "1d10",
        piercing: "-",
        bludgeoning: "-",
        critRange: "-",
        critDMG: "*3",
        properties: "Heavy, Reach, Two-Handed"
    },
    {
        // Item Attributes.
        name: "Great Axe",
        source: "Homebrew",
        rarity: "Common",
        description: "-",
        cost: "25gp",
        magical: false,
        attunement: false,
        // Weapon Attributes.
        type: "Axes",
        category: "Martial",
        slashing: "1d12",
        piercing: "-",
        bludgeoning: "-",
        critRange: "-",
        critDMG: "*3",
        properties: "Heavy, Two-Handed"
    },
    {
        // Item Attributes.
        name: "Sickle",
        source: "Homebrew",
        rarity: "Common",
        description: "-",
        cost: "5sp",
        magical: false,
        attunement: false,
        // Weapon Attributes.
        type: "Blades",
        category: "Simple",
        slashing: "1d4",
        piercing: "-",
        bludgeoning: "-",
        critRange: "19 - 20",
        critDMG: "-",
        properties: "Finesse, Light"
    },
    {
        // Item Attributes.
        name: "Dagger",
        source: "Homebrew",
        rarity: "Common",
        description: "-",
        cost: "1gp",
        magical: false,
        attunement: false,
        // Weapon Attributes.
        type: "Blades",
        category: "Simple",
        slashing: "1d4",
        piercing: "1d4",
        bludgeoning: "-",
        critRange: "19 - 20",
        critDMG: "*3",
        properties: "Finesse, Light, Handy, Thrown (30/60)"
    },
    {
        // Item Attributes.
        name: "Short Sword",
        source: "Homebrew",
        rarity: "Common",
        description: "-",
        cost: "7gp",
        magical: false,
        attunement: false,
        // Weapon Attributes.
        type: "Blades",
        category: "Martial",
        slashing: "1d6",
        piercing: "1d4",
        bludgeoning: "1d4",
        critRange: "-",
        critDMG: "-",
        properties: "Finesse, Light"
    },
    {
        // Item Attributes.
        name: "Scimitar",
        source: "Homebrew",
        rarity: "Common",
        description: "-",
        cost: "12gp",
        magical: false,
        attunement: false,
        // Weapon Attributes.
        type: "Blades",
        category: "Martial",
        slashing: "1d6",
        piercing: "-",
        bludgeoning: "-",
        critRange: "19 - 20",
        critDMG: "-",
        properties: "Finesse, Light"
    },
    {
        // Item Attributes.
        name: "Sword",
        source: "Homebrew",
        rarity: "Common",
        description: "-",
        cost: "12gp",
        magical: false,
        attunement: false,
        // Weapon Attributes.
        type: "Blades",
        category: "Martial",
        slashing: "1d8",
        piercing: "1d4",
        bludgeoning: "1d4",
        critRange: "-",
        critDMG: "-",
        properties: "Versatile (1d10 slashing, 1d6 piercing)"
    },
    {
        // Item Attributes.
        name: "Rapier",
        source: "Homebrew",
        rarity: "Common",
        description: "-",
        cost: "20gp",
        magical: false,
        attunement: false,
        // Weapon Attributes.
        type: "Blades",
        category: "Martial",
        slashing: "1d6",
        piercing: "1d8",
        bludgeoning: "-",
        critRange: "-",
        critDMG: "-",
        properties: "Finesse, Lethal"
    },
    {
        // Item Attributes.
        name: "Falchion",
        source: "Homebrew",
        rarity: "Common",
        description: "-",
        cost: "20gp",
        magical: false,
        attunement: false,
        // Weapon Attributes.
        type: "Blades",
        category: "Martial",
        slashing: "2d4",
        piercing: "-",
        bludgeoning: "-",
        critRange: "18 - 20",
        critDMG: "-"
    },
    {
        // Item Attributes.
        name: "Longsword",
        source: "Homebrew",
        rarity: "Common",
        description: "-",
        cost: "32gp",
        magical: false,
        attunement: false,
        // Weapon Attributes.
        type: "Blades",
        category: "Martial",
        slashing: "1d10",
        piercing: "1d6",
        bludgeoning: "1d4",
        critRange: "-",
        critDMG: "-",
        properties: "Reach, Two-Handed"
    },
    {
        // Item Attributes.
        name: "Claymore",
        source: "Homebrew",
        rarity: "Common",
        description: "-",
        cost: "32gp",
        magical: false,
        attunement: false,
        // Weapon Attributes.
        type: "Blades",
        category: "Martial",
        slashing: "1d10",
        piercing: "1d6",
        bludgeoning: "1d4",
        critRange: "-",
        critDMG: "-",
        properties: "Heavy, Reach, Two-Handed"
    },
    {
        // Item Attributes.
        name: "Double Sword",
        source: "Homebrew",
        rarity: "Common",
        description: "-",
        cost: "40gp",
        magical: false,
        attunement: false,
        // Weapon Attributes.
        type: "Blades",
        category: "Martial",
        slashing: "2d6",
        piercing: "-",
        bludgeoning: "-",
        critRange: "19 - 20",
        critDMG: "-",
        properties: "Finesse, Two-Handed"
    },
    {
        // Item Attributes.
        name: "Great Sword",
        source: "Homebrew",
        rarity: "Common",
        description: "-",
        cost: "40gp",
        magical: false,
        attunement: false,
        // Weapon Attributes.
        type: "Blades",
        category: "Martial",
        slashing: "1d6",
        piercing: "-",
        bludgeoning: "-",
        critRange: "-",
        critDMG: "-",
        properties: "Heavy, Two-Handed, Extra Damage (1d6 bludgeoning), Forceful"
    },
    {
        // Item Attributes.
        name: "Executioner Sword",
        source: "Homebrew",
        rarity: "Common",
        description: "-",
        cost: "40gp",
        magical: false,
        attunement: false,
        // Weapon Attributes.
        type: "Blades",
        category: "Martial",
        slashing: "1d12",
        piercing: "-",
        bludgeoning: "-",
        critRange: "19 - 20",
        critDMG: "-",
        properties: "Heavy, Two-Handed"
    },
    {
        // Item Attributes.
        name: "Club",
        source: "Homebrew",
        rarity: "Common",
        description: "-",
        cost: "5cp",
        magical: false,
        attunement: false,
        // Weapon Attributes.
        type: "Bludgeons",
        category: "Simple",
        slashing: "-",
        piercing: "-",
        bludgeoning: "1d4",
        critRange: "-",
        critDMG: "-",
        properties: "Light, Forceful"
    },
    {
        // Item Attributes.
        name: "Great Club",
        source: "Homebrew",
        rarity: "Common",
        description: "-",
        cost: "1sp",
        magical: false,
        attunement: false,
        // Weapon Attributes.
        type: "Bludgeons",
        category: "Simple",
        slashing: "-",
        piercing: "-",
        bludgeoning: "1d10",
        critRange: "-",
        critDMG: "-",
        properties: "Heavy, Two-handed, Forceful"
    },
    {
        // Item Attributes.
        name: "Quarterstaff",
        source: "Homebrew",
        rarity: "Common",
        description: "-",
        cost: "2sp",
        magical: false,
        attunement: false,
        // Weapon Attributes.
        type: "Bludgeons",
        category: "Martial",
        slashing: "-",
        piercing: "-",
        bludgeoning: "2d4",
        critRange: "-",
        critDMG: "-",
        properties: "Two-Handed, Forceful"
    },
    {
        // Item Attributes.
        name: "Light Hammer",
        source: "Homebrew",
        rarity: "Common",
        description: "-",
        cost: "1gp",
        magical: false,
        attunement: false,
        // Weapon Attributes.
        type: "Bludgeons",
        category: "Simple",
        slashing: "-",
        piercing: "-",
        bludgeoning: "1d4",
        critRange: "-",
        critDMG: "-",
        properties: "Light, Thrown (30/60), Forceful"
    },
    {
        // Item Attributes.
        name: "Mace",
        source: "Homebrew",
        rarity: "Common",
        description: "-",
        cost: "7gp",
        magical: false,
        attunement: false,
        // Weapon Attributes.
        type: "Bludgeons",
        category: "Simple",
        slashing: "-",
        piercing: "-",
        bludgeoning: "1d6",
        critRange: "-",
        critDMG: "-",
        properties: "Heavy, Forceful"
    },
    {
        // Item Attributes.
        name: "Flail",
        source: "Homebrew",
        rarity: "Common",
        description: "-",
        cost: "7gp",
        magical: false,
        attunement: false,
        // Weapon Attributes.
        type: "Bludgeons",
        category: "Martial",
        slashing: "-",
        piercing: "-",
        bludgeoning: "1d6",
        critRange: "-",
        critDMG: "-",
        properties: "Heavy, Reach, Bypass, Ensnaring, Forceful"
    },
    {
        // Item Attributes.
        name: "War Hammer",
        source: "Homebrew",
        rarity: "Common",
        description: "-",
        cost: "12gp",
        magical: false,
        attunement: false,
        // Weapon Attributes.
        type: "Bludgeons",
        category: "Simple",
        slashing: "-",
        piercing: "-",
        bludgeoning: "1d8",
        critRange: "-",
        critDMG: "-",
        properties: "Heavy, Versatile (1d10 bludgeoning), Forceful"
    },
    {
        // Item Attributes.
        name: "Morning Star",
        source: "Homebrew",
        rarity: "Common",
        description: "-",
        cost: "12gp",
        magical: false,
        attunement: false,
        // Weapon Attributes.
        type: "Bludgeons",
        category: "Simple",
        slashing: "-",
        piercing: "-",
        bludgeoning: "1d4",
        critRange: "-",
        critDMG: "-",
        properties: "Heavy, Extra Damage (1d4 piercing), Forceful"
    },
    {
        // Item Attributes.
        name: "Maul",
        source: "Homebrew",
        rarity: "Common",
        description: "-",
        cost: "32gp",
        magical: false,
        attunement: false,
        // Weapon Attributes.
        type: "Bludgeons",
        category: "Martial",
        slashing: "-",
        piercing: "-",
        bludgeoning: "2d6",
        critRange: "-",
        critDMG: "-",
        properties: "Heavy, Two-Handed, Forceful"
    },
    {
        // Item Attributes.
        name: "Great Mace",
        source: "Homebrew",
        rarity: "Common",
        description: "-",
        cost: "32gp",
        magical: false,
        attunement: false,
        // Weapon Attributes.
        type: "Bludgeons",
        category: "Martial",
        slashing: "-",
        piercing: "-",
        bludgeoning: "1d12",
        critRange: "-",
        critDMG: "-",
        properties: "Heavy, Two-Handed, Forceful"
    },
    {
        // Item Attributes.
        name: "Spiked Great Mace",
        source: "Homebrew",
        rarity: "Common",
        description: "-",
        cost: "32gp",
        magical: false,
        attunement: false,
        // Weapon Attributes.
        type: "Bludgeons",
        category: "Martial",
        slashing: "-",
        piercing: "-",
        bludgeoning: "1d8",
        critRange: "-",
        critDMG: "-",
        properties: "Heavy, Extra Damage (1d4 piercing), Two-Handed, Forceful"
    },
    {
        // Item Attributes.
        name: "Javelin",
        source: "Homebrew",
        rarity: "Common",
        description: "-",
        cost: "2sp",
        magical: false,
        attunement: false,
        // Weapon Attributes.
        type: "Polearms",
        category: "Simple",
        slashing: "-",
        piercing: "1d6",
        bludgeoning: "-",
        critRange: "-",
        critDMG: "-",
        properties: "Throw (30/120), Lethal"
    },
    {
        // Item Attributes.
        name: "Spear",
        source: "Homebrew",
        rarity: "Common",
        description: "-",
        cost: "5gp",
        magical: false,
        attunement: false,
        // Weapon Attributes.
        type: "Polearms",
        category: "Simple",
        slashing: "-",
        piercing: "1d6",
        bludgeoning: "-",
        critRange: "-",
        critDMG: "-",
        properties: "Reach, Versatile (1d8 piercing), Throw (30/60), Lethal"
    },
    {
        // Item Attributes.
        name: "Pike",
        source: "Homebrew",
        rarity: "Common",
        description: "-",
        cost: "12gp",
        magical: false,
        attunement: false,
        // Weapon Attributes.
        type: "Polearms",
        category: "Simple",
        slashing: "-",
        piercing: "1d10",
        bludgeoning: "-",
        critRange: "-",
        critDMG: "-",
        properties: "Great Reach, Heavy, Special, Two-handed, Lethal"
    },
    {
        // Item Attributes.
        name: "Lance",
        source: "Homebrew",
        rarity: "Common",
        description: "-",
        cost: "12gp",
        magical: false,
        attunement: false,
        // Weapon Attributes.
        type: "Polearms",
        category: "Martial",
        slashing: "-",
        piercing: "1d12",
        bludgeoning: "-",
        critRange: "-",
        critDMG: "-",
        properties: "Great Reach, Heavy, Special, Lethal"
    },
    {
        // Item Attributes.
        name: "Trident",
        source: "Homebrew",
        rarity: "Common",
        description: "-",
        cost: "20gp",
        magical: false,
        attunement: false,
        // Weapon Attributes.
        type: "Polearms",
        category: "Martial",
        slashing: "-",
        piercing: "1d8",
        bludgeoning: "-",
        critRange: "-",
        critDMG: "-",
        properties: "Reach, Thrown (20/40), Versatile (1d10 piercing), Lethal"
    },
    {
        // Item Attributes.
        name: "Naginata",
        source: "Homebrew",
        rarity: "Common",
        description: "-",
        cost: "32gp",
        magical: false,
        attunement: false,
        // Weapon Attributes.
        type: "Polearms",
        category: "Martial",
        slashing: "1d10",
        piercing: "-",
        bludgeoning: "-",
        critRange: "19 - 20",
        critDMG: "-",
        properties: "Reach, Two-handed"
    },
    {
        // Item Attributes.
        name: "Glaive",
        source: "Homebrew",
        rarity: "Common",
        description: "-",
        cost: "32gp",
        magical: false,
        attunement: false,
        // Weapon Attributes.
        type: "Polearms",
        category: "Martial",
        slashing: "1d12",
        piercing: "-",
        bludgeoning: "-",
        critRange: "-",
        critDMG: "-",
        properties: "Heavy, Reach, Two-handed"
    },
    {
        // Item Attributes.
        name: "Halberd",
        source: "Homebrew",
        rarity: "Common",
        description: "-",
        cost: "32gp",
        magical: false,
        attunement: false,
        // Weapon Attributes.
        type: "Polearms",
        category: "Martial",
        slashing: "1d10",
        piercing: "1d8",
        bludgeoning: "-",
        critRange: "-",
        critDMG: "-",
        properties: "Heavy, Reach, Two-handed"
    },
    {
        // Item Attributes.
        name: "Dart",
        source: "Homebrew",
        rarity: "Common",
        description: "-",
        cost: "1cp",
        magical: false,
        attunement: false,
        // Weapon Attributes.
        type: "Others",
        category: "Simple",
        slashing: "-",
        piercing: "1d4",
        bludgeoning: "-",
        critRange: "-",
        critDMG: "-",
        properties: "Finesse, Thrown (30/60)"
    },
    {
        // Item Attributes.
        name: "Net",
        source: "Homebrew",
        rarity: "Common",
        description: "-",
        cost: "5sp",
        magical: false,
        attunement: false,
        // Weapon Attributes.
        type: "Others",
        category: "Martial",
        slashing: "-",
        piercing: "-",
        bludgeoning: "-",
        critRange: "-",
        critDMG: "-",
        properties: "Special, Thrown (15/30)"
    },
    {
        // Item Attributes.
        name: "Metal Net",
        source: "Homebrew",
        rarity: "Common",
        description: "-",
        cost: "7gp",
        magical: false,
        attunement: false,
        // Weapon Attributes.
        type: "Others",
        category: "Martial",
        slashing: "-",
        piercing: "-",
        bludgeoning: "-",
        critRange: "-",
        critDMG: "-",
        properties: "Special, Thrown (5/15)"
    },
    {
        // Item Attributes.
        name: "Gauntlet/Knuckles",
        source: "Homebrew",
        rarity: "Common",
        description: "-",
        cost: "5gp",
        magical: false,
        attunement: false,
        // Weapon Attributes.
        type: "Fists",
        category: "Simple",
        slashing: "-",
        piercing: "-",
        bludgeoning: "1d4",
        critRange: "-",
        critDMG: "-",
        properties: "Unarmed"
    },
    {
        // Item Attributes.
        name: "Spiked Gauntlet/Knuckles",
        source: "Homebrew",
        rarity: "Common",
        description: "-",
        cost: "9gp",
        magical: false,
        attunement: false,
        // Weapon Attributes.
        type: "Others",
        category: "Simple",
        slashing: "-",
        piercing: "1d4",
        bludgeoning: "1d4",
        critRange: "-",
        critDMG: "-",
        properties: "Unarmed"
    },
    {
        // Item Attributes.
        name: "Whip",
        source: "Homebrew",
        rarity: "Common",
        description: "-",
        cost: "1gp",
        magical: false,
        attunement: false,
        // Weapon Attributes.
        type: "Others",
        category: "Martial",
        slashing: "1d6",
        piercing: "-",
        bludgeoning: "-",
        critRange: "-",
        critDMG: "-",
        properties: "Reach, Finesse, Bypass, Ensnaring"
    },
    {
        // Item Attributes.
        name: "Warpick",
        source: "Homebrew",
        rarity: "Common",
        description: "-",
        cost: "20gp",
        magical: false,
        attunement: false,
        // Weapon Attributes.
        type: "Others",
        category: "Martial",
        slashing: "-",
        piercing: "1d12",
        bludgeoning: "1d6",
        critRange: "-",
        critDMG: "-",
        properties: "Heavy, Two-handed, Lethal"
    },
];

export default meleeWeapons;