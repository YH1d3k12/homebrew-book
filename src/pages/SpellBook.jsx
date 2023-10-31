import React from "react";
import SpellTable from "../features/spellBook/components/SpellTable.jsx";
import "../features/spellBook/spellBook.css";


export default function SpellBookScreen() 
{
    return (
        <div className="spell-book-content-wrapper">
            <SpellTable></SpellTable>
        </div>
    );
};