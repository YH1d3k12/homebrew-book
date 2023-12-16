import { useState } from "react";

import SearchByName from "../components/search/SearchByName.jsx";
import SelectByMagicSchool from "../components/search/SelectByMagicSchool.jsx";
import SelectBySpellcastingClass from "../components/search/SelectBySpellcastingClass.jsx";
import SelectBySource from "../components/search/SelectBySource.jsx";
import CheckBox from "../components/search/CheckBox.jsx";

import SpellTableTabs from "../features/spellBook/components/table/SpellTableTab.jsx";
import SpellTable from "../features/spellBook/components/table/SpellTable.jsx";
import UseFilteredSpells from "../features/spellBook/hooks/UseFilteredSpells.js";

import "../features/spellBook/spellBook.css";


const SpellBook = () => {
    const [currentLevel, setCurrentLevel] = useState(0);
    const [searchByName, setSearchByName] = useState("");
    const [selectByMagicSchool, setSelectByMagicSchool] = useState("");
    const [selectBySpellcastingClass, setSelectBySpellcastingClass] = useState("");
    const [selectBySource, setSelectBySource] = useState("");
    const [hasV, setHasV] = useState(false);
    const [hasS, setHasS] = useState(false);
    const [hasM, setHasM] = useState(false);
    const [hasConcentration, setHasConcentration] = useState(false);
    const [hasRitual, setHasRitual] = useState(false);
    const spells = UseFilteredSpells(searchByName, selectByMagicSchool, selectBySpellcastingClass, selectBySource, hasV, hasS, hasM, hasConcentration, hasRitual);

    
    return (
        <div className="spell-book-content-wrapper">
            <div className="spell-table-container">
                <SearchByName value={searchByName} onChange={setSearchByName}/>
                <SelectByMagicSchool value={selectByMagicSchool} onChange={setSelectByMagicSchool}/>
                <SelectBySpellcastingClass value={selectBySpellcastingClass} onChange={setSelectBySpellcastingClass}/>
                <SelectBySource value={selectBySource} onChange={setSelectBySource}/>
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