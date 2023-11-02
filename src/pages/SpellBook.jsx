import { useEffect, useState } from "react";

import SearchByName from "../features/spellBook/components/search/SearchByName.jsx";
import SearchByType from "../features/spellBook/components/search/SearchByType.jsx";
import SearchByClass from "../features/spellBook/components/search/SearchByClass.jsx";
import SearchBySource from "../features/spellBook/components/search/SearchBySource.jsx";

import TableTabs from "../features/spellBook/components/table/TableTab.jsx";
import SpellTable from "../features/spellBook/components/table/SpellTable.jsx";

import data from "../data/spells_data.js";
import "../features/spellBook/spellBook.css";


const SpellBook = () => {
    const [spells, setSpells] = useState([]);
    const [currentLevel, setCurrentLevel] = useState(1);
    const [searchByName, setSearchByName] = useState("");
    const [searchByType, setSearchByType] = useState("");
    const [searchByClass, setSearchByClass] = useState("");
    const [searchBySource, setSearchBySource] = useState("");
    
    // Quando o componente é carregado useEffect é chamado.
    useEffect(() => {
        const loadSpells = async () => {
            let filteredSpells = data;
    
            if (searchByName) {
                filteredSpells = filteredSpells.filter(spell =>
                    spell.name.toLowerCase().includes(searchByName.toLowerCase())
                );
            }

            if (searchByType) {
                filteredSpells = filteredSpells.filter(spell =>
                    spell.type.toLowerCase().includes(searchByType.toLowerCase())
                );
            }

            if (searchByClass) {
                filteredSpells = filteredSpells.filter(spell =>
                    spell.available.toLowerCase().includes(searchByClass.toLowerCase())
                );
            }

            if (searchBySource) {
                filteredSpells = filteredSpells.filter(spell =>
                    spell.source.toLowerCase().includes(searchBySource.toLowerCase())
                );
            }
    
            setSpells(filteredSpells);
        };
    
        loadSpells();
    }, [searchByName, searchByType, searchByClass, searchBySource]);
    
    return (
        <div className="spell-book-content-wrapper">
            <div className="spell-table-container">
                <SearchByName value={searchByName} onChange={setSearchByName}/>
                <SearchByType value={searchByType} onChange={setSearchByType}/>
                <SearchByClass value={searchByClass} onChange={setSearchByClass}/>
                <SearchBySource value={searchBySource} onChange={setSearchBySource}/>
                <TableTabs setCurrentLevel={setCurrentLevel}></TableTabs>
                <SpellTable 
                    data={spells} 
                    currentLevel={currentLevel}>
                </SpellTable>
            </div>
        </div>
    );
};


export default SpellBook;