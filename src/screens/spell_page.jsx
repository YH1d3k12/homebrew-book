import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles//spell_page.css";
import SpellCard from "../components/spell_card";

export default function SpellPage() {
    const navigate = useNavigate();

    return (
        <div className="spell-page-content-wrapper">
            <SpellCard></SpellCard>
            <button onClick={() => navigate("/spellbook")}>Go Back</button>
        </div>
    );
}
