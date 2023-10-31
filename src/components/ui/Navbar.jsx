import React from 'react';
import { useNavigate } from "react-router-dom";
import "./navbar.css"
import dragon from "../../assets/images/dragon.png";

function NavBar()
{
    const navigate = useNavigate();
    
    return (
        <header className="navigation-container">
            <a className="navigation-logo" onClick={() => navigate("/")}>
                <img src={dragon} alt="Dragon" />
                <div>
                    <h1>D&D5e Homebrew Book</h1>
                    <p>by Djalma Hideki Yamamoto</p>
                </div>
            </a>
        </header>
    );
}

export default NavBar;