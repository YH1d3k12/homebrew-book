import React from 'react';
import { useNavigate } from "react-router-dom";
import "./menu_buttons.css";

import species from "../assets/images/species.png";
import classes from "../assets/images/classes.png";
import spells from "../assets/images/spells.png";
import martial_skills from "../assets/images/martial_skills.png";
import adventure_gear from "../assets/images/adventure_gear.png";

import feats from "../assets/images/feats.png";
import rules from "../assets/images/rules.png";
import crafting from "../assets/images/crafting.png";
import magic_items from "../assets/images/magic_items.png";
import materials from "../assets/images/materials.png";


function MenuButtons()
{
    const navigate = useNavigate();

    return (
        <div className="menu-buttons-content-wrapper">
            <div className="menu-buttons-row">
                <div className="button-card">
                    <a onClick={() => navigate("/")}>
                        <img className="button-icon" src={species} alt="Species"/>
                        <h2>Species</h2>
                    </a>
                </div>
                <div className="button-card">
                    <a onClick={() => navigate("/")}>
                        <img className="button-icon" src={classes} alt="Classes"/>
                        <h2>Classes</h2>
                    </a>
                </div>
                <div className="button-card">
                    <a onClick={() => navigate("/spellbook")}>
                        <img className="button-icon" src={spells} alt="Spell Book"/>
                        <h2>Spells</h2>
                    </a>
                </div>
                <div className="button-card">
                    <a onClick={() => navigate("/")}>
                        <img className="button-icon" src={martial_skills} alt="Martial Skills"/>
                        <h2>Martial Skills</h2>
                    </a>
                </div>
                <div className="button-card">
                    <a onClick={() => navigate("/")}>
                        <img className="button-icon" src={adventure_gear} alt="Adventure Gear"/>
                        <h2>Adventure Gear</h2>
                    </a>
                </div>
            </div>
            <div className="menu-buttons-row">
                <div className="button-card">
                    <a onClick={() => navigate("/")}>
                        <img className="button-icon" src={feats} alt="Feats"/>
                        <h2>Feats</h2>
                    </a>
                </div>
                <div className="button-card">
                    <a onClick={() => navigate("/")}>
                        <img className="button-icon" src={rules} alt="Rules"/>
                        <h2>Rules</h2>
                    </a>
                </div>
                <div className="button-card">
                    <a onClick={() => navigate("/")}>
                        <img className="button-icon" src={crafting} alt="Crafting"/>
                        <h2>Crafting</h2>
                    </a>
                </div>
                <div className="button-card">
                    <a onClick={() => navigate("/")}>
                        <img className="button-icon" src={materials} alt="Materials"/>
                        <h2>Materials</h2>
                    </a>
                </div>
                <div className="button-card">
                    <a onClick={() => navigate("/")}>
                        <img className="button-icon" src={magic_items} alt="Magic Items"/>
                        <h2>Magic Items</h2>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default MenuButtons;