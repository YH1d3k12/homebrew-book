import React from "react";
import SpellCard from "../components/spell_card";
import "./spell_page.css";

export default function SpellPageScreen() 
{
    return (
        <div className="spell-page-content-wrapper">
            <SpellCard></SpellCard>
        </div>
    );
}
