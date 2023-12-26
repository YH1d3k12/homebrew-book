const armorsData = [
    {
        // Item
        name: "Bulky Cloth",
        description: "",
        cost: "1gp",
        magical: false,
        attunement: false,
        rarity: "Common",
        // Armor
        type: "Light Armor",
        armorClass: "11 + Dex modifier",
        strength: "-",
        stealth: "Disadvantage"
    },
    {
        // Item
        name: "Leather Vest",
        description: "",
        cost: "5gp",
        magical: false,
        attunement: false,
        rarity: "Common",
        // Armor
        type: "Light Armor",
        armorClass: "11 + Dex modifier",
        strength: "-",
        stealth: "-"
    },
    {
        // Item
        name: "Gambeson",
        description: "Warm: resistance to cold climates.",
        cost: "9gp",
        magical: false,
        attunement: false,
        rarity: "Common",
        // Armor
        type: "Light Armor",
        armorClass: "12 + Dex modifier",
        strength: "-",
        stealth: "-"
    },
    {
        // Item
        name: "Fine Gambeson",
        description: "Warm: resistance to cold climates.\nFine: You take -2 damage points from non-magical slashing and piercing attacks.",
        cost: "63gp",
        magical: false,
        attunement: false,
        rarity: "Uncommon",
        // Armor
        type: "Light Armor",
        armorClass: "12 + Dex modifier",
        strength: "-",
        stealth: "-"
    },
    {
        // Item
        name: "Elven Light Armor",
        description: "",
        cost: "325gp",
        magical: false,
        attunement: false,
        rarity: "Rare",
        // Armor
        type: "Light Armor",
        armorClass: "13 + Dex modifier",
        strength: "-",
        stealth: "-"
    },
    {
        // Item
        name: "Juramento do Guardião",
        description: "Juramento: Escolhe uma criatura para jurar proteção, enquanto estiver a 30ft dessa criatura ambos recebem +2 de AC.\nSe a criatura morrer ou você quebrar o juramento, o item perde sua mágica por 1 semana.",
        cost: "1.100gp",
        magical: true,
        attunement: true,
        rarity: "Very Rare",
        // Armor
        type: "Heavy Armor",
        armorClass: "16",
        strength: "13",
        stealth: "Disadvantage"
    },
    {
        // Item
        name: "Tanga do Intocável",
        description: "Aumenta sua AC em 3 e movimento em +10ft caso não esteja usando armadura. \nFraqueza: esta tanga magica eleva sua mobilidade a custo de resistência fisica, todo ataque contra você tem o menor dado de dano rolado máximazado.",
        cost: "7.000gp",
        magical: true,
        attunement: true,
        rarity: "Legendary",
        // Armor
        type: "Cloth",
        armorClass: "-",
        strength: "-",
        stealth: "-"
    },
    {
        // Item
        name: "Retribuição de Ferro",
        description: "Espinhos: todo ataque corpo a corpo efetuado a 5ft de você que te acertar causa 5 de dano perfurante magico contra a criatura atacante.",
        cost: "3.000gp",
        magical: true,
        attunement: true,
        rarity: "Epic",
        // Armor
        type: "Heavy Armor",
        armorClass: "15",
        strength: "15",
        stealth: "Disadvantage"
    },
    {
        // Item
        name: "Aperto dos Mortos",
        description: "Se sofrer dano, seu próximo ataque corpo a corpo até o fim do próximo turno causa 1d6 de dano necrotico adicional e cura em proporção do dano adicional causado.",
        cost: "1.350gp",
        magical: true,
        attunement: true,
        rarity: "Very Rare",
        // Armor
        type: "Medium Armor",
        armorClass: "13 + Dex modifier (max 2)",
        strength: "12",
        stealth: "Disadvantage"
    },
    {
        // Item
        name: "Placa do Colosso",
        description: "Você e seus itens equipados magicamente se tornam 1 tamanho acima enquanto estiver sintonizado com esta armadura.",
        cost: "11.000gp",
        magical: true,
        attunement: true,
        rarity: "Legendary",
        // Armor
        type: "Medium Armor",
        armorClass: "14 + Dex modifier (max 2)",
        strength: "15",
        stealth: "Disadvantage"
    },
    {
        // Item
        name: "Vestes do Comerciante",
        description: "Preço de compra e venda são 5% melhores.",
        cost: "65gp",
        magical: true,
        attunement: true,
        rarity: "Uncommon",
        // Armor
        type: "Cloth",
        armorClass: "10 + Dex modifier",
        strength: "-",
        stealth: "-"
    },
    {
        // Item
        name: "Vestes do Viajante",
        description: "Seu movimento aumenta em 5ft. Nadar e escalar não custam movimento extra.",
        cost: "105gp",
        magical: true,
        attunement: true,
        rarity: "Uncommon",
        // Armor
        type: "Cloth",
        armorClass: "11 + Dex modifier",
        strength: "-",
        stealth: "-"
    },
    {
        // Item
        name: "Vestes do Charlatão",
        description: "Recebe +2 para testes de persuasão e enganação.",
        cost: "65gp",
        magical: true,
        attunement: true,
        rarity: "Uncommon",
        // Armor
        type: "Cloth",
        armorClass: "10 + Dex modifier",
        strength: "-",
        stealth: "-"
    },
    {
        // Item
        name: "Coração de Warmog",
        description: "Enquanto estiver sintonizado com este item sua vida máxima aumenta em 40 e regenera 1 ponto de vida por turno, recuperando membros perdidos após 1 minuto.",
        cost: "12.500gp",
        magical: true,
        attunement: true,
        rarity: "Legendary",
        // Armor
        type: "Heavy Armor",
        armorClass: "13",
        strength: "15",
        stealth: "Disadvantage"
    },
    {
        // Item
        name: "Escudo Rúnico",
        description: "Reduz o dano de spell attacks contra você em 5",
        cost: "150gp",
        magical: true,
        attunement: false,
        rarity: "Rare",
        // Armor
        type: "Light Shield",
        armorClass: "+1 AC",
        strength: "-",
        stealth: "-"
    },
    {
        // Item
        name: "Novice Robes",
        description: "Aumenta seu SP máximo em 3.",
        cost: "30gp",
        magical: true,
        attunement: true,
        rarity: "Common",
        // Armor
        type: "Cloth",
        armorClass: "10 + Dex modifier",
        strength: "-",
        stealth: "-"
    },
    {
        // Item
        name: "Apprentice Robes",
        description: "Aumenta seu SP máximo em 7.",
        cost: "105gp",
        magical: true,
        attunement: true,
        rarity: "Uncommon",
        // Armor
        type: "Cloth",
        armorClass: "10 + Dex modifier",
        strength: "-",
        stealth: "-"
    },
    {
        // Item
        name: "Adept Robes",
        description: "Aumenta seu SP máximo em 12.\n Recebe +1 de Spell DC e Spell Attack.",
        cost: "450gp",
        magical: true,
        attunement: true,
        rarity: "Rare",
        // Armor
        type: "Cloth",
        armorClass: "10 + Dex modifier",
        strength: "-",
        stealth: "-"
    },
    {
        // Item
        name: "Expert Robes",
        description: "Aumenta seu SP máximo em 15.\n Recebe +1 de Spell DC e Spell Attack. \n O custo de conjuração de qualquer mágia diminui em 1sp.",
        cost: "1.350gp",
        magical: true,
        attunement: true,
        rarity: "Very Rare",
        // Armor
        type: "Cloth",
        armorClass: "10 + Dex modifier",
        strength: "-",
        stealth: "-"
    },
    {
        // Item
        name: "Master Robes",
        description: "Aumenta seu SP máximo em 21.\n Recebe +2 de Spell DC e Spell Attack. \n O custo de conjuração de qualquer mágia diminui em 1sp.",
        cost: "3.500gp",
        magical: true,
        attunement: true,
        rarity: "Epic",
        // Armor
        type: "Cloth",
        armorClass: "10 + Dex modifier",
        strength: "-",
        stealth: "-"
    },
];

export default armorsData;