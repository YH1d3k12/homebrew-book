import { useState } from "react";

import SearchByName from "../components/search/SearchByName.jsx";
import SearchByType from "../features/spellBook/components/search/SearchByType.jsx";
import SearchByClass from "../features/spellBook/components/search/SearchByClass.jsx";
import SearchBySource from "../features/spellBook/components/search/SearchBySource.jsx";
import CheckBox from "../components/search/CheckBox.jsx";

import SpellTableTabs from "../features/spellBook/components/table/SpellTableTab.jsx";
import SpellTable from "../features/spellBook/components/table/SpellTable.jsx";
import UseFilteredSpells from "../features/spellBook/hooks/UseFilteredSpells.js";

import "../features/spellBook/spellBook.css";


const SpellBook = () => {
    const [currentLevel, setCurrentLevel] = useState(0);
    const [searchByName, setSearchByName] = useState("");
    const [searchByType, setSearchByType] = useState("");
    const [searchByClass, setSearchByClass] = useState("");
    const [searchBySource, setSearchBySource] = useState("");
    const [hasV, setHasV] = useState(false);
    const [hasS, setHasS] = useState(false);
    const [hasM, setHasM] = useState(false);
    const [hasConcentration, setHasConcentration] = useState(false);
    const [hasRitual, setHasRitual] = useState(false);
    const spells = UseFilteredSpells(searchByName, searchByType, searchByClass, searchBySource, hasV, hasS, hasM, hasConcentration, hasRitual);

    
    return (
        <div className="spell-book-content-wrapper">
            <div className="spell-table-container">
                <SearchByName value={searchByName} onChange={setSearchByName}/>
                <SearchByType value={searchByType} onChange={setSearchByType}/>
                <SearchByClass value={searchByClass} onChange={setSearchByClass}/>
                <SearchBySource value={searchBySource} onChange={setSearchBySource}/>
                <div className="spell-table-checkboxes">
                    <CheckBox label="V" value={hasV} onChange={setHasV}/>
                    <CheckBox label="S" value={hasS} onChange={setHasS}/>
                    <CheckBox label="M" value={hasM} onChange={setHasM}/>
                    <CheckBox label="Concentration" value={hasConcentration} onChange={setHasConcentration}/>
                    <CheckBox label="Ritual" value={hasRitual} onChange={setHasRitual}/>
                </div>
                <SpellTableTabs setCurrentLevel={setCurrentLevel}></SpellTableTabs>
                <SpellTable 
                    data={spells} 
                    currentLevel={currentLevel}>
                </SpellTable>
            </div>
        </div>
    );
};


export default SpellBook;