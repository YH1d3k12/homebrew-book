import React from 'react';
import { useNavigate } from "react-router-dom";
import "../styles/navbar.css"

function NavBar()
{
    const navigate = useNavigate();
    
    return (
        <header className="navigation-container">
            <a className="navigation-logo" onClick={() => navigate("/")}>
                <h1>D&D5e Homebrew Book</h1>
                <p>by Djalma Hideki Yamamoto</p>
            </a>
        </header>
    );
}

export default NavBar;