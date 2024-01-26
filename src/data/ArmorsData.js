const armorsData = [
    {
        // Item Attributes.
        name: "Bulky Cloth",
        image: "",
        source: "",
        rarity: "Common",
        description: "",
        cost: "1gp",
        magical: false,
        attunement: false,
        // Armor Attributes.
        type: "Light Armor",
        armorClass: "11 + Dex modifier",
        strength: "-",
        stealth: "Disadvantage"
    },
    {
        // Item Attributes.
        name: "Leather Vest",
        image: "",
        source: "",
        rarity: "Common",
        description: "",
        cost: "5gp",
        magical: false,
        attunement: false,
        // Armor Attributes.
        type: "Light Armor",
        armorClass: "11 + Dex modifier",
        strength: "-",
        stealth: "-"
    },
    {
        // Item Attributes.
        name: "Gambeson",
        image: "",
        source: "",
        rarity: "Common",
        description: "Warm: resistance to cold climates.",
        cost: "9gp",
        magical: false,
        attunement: false,
        // Armor Attributes.
        type: "Light Armor",
        armorClass: "12 + Dex modifier",
        strength: "-",
        stealth: "-"
    },
    {
        // Item Attributes.
        name: "Fine Gambeson",
        image: "",
        source: "",
        rarity: "Uncommon",
        description: "Warm: resistance to cold climates.\nFine: You take -2 damage points from non-magical slashing and piercing attacks.",
        cost: "63gp",
        magical: false,
        attunement: false,
        // Armor Attributes.
        type: "Light Armor",
        armorClass: "12 + Dex modifier",
        strength: "-",
        stealth: "-"
    },
    {
        // Item Attributes.
        name: "Elven Light Armor",
        image: "",
        source: "",
        rarity: "Rare",
        description: "",
        cost: "325gp",
        magical: false,
        attunement: false,
        // Armor Attributes.
        type: "Light Armor",
        armorClass: "13 + Dex modifier",
        strength: "-",
        stealth: "-"
    },
    {
        // Item Attributes.
        name: "Juramento do Guardião",
        image: "",
        source: "",
        rarity: "Very Rare",
        description: "Juramento: Escolhe uma criatura para jurar proteção, enquanto estiver a 30ft dessa criatura ambos recebem +2 de AC.\nSe a criatura morrer ou você quebrar o juramento, o item perde sua mágica por 1 semana.",
        cost: "1.100gp",
        magical: true,
        attunement: true,
        // Armor Attributes.
        type: "Heavy Armor",
        armorClass: "16",
        strength: "13",
        stealth: "Disadvantage"
    },
    {
        // Item Attributes.
        name: "Tanga do Intocável",
        image: "",
        source: "",
        rarity: "Legendary",
        description: "Aumenta sua AC em 3 e movimento em +10ft caso não esteja usando armadura. \nFraqueza: esta tanga magica eleva sua mobilidade a custo de resistência fisica, todo ataque contra você tem o menor dado de dano rolado máximazado.",
        cost: "7.000gp",
        magical: true,
        attunement: true,
        // Armor Attributes.
        type: "Cloth",
        armorClass: "-",
        strength: "-",
        stealth: "-"
    },
    {
        // Item Attributes.
        name: "Retribuição de Ferro",
        image: "",
        source: "",
        rarity: "Epic",
        description: "Espinhos: todo ataque corpo a corpo efetuado a 5ft de você que te acertar causa 5 de dano perfurante magico contra a criatura atacante.",
        cost: "3.000gp",
        magical: true,
        attunement: true,
        // Armor Attributes.
        type: "Heavy Armor",
        armorClass: "15",
        strength: "15",
        stealth: "Disadvantage"
    },
    {
        // Item Attributes.
        name: "Aperto dos Mortos",
        image: "",
        source: "",
        rarity: "Very Rare",
        description: "Se sofrer dano, seu próximo ataque corpo a corpo até o fim do próximo turno causa 1d6 de dano necrotico adicional e cura em proporção do dano adicional causado.",
        cost: "1.350gp",
        magical: true,
        attunement: true,
        // Armor Attributes.
        type: "Medium Armor",
        armorClass: "13 + Dex modifier (max 2)",
        strength: "12",
        stealth: "Disadvantage"
    },
    {
        // Item Attributes.
        name: "Placa do Colosso",
        image: "",
        source: "",
        rarity: "Legendary",
        description: "Você e seus itens equipados magicamente se tornam 1 tamanho acima enquanto estiver sintonizado com esta armadura.",
        cost: "11.000gp",
        magical: true,
        attunement: true,
        // Armor Attributes.
        type: "Medium Armor",
        armorClass: "14 + Dex modifier (max 2)",
        strength: "15",
        stealth: "Disadvantage"
    },
    {
        // Item Attributes.
        name: "Vestes do Comerciante",
        image: "",
        source: "",
        rarity: "Uncommon",
        description: "Preço de compra e venda são 5% melhores.",
        cost: "65gp",
        magical: true,
        attunement: true,
        // Armor Attributes.
        type: "Cloth",
        armorClass: "10 + Dex modifier",
        strength: "-",
        stealth: "-"
    },
    {
        // Item Attributes.
        name: "Vestes do Viajante",
        image: "",
        source: "",
        rarity: "Uncommon",
        description: "Seu movimento aumenta em 5ft. Nadar e escalar não custam movimento extra.",
        cost: "105gp",
        magical: true,
        attunement: true,
        // Armor Attributes.
        type: "Cloth",
        armorClass: "11 + Dex modifier",
        strength: "-",
        stealth: "-"
    },
    {
        // Item Attributes.
        name: "Vestes do Charlatão",
        image: "",
        source: "",
        rarity: "Uncommon",
        description: "Recebe +2 para testes de persuasão e enganação.",
        cost: "65gp",
        magical: true,
        attunement: true,
        // Armor Attributes.
        type: "Cloth",
        armorClass: "10 + Dex modifier",
        strength: "-",
        stealth: "-"
    },
    {
        // Item Attributes.
        name: "Coração de Warmog",
        image: "",
        source: "",
        rarity: "Legendary",
        description: "Enquanto estiver sintonizado com este item sua vida máxima aumenta em 40 e regenera 1 ponto de vida por turno, recuperando membros perdidos após 1 minuto.",
        cost: "12.500gp",
        magical: true,
        attunement: true,
        // Armor Attributes.
        type: "Heavy Armor",
        armorClass: "13",
        strength: "15",
        stealth: "Disadvantage"
    },
    {
        // Item Attributes.
        name: "Escudo Rúnico",
        image: "",
        source: "",
        rarity: "Rare",
        description: "Reduz o dano de spell attacks contra você em 5",
        cost: "175gp",
        magical: true,
        attunement: false,
        // Armor Attributes.
        type: "Light Shield",
        armorClass: "+1 AC",
        strength: "-",
        stealth: "-"
    },
    {
        // Item Attributes.
        name: "Escudo Rúnico+",
        image: "",
        source: "",
        rarity: "Very Rare",
        description: "Reduz o dano de spell attacks contra você em 10",
        cost: "650gp",
        magical: true,
        attunement: false,
        // Armor Attributes.
        type: "Light Shield",
        armorClass: "+1 AC",
        strength: "-",
        stealth: "-"
    },
    {
        // Item Attributes.
        name: "Novice Robes",
        image: "",
        source: "",
        rarity: "Common",
        description: "Aumenta seu SP máximo em 3.",
        cost: "30gp",
        magical: true,
        attunement: true,
        // Armor Attributes.
        type: "Cloth",
        armorClass: "10 + Dex modifier",
        strength: "-",
        stealth: "-"
    },
    {
        // Item Attributes.
        name: "Apprentice Robes",
        image: "",
        source: "",
        rarity: "Uncommon",
        description: "Aumenta seu SP máximo em 7.",
        cost: "105gp",
        magical: true,
        attunement: true,
        // Armor Attributes.
        type: "Cloth",
        armorClass: "10 + Dex modifier",
        strength: "-",
        stealth: "-"
    },
    {
        // Item Attributes.
        name: "Adept Robes",
        image: "",
        source: "",
        rarity: "Rare",
        description: "Aumenta seu SP máximo em 12.\n Recebe +1 de Spell DC e Spell Attack.",
        cost: "450gp",
        magical: true,
        attunement: true,
        // Armor Attributes.
        type: "Cloth",
        armorClass: "10 + Dex modifier",
        strength: "-",
        stealth: "-"
    },
    {
        // Item Attributes.
        name: "Expert Robes",
        image: "",
        source: "",
        rarity: "Very Rare",
        description: "Aumenta seu SP máximo em 15.\n Recebe +1 de Spell DC e Spell Attack. \n O custo de conjuração de qualquer mágia diminui em 1sp.",
        cost: "1.350gp",
        magical: true,
        attunement: true,
        // Armor Attributes.
        type: "Cloth",
        armorClass: "10 + Dex modifier",
        strength: "-",
        stealth: "-"
    },
    {
        // Item Attributes.
        name: "Master Robes",
        image: "",
        source: "",
        rarity: "Epic",
        description: "Aumenta seu SP máximo em 21.\n Recebe +2 de Spell DC e Spell Attack. \n O custo de conjuração de qualquer mágia diminui em 1sp.",
        cost: "3.500gp",
        magical: true,
        attunement: true,
        // Armor Attributes.
        type: "Cloth",
        armorClass: "10 + Dex modifier",
        strength: "-",
        stealth: "-"
    },
    {
        // Item Attributes.
        name: "Vestes do Curandeiro",
        image: "",
        source: "",
        rarity: "Uncommon",
        description: "Curas magicas conjuradas por você curam +2 pontos de vida.",
        cost: "85gp",
        magical: true,
        attunement: true,
        // Armor Attributes.
        type: "Cloth",
        armorClass: "10 + Dex modifier",
        strength: "-",
        stealth: "-"
    },
    {
        // Item Attributes.
        name: "Manto do Mago de Batalha",
        image: "",
        source: "",
        rarity: "Rare",
        description: "Seu SP máximo é reduzido pela metade. \nSua vida máxima aumenta um número igual o dobro de seu SP atual.",
        cost: "450gp",
        magical: true,
        attunement: true,
        // Armor Attributes.
        type: "Cloth",
        armorClass: "10 + Dex modifier + Spellcasting Attribute modifier (max 2)",
        strength: "-",
        stealth: "-"
    },
    {
        // Item Attributes.
        name: "Ghillie Suit",
        image: "",
        source: "",
        rarity: "Common",
        description: "Você tem vantagem em testes de furtividade no terreno específicado pelo Ghillie Suit. \nSe ficar parado por mais de 1 minuto no terreno específicado, recebe +5 em testes de furtividade.",
        cost: "32gp",
        magical: false,
        attunement: false,
        // Armor Attributes.
        type: "Cloth",
        armorClass: "10 + Dex modifier",
        strength: "-",
        stealth: "-"
    },
];

export default armorsData;