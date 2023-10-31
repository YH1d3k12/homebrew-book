import React from "react";
import SpellCard from "../features/spellPage/components/SpellCard.jsx";
import "../features/spellPage/spellPage.css";

export default function SpellPageScreen() 
{
    return (
        <div className="spell-page-content-wrapper">
            <SpellCard></SpellCard>
        </div>
    );
}