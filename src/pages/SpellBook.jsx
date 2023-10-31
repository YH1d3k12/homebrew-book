import { useEffect,  useState } from 'react';

import TableTabs from '../components/tab/TableTab.jsx';
import SpellTable from "../features/spellBook/components/SpellTable.jsx";

import data from "../data/spells_data.js";
import "../features/spellBook/spellBook.css";


const SpellBook = () => {
    const [spells, setSpells] = useState([]);
    const [currentLevel, setCurrentLevel] = useState(1);
    
    // Quando o componente é carregado useEffect é chamado.
    useEffect(() => {
        const loadSpells = async () => {
            setSpells(data)
        };

        loadSpells();
    }, []);

    return (
        <div className="spell-book-content-wrapper">
            <div className="spell-table-container">
                <TableTabs setCurrentLevel={setCurrentLevel}></TableTabs>
                <SpellTable data={spells} currentLevel={currentLevel}></SpellTable>
            </div>
        </div>
    );
};


export default SpellBook;