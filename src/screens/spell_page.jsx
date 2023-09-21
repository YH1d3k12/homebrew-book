import React from "react";
import { useNavigate } from "react-router-dom";
import SpellCard from "../components/spell_card";
import "../styles//spell_page.css";

export default function SpellPageScreen() 
{
    const navigate = useNavigate();

    return (
        <div className="spell-page-content-wrapper">
            <SpellCard></SpellCard>
            <button onClick={() => navigate("/spellbook")}>Go Back</button>
        </div>
    );
}
