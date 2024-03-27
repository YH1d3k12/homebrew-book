const ItemsData = [
    {
        // Item Attributes.
        name: "Red Sugar",
        image: "Crystal",
        rarity: "Rare",
        description: "Dwarf Crack, also known as Red Sugar, is a glowing, deep-red crystalline resource found in the deeps. Dwarf Crack is an edible sweet rock with healing and addictive properties, as noted by the Dwarves.\n Consuming raw Red Sugar restores 1d4 hit points; if the character is a dwarf, it restores the maximum value. It is observed that healing potions made of Red Sugar also achieve maximum efficiency on dwarves.",
        cost: "15gp",
        type: "Mineral",
        effects: {
            "Restore Health": 3,
            "Restore Stamina": 2,
            "Fortify Speed": 2,
            "Fortify Dexterity": 2
        }
    },
    {
        // Item Attributes.
        name: "Troll Fat",
        image: "-",
        rarity: "Rare",
        description: "Troll Fat is a thick, viscous liquid obtained from the adipose tissue of trolls. Trolls are known for their regenerative abilities, and their fat possesses unique properties that can be harnessed for various purposes. Alchemists and adventurers seek Troll Fat for its potent magical and alchemical applications.\n Using raw Troll Fat gives an unpleasant taste, but when properly prepared, it can be used in potion crafting to create powerful concoctions with remarkable benefits",
        cost: "25gp",
        type: "",
        effects: {
            "Regenerate Health": 3,
            "Fortify Health": 2,
            "Fortify Constitution": 2,
            "Weakness Fire": 2
        }
    },
    {
        // Item Attributes.
        name: "Bone Meal",
        image: "-",
        rarity: "Common",
        description: "Bone Meal is a fine powder ground from the bones of various creatures, often collected from the remains of the undead or slain beasts. Alchemists and herbalists value Bone Meal for its versatility and use it in the creation of potions, spells, and fertilizers. The powder retains residual magical properties from the creatures it originates from, making it a sought-after ingredient in the mystical arts.\n When consumed or applied, Bone Meal can have various effects, ranging from enhancing magical abilities to promoting plant growth.",
        cost: "1gp",
        type: "",
        effects: {
            "Fortify Necromancy": 1,
            "Fortify Conjuration": 1,
            "Fortify Magic": 1,
        }
    },
    {
        // Item Attributes.
        name: "Basil",
        image: "-",
        rarity: "Common",
        description: "Basil is a fragrant herb with bright green leaves, prized for its culinary and medicinal properties. Widely cultivated in gardens and sought after by herbalists, Basil is known for its versatile applications. Alchemists and cooks alike value it for its unique flavor and potential in potion making.\n When used in potion crafting, Basil can enhance the effects of healing and supportive concoctions, making it a staple in the inventory of adventurers and alchemists.",
        cost: "1sp",
        type: "",
        effects: {
            "Restore Health": 1,
            "Fortify Evocation": 1,
            "Resist Necrotic": 1
        }
    },
    {
        // Item Attributes.
        name: "Aloe",
        image: "-",
        rarity: "Uncommon",
        description: "Aloe, the 'Soothing Succulent,' is a resilient plant with fleshy leaves known for its healing properties. Thriving in arid landscapes, Aloe is a staple for herbalists and alchemists. The gel extracted from its leaves is renowned for its ability to heal wounds, soothe burns, and promote overall well-being.\n In potion crafting, Aloe is a valuable ingredient that can be used to create balms and elixirs with rejuvenating effects. Legends speak of Aloe's connection to nature's vitality, and some believe that the plant carries the essence of healing bestowed by benevolent spirits.",
        cost: "2gp",
        type: "",
        effects: {
            "Restore Health": 2,
            "Regenerate Health": 1,
            "Resist Fire": 1
        }
    },
]

return ItemsData;