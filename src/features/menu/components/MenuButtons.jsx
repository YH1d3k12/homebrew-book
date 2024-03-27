import { Link  } from "react-router-dom";
import "./menuButtons.css";

import species from "../../../assets/images/menu/species.png";
import classes from "../../../assets/images/menu/classes.png";
import spells from "../../../assets/images/menu/spells.png";
import martial_skills from "../../../assets/images/menu/martial_skills.png";
import adventure_gear from "../../../assets/images/menu/adventure_gear.png";

import feats from "../../../assets/images/menu/feats.png";
import rules from "../../../assets/images/menu/rules.png";
import crafting from "../../../assets/images/menu/crafting.png";
import magic_items from "../../../assets/images/menu/magic_items.png";
import materials from "../../../assets/images/menu/materials.png";


const MenuButtons = () => {
    return (
        <div className="menu-buttons-content-wrapper">
            <div className="menu-buttons-row">
                <div className="button-card">
                    <Link to="/species">
                        <img className="button-icon" src={species} alt="Species"/>
                        <h2>Species</h2>
                    </Link>
                </div>
                <div className="button-card">
                    <Link to="">
                        <img className="button-icon" src={classes} alt="Classes"/>
                        <h2>Classes</h2>
                    </Link>
                </div>
                <div className="button-card">
                    <Link to="/spellbook">
                        <img className="button-icon" src={spells} alt="Spell Book"/>
                        <h2>Spells</h2>
                    </Link>
                </div>
                <div className="button-card">
                    <Link to="/techniquebook">
                        <img className="button-icon" src={martial_skills} alt="Martial Skills"/>
                        <h2>Skills</h2>
                    </Link>
                </div>
                <div className="button-card">
                    <Link to="/adventuregear">
                        <img className="button-icon" src={adventure_gear} alt="Adventure Gear"/>
                        <h2>Items</h2>
                    </Link>
                </div>
            </div>
            <div className="menu-buttons-row">
                <div className="button-card">
                    <Link to="/feats">
                        <img className="button-icon" src={feats} alt="Feats"/>
                        <h2>Feats</h2>
                    </Link>
                </div>
                <div className="button-card">
                    <Link to="/rules">
                        <img className="button-icon" src={rules} alt="Rules"/>
                        <h2>Rules</h2>
                    </Link>
                </div>
                <div className="button-card">
                    <Link to="/">
                        <img className="button-icon" src={crafting} alt="Crafting"/>
                        <h2>Crafting</h2>
                    </Link>
                </div>
                <div className="button-card">
                    <Link to="/">
                        <img className="button-icon" src={materials} alt="Materials"/>
                        <h2>Materials</h2>
                    </Link>
                </div>
                <div className="button-card">
                    <Link to="/">
                        <img className="button-icon" src={magic_items} alt="Magic Items"/>
                        <h2>Worlds</h2>
                    </Link>
                </div>
            </div>
        </div>
    );
};


export default MenuButtons;