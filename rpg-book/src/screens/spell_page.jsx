import React from "react";
import { useNavigate } from "react-router-dom";
import "./spell_page.css";
import SpellCard from "../components/spell_card";

export default function SpellPage() {
    const navigate = useNavigate();

    return (
        <div className="content-wrapper">
            <SpellCard></SpellCard>
            <button onClick={() => navigate("/spellbook")}>Go Back</button>
        </div>
    );
}
