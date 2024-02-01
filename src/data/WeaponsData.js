
import assault_rifle from "../assets/images/weapons/assault_rifle.png";
import axe from "../assets/images/weapons/axe.png";
import bo from "../assets/images/weapons/bo.png";
import bow from "../assets/images/weapons/bow.png";
import crossbow from "../assets/images/weapons/crossbow.png";
import dagger from "../assets/images/weapons/dagger.png";
import dart from "../assets/images/weapons/dart.png";
import double_axe from "../assets/images/weapons/double_axe.png";
import fist_weapon from "../assets/images/weapons/fist_weapon.png";
import flail from "../assets/images/weapons/flail.png";
import glaive from "../assets/images/weapons/glaive.png";
import heavy_blade from "../assets/images/weapons/heavy_blade.png";
import katana from "../assets/images/weapons/katana.png";
import mace from "../assets/images/weapons/mace.png";
import net from "../assets/images/weapons/net.png";
import pistol from "../assets/images/weapons/pistol.png";
import rapier from "../assets/images/weapons/rapier.png";
import revolver from "../assets/images/weapons/revolver.png";
import rifle from "../assets/images/weapons/rifle.png";
import shotgun from "../assets/images/weapons/shotgun.png";
import sickle from "../assets/images/weapons/sickle.png";
import sling from "../assets/images/weapons/sling.png";
import smg from "../assets/images/weapons/smg.png";
import spear from "../assets/images/weapons/spear.png";
import staff from "../assets/images/weapons/staff.png";
import sword from "../assets/images/weapons/sword.png";
import trident from "../assets/images/weapons/trident.png";
import wand from "../assets/images/weapons/wand.png";
import warhammer from "../assets/images/weapons/warhammer.png";
import wood_club from "../assets/images/weapons/wood_club.png";
import whip from "../assets/images/weapons/whip.png";

const weapons = [
    {
        // Item Attributes.
        name: "Hand Axe",
        image: axe,
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
        image: axe,
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
        image: axe,
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
        image: double_axe,
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
        image: sickle,
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
        image: dagger,
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
        image: sword,
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
        image: dagger,
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
        image: sword,
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
        image: rapier,
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
        image: rapier,
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
        image: sword,
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
        image: sword,
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
        image: dagger,
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
        image: heavy_blade,
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
        image: heavy_blade,
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
        image: wood_club,
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
        image: wood_club,
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
        image: bo,
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
        image: warhammer,
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
        image: mace,
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
        image: flail,
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
        image: warhammer,
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
        image: mace,
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
        image: warhammer,
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
        image: warhammer,
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
        image: warhammer,
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
        image: spear,
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
        image: spear,
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
        image: spear,
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
        image: spear,
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
        image: trident,
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
        image: glaive,
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
        image: glaive,
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
        image: "../assets/images/weapons/glaive.png",
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
        image: "../assets/images/weapons/dart.png",
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
        image: "../assets/images/weapons/net.png",
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
        image: "../assets/images/weapons/net.png",
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
        image: "../assets/images/weapons/fist_weapon.png",
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
        image: "../assets/images/weapons/fist_weapon.png",
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
        image: "../assets/images/weapons/whip.png",
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
        image: "../assets/images/weapons/warhammer.png",
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
        image: "../assets/images/weapons/sling.png",
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
        image: "../assets/images/weapons/blowgun.png",
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
        image: "../assets/images/weapons/crossbow.png",
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
        image: "../assets/images/weapons/crossbow.png",
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
        image: "../assets/images/weapons/crossbow.png",
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
        image: "../assets/images/weapons/crossbow.png",
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
        image: "../assets/images/weapons/crossbow.png",
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
        image: "../assets/images/weapons/bow.png",
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
        image: "../assets/images/weapons/bow.png",
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
        image: "../assets/images/weapons/bow.png",
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
        image: "../assets/images/weapons/pistol.png",
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
        image: "../assets/images/weapons/revolver.png",
        source: "Homebrew",
        rarity: "Uncommon",
        description: "-",
        cost: "65gp",
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
        image: "../assets/images/weapons/pistol.png",
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
        image: "../assets/images/weapons/shotgun.png",
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
        image: "../assets/images/weapons/shotgun.png",
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
        image: "../assets/images/weapons/shotgun.png",
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
        image: "../assets/images/weapons/smg.png",
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
        image: "../assets/images/weapons/smg.png",
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
        image: "../assets/images/weapons/assault_rifle.png",
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
        image: "../assets/images/weapons/assault_rifle.png",
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
        image: "../assets/images/weapons/assault_rifle.png",
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
        image: "../assets/images/weapons/rifle.png",
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
        image: "../assets/images/weapons/rifle.png",
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
        image: "../assets/images/weapons/rifle.png",
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
    {
        // Item Attributes.
        name: "Low Grade Gun",
        image: "../assets/images/weapons/rifle.png",
        source: "Homebrew",
        rarity: "Varies",
        description: "Uma arma de fogo barata e mal feita. \nA arma custa apenas 70% do preço original, porém possuí +1 de missfire e -1 para rolagens de ataque e dano.",
        cost: "Varies",
        magical: false,
        attunement: false,
        // Weapon Attributes.
        type: "-",
        category: "-",
        slashing: "-",
        piercing: "-",
        bludgeoning: "-",
        critRange: "-",
        critDMG: "-",
        properties: "-"
    },
    {
        // Item Attributes.
        name: "Scrap Gun",
        image: "../assets/images/weapons/rifle.png",
        source: "Homebrew",
        rarity: "Varies",
        description: "Uma arma de fogo feita de lixo e sucata. \nA arma custa apenas 50% do preço original, porém possuí +2 de missfire e -2 para rolagens de ataque e dano.",
        cost: "Varies",
        magical: false,
        attunement: false,
        // Weapon Attributes.
        type: "-",
        category: "-",
        slashing: "-",
        piercing: "-",
        bludgeoning: "-",
        critRange: "-",
        critDMG: "-",
        properties: "-"
    }
];

export default weapons;