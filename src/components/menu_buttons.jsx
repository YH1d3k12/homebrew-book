import React from 'react';
import { useNavigate } from "react-router-dom";
import "../styles/menu_buttons.css";
import species from "../assets/images/species.png";

function MenuButtons()
{
    const navigate = useNavigate();

    return (
        <div className="menu-buttons-content-wrapper">
            <div className="row">
                <div className="card">
                    <a onClick={() => navigate("/spellbook")}>
                        <img src={species} alt="Spell Book"/>
                        <h2>Species</h2>
                    </a>
                </div>
                <div className="card">
                    <a onClick={() => navigate("/spellbook")}>
                        <img src={species} alt="Spell Book"/>
                        <h2>Species</h2>
                    </a>
                </div>
                <div className="card">
                    <a onClick={() => navigate("/spellbook")}>
                        <img src={species} alt="Spell Book"/>
                        <h2>Species</h2>
                    </a>
                </div>
                <div className="card">
                    <a onClick={() => navigate("/spellbook")}>
                        <img src={species} alt="Spell Book"/>
                        <h2>Species</h2>
                    </a>
                </div>
            </div>
                        <div className="row">
                <div className="card">
                    <a onClick={() => navigate("/spellbook")}>
                        <img src={species} alt="Spell Book"/>
                        <h2>Species</h2>
                    </a>
                </div>
                <div className="card">
                    <a onClick={() => navigate("/spellbook")}>
                        <img src={species} alt="Spell Book"/>
                        <h2>Species</h2>
                    </a>
                </div>
                <div className="card">
                    <a onClick={() => navigate("/spellbook")}>
                        <img src={species} alt="Spell Book"/>
                        <h2>Species</h2>
                    </a>
                </div>
                <div className="card">
                    <a onClick={() => navigate("/spellbook")}>
                        <img src={species} alt="Spell Book"/>
                        <h2>Species</h2>
                    </a>
                </div>
            </div>
            <div className="row">
            </div>
        </div>
    );
}

export default MenuButtons;