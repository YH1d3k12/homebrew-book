const meleeWeapons = [
    {
        // Item Attributes.
        name: "Hand Axe",
        image: "Axe",
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
        image: "Axe",
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
        image: "Axe",
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
        image: "Double Axe",
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
        image: "Sickle",
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
        image: "Dagger",
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
        image: "Sword",
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
        image: "Dagger",
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
        image: "Sword",
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
        image: "Rapier",
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
        image: "Rapier",
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
        image: "Sword",
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
        image: "Sword",
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
        image: "Dagger",
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
        image: "Heavy Blade",
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
        image: "Heavy Blade",
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
        image: "Wood Club",
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
        image: "Wood Club",
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
        image: "Bo",
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
        image: "Warhammer",
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
        image: "Mace",
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
        image: "Flail",
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
        image: "Warhammer",
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
        image: "Mace",
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
        image: "Warhammer",
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
        image: "Warhammer",
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
        image: "Warhammer",
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
        image: "Spear",
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
        image: "Spear",
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
        image: "Spear",
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
        image: "Spear",
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
        image: "Trident",
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
        image: "Glaive",
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
        image: "Glaive",
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
        image: "Glaive",
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
        image: "Dart",
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
        image: "Net",
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
        image: "Net",
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
        image: "Fist Weapon",
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
        image: "Fist Weapon",
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
        image: "Whip",
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
        image: "Warhammer",
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
    {
        // Item Attributes.
        name: "Sling",
        image: "Sling",
        source: "Homebrew",
        rarity: "Common",
        description: "-",
        cost: "5cp",
        magical: false,
        attunement: false,
        // Weapon Attributes.
        type: "Others",
        category: "Simple",
        slashing: "-",
        piercing: "-",
        bludgeoning: "1d4",
        critRange: "-",
        critDMG: "-",
        properties: "ammunition, range(30/120)"
    },
    {
        // Item Attributes.
        name: "Blowgun",
        image: "Blowgun",
        source: "Homebrew",
        rarity: "Common",
        description: "-",
        cost: "5sp",
        magical: false,
        attunement: false,
        // Weapon Attributes.
        type: "Others",
        category: "Simple",
        slashing: "-",
        piercing: "1d1",
        bludgeoning: "-",
        critRange: "-",
        critDMG: "-",
        properties: "ammunition, range(25/100)"
    },
    {
        // Item Attributes.
        name: "Hand Crossbow",
        image: "Crossbow",
        source: "Homebrew",
        rarity: "Common",
        description: "-",
        cost: "12gp",
        magical: false,
        attunement: false,
        // Weapon Attributes.
        type: "Crossbows",
        category: "Simple",
        slashing: "-",
        piercing: "1d6",
        bludgeoning: "-",
        critRange: "-",
        critDMG: "-",
        properties: "ammunition, range(30/60), Light, Loading"
    },
    {
        // Item Attributes.
        name: "Light Crossbow",
        image: "Crossbow",
        source: "Homebrew",
        rarity: "Common",
        description: "-",
        cost: "20gp",
        magical: false,
        attunement: false,
        // Weapon Attributes.
        type: "Crossbows",
        category: "Simple",
        slashing: "-",
        piercing: "1d8",
        bludgeoning: "-",
        critRange: "-",
        critDMG: "-",
        properties: "ammunition, range(60/240), Loading, Two-Handed"
    },
    {
        // Item Attributes.
        name: "Heavy Crossbow",
        image: "Crossbow",
        source: "Homebrew",
        rarity: "Common",
        description: "-",
        cost: "37gp",
        magical: false,
        attunement: false,
        // Weapon Attributes.
        type: "Crossbows",
        category: "Simple",
        slashing: "-",
        piercing: "1d10",
        bludgeoning: "-",
        critRange: "-",
        critDMG: "-",
        properties: "ammunition, range(80/320), Loading, Two-Handed, Strength (10)"
    },
    {
        // Item Attributes.
        name: "Auto Crossbow",
        image: "Crossbow",
        source: "Homebrew",
        rarity: "Uncommon",
        description: "-",
        cost: "65gp",
        magical: false,
        attunement: false,
        // Weapon Attributes.
        type: "Crossbows",
        category: "Simple",
        slashing: "-",
        piercing: "1d8",
        bludgeoning: "-",
        critRange: "-",
        critDMG: "-",
        properties: "ammunition, range(60/240), Loading (6), Two-Handed"
    },
    {
        // Item Attributes.
        name: "Double Crossbow",
        image: "Crossbow",
        source: "Homebrew",
        rarity: "Uncommon",
        description: "-",
        cost: "110gp",
        magical: false,
        attunement: false,
        // Weapon Attributes.
        type: "Crossbows",
        category: "Simple",
        slashing: "-",
        piercing: "2d8",
        bludgeoning: "-",
        critRange: "-",
        critDMG: "-",
        properties: "ammunition, range(60/240), Loading, Two-Handed, Strength (10)"
    },
    {
        // Item Attributes.
        name: "Short Bow",
        image: "Bow",
        source: "Homebrew",
        rarity: "Common",
        description: "-",
        cost: "7gp",
        magical: false,
        attunement: false,
        // Weapon Attributes.
        type: "Bows",
        category: "Martial",
        slashing: "-",
        piercing: "1d8",
        bludgeoning: "-",
        critRange: "-",
        critDMG: "-",
        properties: "ammunition, range(80/320), Two-Handed"
    },
    {
        // Item Attributes.
        name: "Long Bow",
        image: "Bow",
        source: "Homebrew",
        rarity: "Common",
        description: "-",
        cost: "15gp",
        magical: false,
        attunement: false,
        // Weapon Attributes.
        type: "Bows",
        category: "Martial",
        slashing: "-",
        piercing: "1d10",
        bludgeoning: "-",
        critRange: "-",
        critDMG: "-",
        properties: "ammunition, range(150/600), Two-Handed, Strength (10)"
    },
    {
        // Item Attributes.
        name: "War Bow",
        image: "Bow",
        source: "Homebrew",
        rarity: "Common",
        description: "-",
        cost: "25gp",
        magical: false,
        attunement: false,
        // Weapon Attributes.
        type: "Bows",
        category: "Martial",
        slashing: "-",
        piercing: "1d12",
        bludgeoning: "-",
        critRange: "-",
        critDMG: "-",
        properties: "ammunition, range(250/1000), Two-Handed, Strength (12)"
    },
    {
        // Item Attributes.
        name: "Pistol",
        image: "Pistol",
        source: "Homebrew",
        rarity: "Common",
        description: "-",
        cost: "40gp",
        magical: false,
        attunement: false,
        // Weapon Attributes.
        type: "Pistols",
        category: "Simple",
        slashing: "-",
        piercing: "1d6",
        bludgeoning: "-",
        critRange: "-",
        critDMG: "-",
        properties: "ammunition, range(60/180), Light, Reload 6, Misfire 1"
    },
    {
        // Item Attributes.
        name: "High Caliber Revolver",
        image: "Revolver",
        source: "Homebrew",
        rarity: "Uncommon",
        description: "-",
        cost: "85gp",
        magical: false,
        attunement: false,
        // Weapon Attributes.
        type: "Pistols",
        category: "Simple",
        slashing: "-",
        piercing: "1d8",
        bludgeoning: "-",
        critRange: "-",
        critDMG: "-",
        properties: "ammunition, range(80/240), Light, Reload 6, Misfire 1"
    },
    {
        // Item Attributes.
        name: "Automatic Pistol",
        image: "Pistol",
        source: "Homebrew",
        rarity: "Uncommon",
        description: "-",
        cost: "105gp",
        magical: false,
        attunement: false,
        // Weapon Attributes.
        type: "Pistols",
        category: "Simple",
        slashing: "-",
        piercing: "2d4",
        bludgeoning: "-",
        critRange: "-",
        critDMG: "-",
        properties: "ammunition, range(40/120), Light, Reload 3, Misfire 1"
    },
    {
        // Item Attributes.
        name: "Double Barrel",
        image: "Shotgun",
        source: "Homebrew",
        rarity: "Common",
        description: "-",
        cost: "60gp",
        magical: false,
        attunement: false,
        // Weapon Attributes.
        type: "Shotguns",
        category: "Simple",
        slashing: "-",
        piercing: "2d8",
        bludgeoning: "-",
        critRange: "-",
        critDMG: "-",
        properties: "ammunition, range(20/40), Two-Handed, Spread, Reload 1, Misfire 1"
    },
    {
        // Item Attributes.
        name: "Pump Action Shotgun",
        image: "Shotgun",
        source: "Homebrew",
        rarity: "Uncommon",
        description: "-",
        cost: "75gp",
        magical: false,
        attunement: false,
        // Weapon Attributes.
        type: "Shotguns",
        category: "Simple",
        slashing: "-",
        piercing: "1d10",
        bludgeoning: "-",
        critRange: "-",
        critDMG: "-",
        properties: "ammunition, range(20/40), Two-Handed, Spread, Reload 4, Misfire 1"
    },
    {
        // Item Attributes.
        name: "Automatic Shotgun",
        image: "Shotgun",
        source: "Homebrew",
        rarity: "Uncommon",
        description: "-",
        cost: "150gp",
        magical: false,
        attunement: false,
        // Weapon Attributes.
        type: "Shotguns",
        category: "Simple",
        slashing: "-",
        piercing: "2d6",
        bludgeoning: "-",
        critRange: "-",
        critDMG: "-",
        properties: "ammunition, range(20/40), Two-Handed, Spread, Reload 4, Misfire 1"
    },
    {
        // Item Attributes.
        name: "Automatic Shotgun",
        image: "Shotgun",
        source: "Homebrew",
        rarity: "Uncommon",
        description: "-",
        cost: "150gp",
        magical: false,
        attunement: false,
        // Weapon Attributes.
        type: "Shotguns",
        category: "Simple",
        slashing: "-",
        piercing: "2d6",
        bludgeoning: "-",
        critRange: "-",
        critDMG: "-",
        properties: "ammunition, range(20/40), Two-Handed, Spread, Reload 4, Misfire 1"
    },
    {
        // Item Attributes.
        name: "Mp5",
        image: "SMG",
        source: "Homebrew",
        rarity: "Uncommon",
        description: "-",
        cost: "100gp",
        magical: false,
        attunement: false,
        // Weapon Attributes.
        type: "SMGs",
        category: "Simple",
        slashing: "-",
        piercing: "1d6",
        bludgeoning: "-",
        critRange: "-",
        critDMG: "-",
        properties: "ammunition, range(60/120), Two-Handed, Rapid Fire, Reload 4, Misfire 1"
    },
    {
        // Item Attributes.
        name: "P90",
        image: "SMG",
        source: "Homebrew",
        rarity: "Uncommon",
        description: "-",
        cost: "100gp",
        magical: false,
        attunement: false,
        // Weapon Attributes.
        type: "SMGs",
        category: "Simple",
        slashing: "-",
        piercing: "2d4",
        bludgeoning: "-",
        critRange: "-",
        critDMG: "-",
        properties: "ammunition, range(40/80), Two-Handed, Rapid Fire, Reload 4, Misfire 1"
    },
    {
        // Item Attributes.
        name: "Assault Rifle",
        image: "Assault Rifle",
        source: "Homebrew",
        rarity: "Uncommon",
        description: "-",
        cost: "150gp",
        magical: false,
        attunement: false,
        // Weapon Attributes.
        type: "Assault Rifles",
        category: "Simple",
        slashing: "-",
        piercing: "3d4",
        bludgeoning: "-",
        critRange: "-",
        critDMG: "-",
        properties: "ammunition, range(120/360), Two-Handed, Reload 4, Misfire 1"
    },
    {
        // Item Attributes.
        name: "Semi Auto Rifle",
        image: "Assault Rifle",
        source: "Homebrew",
        rarity: "Uncommon",
        description: "-",
        cost: "150gp",
        magical: false,
        attunement: false,
        // Weapon Attributes.
        type: "Assault Rifles",
        category: "Simple",
        slashing: "-",
        piercing: "1d10",
        bludgeoning: "-",
        critRange: "-",
        critDMG: "-",
        properties: "ammunition, range(150/450), Two-Handed, Reload 4, Misfire 1"
    },
    {
        // Item Attributes.
        name: "Heavy Machine Gun",
        image: "Assault Rifle",
        source: "Homebrew",
        rarity: "Rare",
        description: "-",
        cost: "400gp",
        magical: false,
        attunement: false,
        // Weapon Attributes.
        type: "Assault Rifles",
        category: "Simple",
        slashing: "-",
        piercing: "5d6",
        bludgeoning: "-",
        critRange: "-",
        critDMG: "-",
        properties: "ammunition, range(150/600), Two-Handed, Braced, Reload 10, Misfire 1"
    },
    {
        // Item Attributes.
        name: "Action Bolt Rifle",
        image: "Rifle",
        source: "Homebrew",
        rarity: "Uncommon",
        description: "-",
        cost: "100gp",
        magical: false,
        attunement: false,
        // Weapon Attributes.
        type: "Rifles",
        category: "Martial",
        slashing: "-",
        piercing: "1d10",
        bludgeoning: "-",
        critRange: "-",
        critDMG: "-",
        properties: "ammunition, range(200/800), Two-Handed, Reload 4, Misfire 1"
    },
    {
        // Item Attributes.
        name: "Sniper Rifle",
        image: "Rifle",
        source: "Homebrew",
        rarity: "Rare",
        description: "-",
        cost: "300gp",
        magical: false,
        attunement: false,
        // Weapon Attributes.
        type: "Rifles",
        category: "Martial",
        slashing: "-",
        piercing: "1d12",
        bludgeoning: "-",
        critRange: "-",
        critDMG: "-",
        properties: "ammunition, range(250/2000), Two-Handed, Reload 4, Misfire 1"
    },
    {
        // Item Attributes.
        name: "Anti Tank Rifle",
        image: "Rifle",
        source: "Homebrew",
        rarity: "Rare",
        description: "-",
        cost: "750gp",
        magical: false,
        attunement: false,
        // Weapon Attributes.
        type: "Rifles",
        category: "Martial",
        slashing: "-",
        piercing: "3d12",
        bludgeoning: "-",
        critRange: "-",
        critDMG: "-",
        properties: "ammunition, range(400/8000), Two-Handed, Braced, Reload 3, Misfire 1, Siege Weapon"
    },
];

export default meleeWeapons;