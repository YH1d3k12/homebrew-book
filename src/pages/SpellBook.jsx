import React from "react";
import { useNavigate } from "react-router-dom";
import SpellTable from "../components/spell_table";
import "./spellBook.css"


export default function SpellBookScreen() 
{
    return (
        <div className="spell-book-content-wrapper">
            <SpellTable></SpellTable>
        </div>
    );
};