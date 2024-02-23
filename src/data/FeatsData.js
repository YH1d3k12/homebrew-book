/* 
Type 0: Minor Feat.
Type 1: Feat.

Categories:
    Active, Passive, Conditional.


    Class Enhancement: needs a class.
    Crafting: anything related to the creation of items.
    Defensive: provides something useful to the survivality of one's character
    Healing: provides some form of healing.
    Offensive: provides damaging capabilities.
    Utility: provides something useful to do.
    Movement: ability of locomotion.
    Skill: proficiency.
    Spellcasting: some form of sorcery.
*/

const featsData = [
    {
        id: 1,
        name: "Acolyte",
        source: "Homebrew",
        requirement: "-",
        repeatable: "No",
        description: "Gain proficiency in religion, expertise if you already have it.\n You learn one cleric or warlock cantrip. Your spellcasting ability is WIS or CHA for cleric or INT or CHA for warlock.\n You can change the cantrip with another cantrip from the same spell list after a long rest.",
        category: "Passive, Skill, Spellcasting",
        type: 0
    },
    {
        id: 2,
        name: "Arcanist",
        source: "Homebrew",
        requirement: "-",
        repeatable: "No",
        description: "Gain proficiency in arcana, expertise if you already have it.\n You learn one wizard cantrip, INT is your spellcasting ability for it.\n You learn Detect Magic and can cast it without spending SP once per long rest.",
        category: "Active, Passive, Skill, Spellcasting",
        type: 0
    },
    {
        id: 3,
        name: "As a Leaf",
        source: "Homebrew",
        requirement: "Dexterity 13 or higher",
        repeatable: "No",
        description: "Attack rolls equal to your armor class miss, and you are not affected by forceful weapon property while wearing light armor or none.",
        category: "Passive, Defensive",
        type: 0
    },
    {
        id: 4,
        name: "Angler",
        source: "Homebrew",
        requirement: "-",
        repeatable: "No",
        description: "Gain proficiency with fishing tools, expertise if you already have it.\n You can craft improvised fishing equipment (provided you have the resources to do so).\n You can find enough food for 10 medium creatures from water bodies with a successful DC 10 fishing (survival) check.\n Fish and SeaFood sell for 25% more.",
        category: "Passive, Crafting, Skill, Utility",
        type: 0
    },
    {
        id: 5,
        name: "Alchemist",
        source: "Homebrew",
        requirement: "-",
        repeatable: "No",
        description: "Gain proficiency with alchemist's tools, expertise if you already have it.\n Crafting bombs and chemicals costs -25% less and takes half of the time.\n Learn 3 common or uncommon bombs or chemical recipes.",
        category: "Passive, Crafting, Skill",
        type: 0
    },
    {
        id: 6,
        name: "Born Ready",
        source: "Homebrew",
        requirement: "-",
        repeatable: "No",
        description: "You have a bonus to initiative checks equal to your proficiency bonus.",
        category: "Passive, Utility",
        type: 0
    },
    {
        id: 7,
        name: "Blunt Force",
        source: "Homebrew",
        requirement: "-",
        repeatable: "No",
        description: "Once per turn, when you hit a creature with an attack that deals bludgeoning damage, you can move it 5 feet to an unoccupied space, provided the target is no more than one size larger than you.",
        category: "Passive, Offensive",
        type: 0
    },
    {
        id: 8,
        name: "Buckler Master",
        source: "Homebrew",
        requirement: "-",
        repeatable: "No",
        description: "Wielding a buckle shield does not impose a penalty on attack rolls when using two-handed or dual-wielding weapons.",
        category: "Passive, Offensive",
        type: 0
    },
    {
        id: 9,
        name: "Brave",
        source: "Homebrew",
        requirement: "Wisdom or Charisma 15 or higher",
        repeatable: "No",
        description: "You can't be frightened.",
        category: "Passive, Defensive",
        type: 0
    },
    {
        id: 10,
        name: "Cardio Training",
        source: "Homebrew",
        requirement: "-",
        repeatable: "No",
        description: "When you take the Dash action or a similar action, such as Aggressive Sprint, you gain an additional 10 feet of movement until the end of the current turn.",
        category: "Passive, Movement",
        type: 0
    },
    {
        id: 11,
        name: "Cat Eyes",
        source: "Homebrew",
        requirement: "-",
        repeatable: "No",
        description: "You gain or increase your Darkvision range by 30ft. You can only see shades of gray.",
        category: "Passive, Utility",
        type: 0
    },
    {
        id: 12,
        name: "Crawler",
        source: "Homebrew",
        requirement: "-",
        repeatable: "No",
        description: "Being prone does not grant advantage on melee attack rolls against you, nor do you suffer disadvantage on your own melee attack rolls.",
        category: "Passive, Defensive, Offensive",
        type: 0
    },
    {
        id: 13,
        name: "Critter Friendly",
        source: "Homebrew",
        requirement: "Wisdom 13 or higher",
        repeatable: "No",
        description: "You have the ability to speak with animals.\n Critters (small animals) with an intelligence of 4 or less are friendly towards you.",
        category: "Passive, Utility",
        type: 0
    },
    {
        id: 14,
        name: "Climber",
        source: "Homebrew",
        requirement: "-",
        repeatable: "No",
        description: "You have climbing speed equal to your walking speed.\n You also have advantage on climbing related ability checks.",
        category: "Passive, Movement, Skill",
        type: 0
    },
    {
        id: 15,
        name: "Druidic",
        source: "Homebrew",
        requirement: "-",
        repeatable: "No",
        description: "Gain proficiency in nature, expertise if you already have it.\n You learn one druid cantrip, WIS is your spellcasting ability for it.\n You can speak, read and write in druidic.",
        category: "Passive, Skill, Spellcasting, Utility",
        type: 0
    },
    {
        id: 16,
        name: "Keen Sight",
        source: "Homebrew",
        requirement: "-",
        repeatable: "No",
        description: "You can discern details with exceptional clarity within 30ft of you, including small handwritten letters across the room.\n You also have advantage on perception checks related to sight",
        category: "Passive, Skill, Utility",
        type: 0
    },
    {
        id: 17,
        name: "Outdoorsman",
        source: "Homebrew",
        requirement: "-",
        repeatable: "No",
        description: "Moving through overgrown plants, mud, rocky, and similar difficult terrains does not incur extra movement cost.\n In forest areas, you can successfully gather enough food for up to 10 medium creatures with a DC 10 Survival check.",
        category: "Passive, Movement, Utility",
        type: 0
    },
    {
        id: 18,
        name: "Diehard",
        source: "Homebrew",
        requirement: "-",
        repeatable: "yes, up to two times",
        description: "Increase your Constitution score by 1.\n You gain a +2/5 bonus to death saving throws.\n As long as you have not failed any death saving throws, you do not suffer the negative conditions of being at 0 hit points and may continue to take actions and move normally.",
        category: "Passive, Defensive",
        type: 1
    },
    {
        id: 19,
        name: "Fast Healing",
        source: "Homebrew",
        requirement: "-",
        repeatable: "No",
        description: "When you spend a hit die for healing, whether through a class feature or other means, you can choose to maximize the roll. You can use this feature a number of times equal to your proficiency bonus before completing a long rest.",
        category: "Active, Healing",
        type: 0
    },
    {
        id: 20,
        name: "Broad Skillset",
        source: "Homebrew",
        requirement: "-",
        repeatable: "Yes, up to 3 times",
        description: "You gain +1 to all ability checks made with skills you are not proficient in. This reflects your broad knowledge and adaptability in various situations.",
        category: "Passive, Skill",
        type: 0
    },
    {
        id: 21,
        name: "Fletcher",
        source: "Homebrew",
        requirement: "-",
        repeatable: "No",
        description: "Gain proficiency with wood carver's tools, expertise if you already have it.\n Crafting custom arrows costs -25% less and takes half of the time.\n Learn 3 common or uncommon custom arrow recipes.",
        category: "Passive, Crafting, Skill",
        type: 0
    },
    {
        id: 22,
        name: "Haggle",
        source: "Homebrew",
        requirement: "Charisma (13/14/15) or higher",
        repeatable: "Yes, up to 3 times",
        description: "Buying and selling prices are (10%/20%/30%) better.",
        category: "Passive, Utility",
        type: 0
    },
    {
        id: 23,
        name: "Herbalist",
        source: "Homebrew",
        requirement: "-",
        repeatable: "No",
        description: "Gain proficiency with herbalism kit, expertise if you already have it.\n Crafting potions costs -25% less and takes half of the time.\n Learn 3 common or uncommon potion recipes.",
        category: "Passive, Crafting, Skill",
        type: 0
    },
    {
        id: 24,
        name: "Healthy",
        source: "Homebrew",
        requirement: "Constitution 13 or higher",
        repeatable: "No",
        description: "You have advantage on saving throws against disease and poison.\n When a disease requires a saving throw that would normally cause damage, you take no damage on a successful save and only half damage on a failure.",
        category: "Passive, Defensive",
        type: 0
    },
    {
        id: 25,
        name: "Nimble",
        source: "Homebrew",
        requirement: "Dexterity 13 or higher",
        repeatable: "No",
        description: "Gain proficiency with acrobatics, expertise if you already have it.\n You can move through the space of hostile creatures, treating it as difficult terrain.",
        category: "Passive, Skill, Movement",
        type: 0
    },
    {
        id: 26,
        name: "Inconspicuous",
        source: "Homebrew",
        requirement: "-",
        repeatable: "No",
        description: "Your passive Stealth and Performance scores (while being disguised) are 8 + the respective ability score modifier, rather than 5 + the modifier.",
        category: "Passive, Skill",
        type: 0
    },
    {
        id: 27,
        name: "Miner",
        source: "Homebrew",
        requirement: "-",
        repeatable: "No",
        description: "With the appropriate tools, you can excavate a 5ft cube of dirt or stone in 5 minutes.\n You have advantage on Wisdom (Survival) checks to navigate and avoid getting lost in subterranean environments.\n You have an innate understanding of geological formations. Gain proficiency in Intelligence (Nature) checks related to identifying minerals and predicting the stability of underground structures.\n Raw ores and gems sell for 15% more.",
        category: "Passive, Skill, Utility",
        type: 0
    },
    {
        id: 28,
        name: "Minor Luck",
        source: "Homebrew",
        requirement: "-",
        repeatable: "No",
        description: "You have three d4 dice that you can use to add or subtract from an attack roll, saving throw, or ability check made by you or another creature.\n You can use only one d4 per roll, and you regain all expended dice after completing a long rest.",
        category: "Active, Utility",
        type: 0
    },
    {
        id: 29,
        name: "Jeweler",
        source: "Homebrew",
        requirement: "-",
        repeatable: "No",
        description: "Gain proficiency with jeweler's tools, expertise if you already have it.\n Spending 1 hour polishing a gemstone increases its selling price by 40%.",
        category: "Passive, Crafting, Skill",
        type: 0
    },
    {
        id: 30,
        name: "Street Smarts",
        source: "Homebrew",
        requirement: "-",
        repeatable: "No",
        description: "Gain proficiency in Stealth, Sleight of Hand, or Deception.\n You can write, read, and speak in Thieves' Cant.",
        category: "Passive,Skill, Utility",
        type: 0
    },
    {
        id: 31,
        name: "Travel Guide",
        source: "Homebrew",
        requirement: "-",
        repeatable: "No",
        description: "Gain proficiency in Survival, expertise if you already have it.\n Your party's travel speed increases by 10%.\n You have advantage on Survival checks to navigate and avoid getting lost in the wilderness.",
        category: "Passive, Movement, Skill",
        type: 0
    },
    {
        id: 32,
        name: "Pike Square",
        source: "Homebrew",
        requirement: "-",
        repeatable: "No",
        description: "You can make attacks of opportunity against creatures that enter your melee reach if you are wielding a polearm or a weapon with the reach or greater reach property.",
        category: "Active, Offensive",
        type: 0
    },
    {
        id: 33,
        name: "Overwhelm",
        source: "Homebrew",
        requirement: "-",
        repeatable: "No",
        description: "Attacks with heavy weapons ignore the additional AC provided by non-magical shields. The shield's magical bonus to AC is only ignored if your weapon is also magical.",
        category: "Passive, Offensive",
        type: 0
    },
    {
        id: 34,
        name: "Quick Draw",
        source: "Homebrew",
        requirement: "Dexterity 13 or higher",
        repeatable: "No",
        description: "During the initiative roll, if you are not surprised, you can use your reaction to make a single attack roll with a firearm against a creature you can see. If the attack hits, the target's initiative is reduced by your proficiency bonus.\n You also have +1 to initiative checks.",
        category: "Active, Passive, Offensive",
        type: 0
    },
    {
        id: 35,
        name: "Swimmer",
        source: "Homebrew",
        requirement: "-",
        repeatable: "No",
        description: "You gain a swimming speed equal to your walking speed and have advantage on swimming-related ability checks.\n You can hold your breath for twice as long as normal.",
        category: "Passive, Movement, Skill, Utility",
        type: 0
    },
    {
        id: 36,
        name: "Thick Skinned",
        source: "Homebrew",
        requirement: "-",
        repeatable: "No",
        description: "You gain a +1 bonus to your Armor Class while not wearing any armor.",
        category: "Passive, Defensive",
        type: 0
    },
    {
        id: 37,
        name: "Demolitions Expert",
        source: "Homebrew",
        requirement: "-",
        repeatable: "No",
        description: "Bombs and grenades used by you have a +1 bonus to their DC and attack roll.\n Your explosives deal double damage when targeting structures.\n You can examine an explosive device and determine its properties, blast radius, and potential effects with a successful DC:15 Intelligence (Investigation) check (you are considered proficient in the investigation roll).",
        category: "Passive, Offensive, Utility",
        type: 0
    },
    {
        id: 38,
        name: "Escape Artist",
        source: "Homebrew",
        requirement: "-",
        repeatable: "No",
        description: "Once per short rest, you can automatically succeed on an ability check or saving throw to avoid or escape a grapple or restrain.\n You also have advantage on checks to escape from bindings, ropes, or similar restraints.",
        category: "Active, Passive, Defensive",
        type: 0
    },
    {
        id: 39,
        name: "Juggler",
        source: "Homebrew",
        requirement: "-",
        repeatable: "No",
        description: "You can make attack rolls at long range with throwing weapons without disadvantage.\n You also have a +2 bonus to damage rolls with throwing weapons.",
        category: "Passive, Offensive",
        type: 0
    },
    {
        id: 40,
        name: "Well Fit",
        source: "Homebrew",
        requirement: "-",
        repeatable: "No",
        description: "You don't suffer from disadvantage on Stealth checks due to wearing armor.\n You always appear well-groomed and put together, gaining advantage on Charisma checks involving social interactions related to your attire and beauty.",
        category: "Passive, Movement, Utility",
        type: 0
    },
    {
        id: 41,
        name: "Airhead",
        source: "Homebrew",
        requirement: "Requires a negative Intelligence modifier",
        repeatable: "No",
        description: "Your thoughts can't be read or sensed because there aren't any.\n Creatures have disadvantage on Insight checks made to determine your intentions.",
        category: "Passive, Defensive, Utility",
        type: 0
    },
    {
        id: 42,
        name: "Dumb Luck",
        source: "Homebrew",
        requirement: "-",
        repeatable: "No",
        description: "Once per day, when you roll a natural 1 on a d20, you can treat it as a critical success, reflecting your sheer comical luck in turning an unfortunate situation into an unexpected triumph.\n As a reaction, you can spend your daily use of Dumb Luck to turn a creature's critical success on a d20 roll into a critical failure, showcasing your uncanny ability to reverse fate in the most unexpected ways.",
        category: "Active, Utility",
        type: 0
    },
    {
        id: 43,
        name: "Unlucky",
        source: "Homebrew",
        requirement: "-",
        repeatable: "No",
        description: "When an ally creature within 5 feet of you would receive a critical hit, you become the target instead.\n When a roll is made to determine the target of a negative phenomenon or attack, you always find yourself in the crosshairs if you are within range. This reflects your uncanny ability to attract misfortune toward yourself.",
        category: "Passive, Utility",
        type: 0
    },
    {
        id: 44,
        name: "Disastrous",
        source: "Homebrew",
        requirement: "-",
        repeatable: "No",
        description: "Once per short rest, when you critically fail a melee attack roll, you can get yourself and every large or smaller creature within 5 feet of you prone.\n Once per day, you can use your disastrous tendencies to make a grand and clumsy entrance. As an action, you can cause a harmless but attention-grabbing mishap, such as knocking over a stack of barrels or tripping over a table. All creatures within 30 feet who can see or hear you must make a Wisdom saving throw (DC 8 + your proficiency bonus + your Charisma modifier) or be distracted for up to 5 minutes in social encounters or 1 turn in combat.\n While distracted, ally creatures have advantage on attack rolls and ability checks against those creatures.",
        category: "Active, Utility",
        type: 0
    },
    {
        id: 45,
        name: "Naive Perception",
        source: "Homebrew",
        requirement: "-",
        repeatable: "No",
        description: "You have advantage against charming effects.\n You have disadvantage on Insight checks to discern social intentions directed towards you.",
        category: "Passive, Defensive",
        type: 0
    },
    {
        id: 46,
        name: "Drug Addict",
        source: "Homebrew",
        requirement: "-",
        repeatable: "No",
        description: "You have resistance to and advantage against the effects of poisons and drugs.\n If you fail to consume drugs within a three-day span, you become anxious and gain disadvantage on ability checks until you consume the substance again.",
        category: "Passive, Defensive",
        type: 0
    },
    {
        id: 47,
        name: "Great Genes",
        source: "Homebrew",
        requirement: "-",
        repeatable: "No",
        description: "Increase one stat of your choice by 1.\n Double the HP and SP bonuses granted by your character specie.\n You have advantage on Charisma-based social interactions when interacting with members of your own species.",
        category: "Passive, Utility",
        type: 1
    },
    // {
    //     id: 48,
    //     name: "Hard Hearing",
    //     source: "Homebrew",
    //     requirement: "-",
    //     repeatable: "No",
    //     description: "You have advantage on saving throws against effects that require your hearing.\n You have disadvantage on Perception checks involving hearing, reflecting the challenges posed by your impaired sense.",
    //     category: "Flavor",
    //     type: 0
    // },
    // {
    //     id: 49,
    //     name: "Painless",
    //     source: "Homebrew",
    //     requirement: "-",
    //     repeatable: "No",
    //     description: "Your nervous system doesn't detect pain, granting you resistance to psychic damage, and you can't be affected by effects caused by severe pain (such as power word pain).\n You can only note that you are being attacked if the attack deals 5 points of damage or more. This requires a successful DC 15 Perception check, reflecting your limited awareness of minor threats.",
    //     category: "Flavor",
    //     type: 0
    // },
    {
        id: 50,
        name: "Silver Tongue",
        source: "Homebrew",
        requirement: "-",
        repeatable: "No",
        description: "Your passive Deception and Persuasion scores are 8 + the respective ability score modifier, rather than 5 + the modifier.",
        category: "Passive, Skill",
        type: 0
    },
    {
        id: 51,
        name: "Strong",
        source: "Homebrew",
        requirement: "-",
        repeatable: "No",
        description: "Your passive Athletics scores are 8 + the respective ability score modifier, rather than 5 + the modifier.",
        category: "Passive, Skill",
        type: 0
    },
    {
        id: 52,
        name: "Strong Will",
        source: "Homebrew",
        requirement: "-",
        repeatable: "No",
        description: "Increase your Wisdom or Charisma by 1.\n You have advantage on saving throws against charming effects.\n  If you are charmed, you can choose to grant yourself disadvantage on attacks, ability checks, or saving throws, or give a creature advantage on saving throws imposed by you. This reflects your ability to maintain control even when influenced by external forces.",
        category: "Passive, Defensive",
        type: 1
    },
    {
        id: 53,
        name: "Minor Score Increase",
        source: "Homebrew",
        requirement: "-",
        repeatable: "Yes",
        description: "Increase one stat of your choice by 1.",
        category: "Passive, Skill",
        type: 0
    },
    {
        id: 54,
        name: "Archery",
        source: "Homebrew",
        requirement: "-",
        repeatable: "No",
        description: "You can make attack rolls at long range with bows without disadvantage.\n You ignore half and three-quarters cover when making ranged attacks with bows.",
        category: "Passive, Offensive",
        type: 0
    },
    {
        id: 55,
        name: "Crossbow Expert",
        source: "Homebrew",
        requirement: "-",
        repeatable: "No",
        description: "You can make attack rolls at long range with crossbows without disadvantage.\n You ignore the loading property of crossbows.",
        category: "Passive, Offensive",
        type: 0
    },
    {
        id: 56,
        name: "Gunner",
        source: "Homebrew",
        requirement: "-",
        repeatable: "No",
        description: "You can make attack rolls at long range with firearms without disadvantage.\n You ignore the loading property of firearms.",
        category: "Passive, Offensive",
        type: 0
    },
    {
        id: 57,
        name: "Close Quarters Shooter",
        source: "Homebrew",
        requirement: "-",
        repeatable: "No",
        description: "When making a ranged attack while you are within 5 feet of a hostile creature, you do not have disadvantage on the attack roll. Your ranged attacks ignore half cover and three-quarters cover against targets within 30 feet of you.",
        category: "Passive, Offensive",
        type: 0
    },
    {
        id: 58,
        name: "Low Magic Metabolism",
        source: "Homebrew",
        requirement: "-",
        repeatable: "No",
        description: "Potion effects last twice as long on you.",
        category: "Passive, Utility",
        type: 0
    },
    {
        id: 59,
        name: "Expert Driver",
        source: "Homebrew",
        requirement: "-",
        repeatable: "No",
        description: "Gain proficiency with land vehicles, expertise if you already have it.\n Travel speed with land vehicles is doubled.\n As a bonus action, you can 'Dash' with a vehicle you are driving, showcasing your expert control and swift handling.",
        category: "Active, Passive, Movement, Skill",
        type: 0
    },
    {
        id: 60,
        name: "Lingering Magic",
        source: "Homebrew",
        requirement: "-",
        repeatable: "No",
        description: "When your concentration on a spell is broken, the spell still remains for an additional round.",
        category: "Passive, Utility",
        type: 0
    },
    {
        id: 61,
        name: "Telepathic Link",
        source: "Homebrew",
        requirement: "Intelligence 13 or higher",
        repeatable: "No",
        description: "You can establish a telepathic link with a willing creature you can see within 30 feet. This link allows silent communication, sharing thoughts and feelings effortlessly. The telepathic connection doesn't require a shared language.",
        category: "Active, Spellcasting, Utility",
        type: 0
    },
    {
        id: 62,
        name: "Memorized Spells",
        source: "Homebrew",
        requirement: "Being a spellcasting class or subclass",
        repeatable: "Yes",
        description: "Choose two spells from your available spell list. You always have these spells prepared, and they don't count toward the number of spells you know or have prepared. This reflects your character's ability to effortlessly call upon these particular spells without the need for preparation.",
        category: "Passive, Spellcasting, Utility",
        type: 0
    },
    {
        id: 63,
        name: "Reactive",
        source: "Homebrew",
        requirement: "-",
        repeatable: "No",
        description: "Increase your Dexterity or Wisdom score by 1.\n Once per round, you can take one additional reaction. You can use this feature a number of times equal to your proficiency bonus before a long rest.",
        category: "Active, Utility",
        type: 1
    },
    {
        id: 64,
        name: "Sacred Missiles",
        source: "Homebrew",
        requirement: "Level two paladin",
        repeatable: "No",
        description: "You can use Divine Smite on ranged attack rolls. However, you must decide to use Divine Smite before the attack is made. This reflects your ability to infuse your ranged attacks with divine power for added impact.",
        category: "Active, Class Feature, Offensive",
        type: 0
    },
    {
        id: 65,
        name: "Thuggish",
        source: "Homebrew",
        requirement: "Level two rogue",
        repeatable: "No",
        description: "You can deal sneak attack damage with weapons that lack the finesse property, as long as they are not heavy.",
        category: "Passive, Class Feature, Offensive",
        type: 0
    },
    {
        id: 66,
        name: "Faithful",
        source: "Homebrew",
        requirement: "Having channel divinity feature",
        repeatable: "No",
        description: "You gain one additional use of Channel Divinity.",
        category: "Active, Class Feature, Utility",
        type: 0
    },
    {
        id: 67,
        name: "Medium",
        source: "Homebrew",
        requirement: "-",
        repeatable: "No",
        description: "You can feel the presence of nearby undead, fiends, and celestials within 30 feet of you. However, you can't determine the origin or exact location of these creatures.",
        category: "Passive, Utility",
        type: 0
    },
    {
        id: 68,
        name: "Whispers from Beyond",
        source: "Homebrew",
        requirement: "The minor feat 'Medium'",
        repeatable: "No",
        description: "Increase your Intelligence, Wisdom or Charisma score by 1.\n You can cast Speak with Dead once per long rest without expending material components.\n You can see into the Ethereal Plane up to 30 feet.",
        category: "Active, Passive, Utility, Spellcasting",
        type: 1
    },
    {
        id: 69,
        name: "Ethereal Walker",
        source: "Homebrew",
        requirement: "The feat 'Whispers from Beyond'",
        repeatable: "No",
        description: "Increase your Intelligence, Wisdom or Charisma score by 1.\n You can cast Astral Projection on yourself once per long rest without expending material components.\n The range you can see into the Ethereal Plane increases by 30ft.",
        category: "Active, Passive, Utility, Spellcasting",
        type: 1
    },
    {
        id: 70,
        name: "Relentless",
        source: "Homebrew",
        requirement: "-",
        repeatable: "No",
        description: "Increase your Constitution score by 1.\n Once per long rest, when you would drop to 0 hit points but not be killed outright, you drop to 1 hit point instead.",
        category: "Passive, Defensive",
        type: 1
    },
    {
        id: 71,
        name: "Titanic Force",
        source: "Homebrew",
        requirement: "Level 8 Character",
        repeatable: "No",
        description: "Increase your hit point maximum by 10.\n Increase your damage rolls on melee attacks by +1 for each 60 hit points in your maximum hit point total, with a minimum bonus of +1.",
        category: "Passive, Offensive",
        type: 1
    },
    {
        id: 72,
        name: "Slayer",
        source: "Homebrew",
        requirement: "-",
        repeatable: "Yes, choose a different creature type each time you gain this feat.",
        description: "Choose one creature type (such as undead, fiends, or aberrations) or two types of humanoid (e.g., elves and orcs). Once per turn, attack rolls made by you against creatures of the chosen type(s) deal extra damage equal to your proficiency bonus.",
        category: "Passive, Offensive",
        type: 0
    },
    {
        id: 73,
        name: "Clutch Hitter",
        source: "Homebrew",
        requirement: "-",
        repeatable: "No",
        description: "You gain a +1 bonus to your critical hit range when your current hit points are equal to or below 10% of your maximum hit points.",
        category: "Passive, Conditional, Offensive",
        type: 0
    },
    {
        id: 74,
        name: "Last Gasp",
        source: "Homebrew",
        requirement: "-",
        repeatable: "No",
        description: "You gain a +10ft bonus to your movement when your current hit points are equal to or below 10% of your maximum hit points.",
        category: "Passive, Conditional, Offensive",
        type: 0
    },
    {
        id: 75,
        name: "Lurker",
        source: "Homebrew",
        requirement: "-",
        repeatable: "No",
        description: "Dim light conditions no longer impose disadvantage on your attack rolls, and they do not grant advantage to attack rolls against you due to sight. Your mastery of shadows allows you to navigate and strike effectively even in less-than-optimal lighting conditions.",
        category: "Passive, Defensive, Offensive",
        type: 0
    },
    {
        id: 76,
        name: "On Guard",
        source: "Homebrew",
        requirement: "-",
        repeatable: "No",
        description: "In the first round of combat, you gain a +2 bonus to your AC and a +4 bonus to saving throws. If you are surprised, these bonuses are halved. Your heightened awareness and readiness in the opening moments of battle enhance your defenses and resilience.",
        category: "Passive, Defensive",
        type: 0
    },
    {
        id: 77,
        name: "Coup de Grâce",
        source: "Homebrew",
        requirement: "-",
        repeatable: "No",
        description: "When you have more than one source of advantage on an attack roll, you gain a bonus to damage rolls. Each additional source of advantage grants a +2 bonus to damage rolls.",
        category: "Passive, Offensive",
        type: 1
    }
]

export default featsData;