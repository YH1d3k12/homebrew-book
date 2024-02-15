/* 
Type 0: Minor Feat.
Type 1: Feat.

Categories: Crafting, Defensive, Flavor, Offensive, Utility, Movement.
*/

const featsData = [
    {
        id: 1,
        name: "Acolyte",
        source: "Homebrew",
        requirement: "-",
        repeatable: "No",
        description: "Gain proficiency in religion, expertise if you already have it.\n You learn one cleric or warlock cantrip. Your spellcasting ability is WIS or CHA for cleric or INT or CHA for warlock.\n You can change the cantrip with another cantrip from the same spell list after a long rest.",
        category: "Utility",
        type: 0
    },
    {
        id: 2,
        name: "Arcanist",
        source: "Homebrew",
        requirement: "-",
        repeatable: "No",
        description: "Gain proficiency in arcana, expertise if you already have it.\n You learn one wizard cantrip, INT is your spellcasting ability for it.\n You learn Detect Magic and can cast it without spending SP once per long rest.",
        category: "Utility",
        type: 0
    },
    {
        id: 3,
        name: "As a Leaf",
        source: "Homebrew",
        requirement: "Dexterity 13 or higher",
        repeatable: "No",
        description: "Attack rolls equal to your armor class miss, and you are not affected by forceful weapon property.\n Once per long rest you can half the damage of an attack roll (not spells) against you (no reaction required).",
        category: "Defensive",
        type: 0
    },
    {
        id: 4,
        name: "Angler",
        source: "Homebrew",
        requirement: "-",
        repeatable: "No",
        description: "Gain proficiency with fishing tools, expertise if you already have it.\n You can craft improvised fishing equipment (provided you have the resources to do so).\n You can find enough food for 10 medium creatures from water bodies with a successful DC 10 fishing (survival) check.\n Fish and SeaFood sell for 25% more.",
        category: "Flavor",
        type: 0
    },
    {
        id: 5,
        name: "Alchemist",
        source: "Homebrew",
        requirement: "-",
        repeatable: "No",
        description: "Gain proficiency with alchemist's tools, expertise if you already have it.\n Crafting bombs and chemicals costs -25% less and takes half of the time.\n Learn 3 common or uncommon bombs or chemical recipes.",
        category: "Crafting",
        type: 0
    },
    {
        id: 6,
        name: "Born Ready",
        source: "Homebrew",
        requirement: "-",
        repeatable: "No",
        description: "You have +5 to initiative checks.",
        category: "Utility",
        type: 0
    },
    {
        id: 7,
        name: "Blunt Force",
        source: "Homebrew",
        requirement: "-",
        repeatable: "No",
        description: "Once per turn, when you hit a creature with an attack that deals bludgeoning damage, you can move it 5 feet to an unoccupied space, provided the target is no more than one size larger than you.",
        category: "Offensive",
        type: 0
    },
    {
        id: 8,
        name: "Buckler Master",
        source: "Homebrew",
        requirement: "-",
        repeatable: "No",
        description: "Wielding a buckle shield does not impose a penalty on attack rolls when using two-handed or dual-wielding weapons.",
        category: "Offensive",
        type: 0
    },
    {
        id: 9,
        name: "Brave",
        source: "Homebrew",
        requirement: "Wisdom or Charisma 15 or higher",
        repeatable: "No",
        description: "You can't be frightened.",
        category: "Defensive",
        type: 0
    },
    {
        id: 10,
        name: "Cardio Training",
        source: "Homebrew",
        requirement: "-",
        repeatable: "No",
        description: "When you take the Dash action or a similar action, such as Aggressive Sprint, you gain an additional 10 feet of movement until the end of the current turn.",
        category: "Movement",
        type: 0
    },
    {
        id: 11,
        name: "Cat Eyes",
        source: "Homebrew",
        requirement: "-",
        repeatable: "No",
        description: "You gain or increase your Darkvision range by 30ft. You can only see shades of gray.",
        category: "Utility",
        type: 0
    },
    {
        id: 12,
        name: "Crawler",
        source: "Homebrew",
        requirement: "-",
        repeatable: "No",
        description: "Being prone does not grant advantage on melee attack rolls against you, nor do you suffer disadvantage on your own melee attack rolls.",
        category: "Utility",
        type: 0
    },
    {
        id: 13,
        name: "Critter Friendly",
        source: "Homebrew",
        requirement: "Wisdom 13 or higher",
        repeatable: "No",
        description: "You have the ability to talk and understand animals.\n Critters (small animals) with an intelligence of 4 or less are friendly towards you.",
        category: "Utility",
        type: 0
    },
    {
        id: 14,
        name: "Climber",
        source: "Homebrew",
        requirement: "-",
        repeatable: "No",
        description: "You have climbing speed equal to your walking speed.\n You also have advantage on climbing related ability checks.",
        category: "Movement",
        type: 0
    },
    {
        id: 15,
        name: "Druidic",
        source: "Homebrew",
        requirement: "-",
        repeatable: "No",
        description: "Gain proficiency in nature, expertise if you already have it.\n You learn one druid cantrip, WIS is your spellcasting ability for it.\n You can speak, read and write in druidic.",
        category: "Utility",
        type: 0
    },
    {
        id: 16,
        name: "Eagle Eye",
        source: "Homebrew",
        requirement: "-",
        repeatable: "No",
        description: "You can discern details with exceptional clarity within 30ft of you, including small handwritten letters across the room.\n You also have advantage on perception checks related to sight",
        category: "Utility",
        type: 0
    },
    {
        id: 17,
        name: "Outdoorsman",
        source: "Homebrew",
        requirement: "-",
        repeatable: "No",
        description: "Moving through overgrown plants, mud, rocky, and similar difficult terrains does not incur extra movement cost.\n In forest areas, you can successfully gather enough food for up to 10 medium creatures with a DC 10 Survival check.",
        category: "Utility",
        type: 0
    },
    {
        id: 18,
        name: "Outdoorsman",
        source: "Homebrew",
        requirement: "-",
        repeatable: "No",
        description: "Moving through overgrown plants, mud, wetlands, and similar difficult terrains does not incur extra movement cost.\n In forest areas, you can successfully gather enough food for up to 10 medium creatures with a DC 10 Survival check.",
        category: "Utility",
        type: 0
    },
    {
        id: 19,
        name: "Fast Healer",
        source: "Homebrew",
        requirement: "-",
        repeatable: "No",
        description: "Whenever you spend a hit die for healing, whether through a class feature or other means, you can choose to maximize the roll. You can do this a number of times equal to your proficiency bonus before completing a long rest.",
        category: "Defensive",
        type: 0
    },
    {
        id: 20,
        name: "Fast Learner",
        source: "Homebrew",
        requirement: "-",
        repeatable: "No",
        description: "Gain a 20% increase in earned experience points. Note: This feat is unavailable for use in milestone campaigns.",
        category: "Utility",
        type: 0
    },
    {
        id: 21,
        name: "Fletcher",
        source: "Homebrew",
        requirement: "-",
        repeatable: "No",
        description: "Gain proficiency with wood carver’s tools, expertise if you already have it.\n Crafting custom arrows costs -25% less and takes half of the time.\n Learn 3 common or uncommon custom arrow recipes.",
        category: "Crafting",
        type: 0
    },
    {
        id: 22,
        name: "Haggle",
        source: "Homebrew",
        requirement: "Charisma (13/14/15) or higher",
        repeatable: "Yes, up to 3 times",
        description: "Buying and selling prices are (10%/20%/30%) better.",
        category: "Flavor",
        type: 0
    },
    {
        id: 23,
        name: "Herbalist",
        source: "Homebrew",
        requirement: "-",
        repeatable: "No",
        description: "Gain proficiency with herbalism kit, expertise if you already have it.\n Crafting potions costs -25% less and takes half of the time.\n Learn 3 common or uncommon potion recipes.",
        category: "Crafting",
        type: 0
    },
    {
        id: 24,
        name: "Healthy",
        source: "Homebrew",
        requirement: "Constitution 13 or higher",
        repeatable: "No",
        description: "You have advantage on saving throws against disease and poison.\n When a disease requires a saving throw that would normally cause damage, you take no damage on a successful save and only half damage on a failure.",
        category: "Defensive",
        type: 0
    },
    {
        id: 25,
        name: "Nimble",
        source: "Homebrew",
        requirement: "Dexterity 13 or higher",
        repeatable: "No",
        description: "Gain proficiency with acrobatics, expertise if you already have it.\n You can move through the space of hostile creatures, treating it as difficult terrain.",
        category: "Movement",
        type: 0
    },
    {
        id: 26,
        name: "Inconspicuous",
        source: "Homebrew",
        requirement: "-",
        repeatable: "No",
        description: "Your passive Stealth and Performance scores (while being disguised) are 8 + the respective ability score modifier, rather than 5 + the modifier.",
        category: "Utility",
        type: 0
    },
    {
        id: 27,
        name: "Miner",
        source: "Homebrew",
        requirement: "-",
        repeatable: "No",
        description: "With the appropriate tools, you can excavate a 5ft cube of dirt or stone in 5 minutes.\n You have advantage on Wisdom (Survival) checks to navigate and avoid getting lost in subterranean environments.\n You have an innate understanding of geological formations. Gain proficiency in Intelligence (Nature) checks related to identifying minerals and predicting the stability of underground structures.\n Raw ores and gems sell for 15% more.",
        category: "Flavor",
        type: 0
    },
    {
        id: 28,
        name: "Minor Luck",
        source: "Homebrew",
        requirement: "-",
        repeatable: "No",
        description: "You have three d4 dice that you can use to add or subtract from an attack roll, saving throw, or ability check made by you or another creature.\n You can use only one d4 per roll, and you regain all expended dice after completing a long rest.",
        category: "Utility",
        type: 0
    },
    {
        id: 29,
        name: "Jeweler",
        source: "Homebrew",
        requirement: "-",
        repeatable: "No",
        description: "Gain proficiency with jeweler's tools, expertise if you already have it.\n Spending 1 hour polishing a gemstone increases its selling price by 40%.",
        category: "Crafting",
        type: 0
    },
    {
        id: 30,
        name: "Street Smarts",
        source: "Homebrew",
        requirement: "-",
        repeatable: "No",
        description: "Gain proficiency in Stealth, Sleight of Hand, or Deception.\n You can write, read, and speak in Thieves' Cant.",
        category: "Utility",
        type: 0
    },
    {
        id: 31,
        name: "Longstrider",
        source: "Homebrew",
        requirement: "-",
        repeatable: "No",
        description: "Your walking speed increases by 5ft.\n Your party's travel speed increases by 10%.",
        category: "Movement",
        type: 0
    },
    {
        id: 32,
        name: "Pike Square",
        source: "Homebrew",
        requirement: "-",
        repeatable: "No",
        description: "You can make attacks of opportunity against creatures that enter your melee reach if you are wielding a polearm or a weapon with the reach or greater reach property.",
        category: "Offensive",
        type: 0
    },
    {
        id: 33,
        name: "Overwhelm",
        source: "Homebrew",
        requirement: "-",
        repeatable: "No",
        description: "Attacks with heavy weapons ignore the additional AC provided by non-magical shields. The shield's magical bonus to AC is only ignored if your weapon is also magical.",
        category: "Offensive",
        type: 0
    },
    {
        id: 34,
        name: "Quick Draw",
        source: "Homebrew",
        requirement: "Dexterity 13 or higher",
        repeatable: "No",
        description: "During the initiative roll, if you are not surprised, you can use your reaction to make a single attack roll with a firearm against a creature you can see. If the attack hits, the target's initiative is reduced by your proficiency bonus.\n You also have +1 to initiative checks.",
        category: "Offensive",
        type: 0
    },
    {
        id: 35,
        name: "Swimmer",
        source: "Homebrew",
        requirement: "-",
        repeatable: "No",
        description: "You gain a swimming speed equal to your walking speed and have advantage on swimming-related ability checks.\n You can hold your breath for twice as long as normal.",
        category: "Movement",
        type: 0
    },
    {
        id: 36,
        name: "Thick Skinned",
        source: "Homebrew",
        requirement: "-",
        repeatable: "No",
        description: "You gain a +1 bonus to your Armor Class while not wearing any armor.",
        category: "Defensive",
        type: 0
    }
]