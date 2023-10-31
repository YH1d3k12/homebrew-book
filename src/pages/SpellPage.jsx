import React from "react";
import SpellCard from "../components/spell_card";
import "./spellPage.css";

export default function SpellPageScreen() 
{
    return (
        <div className="spell-page-content-wrapper">
            <SpellCard></SpellCard>
        </div>
    );
}
