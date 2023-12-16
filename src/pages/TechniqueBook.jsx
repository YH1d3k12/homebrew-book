import { useState } from "react";

import SearchByName from "../components/search/SearchByName.jsx";
import SelectByStat from "../components/search/SelectByStat.jsx";
import SelectByMartialClass from "../components/search/SelectByMartialClass.jsx";
import SelectByMartialDicipline from "../components/search/SelectByMartialDicipline.jsx";

import TableTabs from "../features/techniqueBook/components/table/TableTab.jsx";
import TechniqueTable from "../features/techniqueBook/components/table/TechniqueTable.jsx";
import UseFilteredTechniques from "../features/techniqueBook/hooks/UseFilteredTechniques.js";

import "../features/techniqueBook/techniqueBook.css";


const TechniqueBook = () => {
    const [currentLevel, setCurrentLevel] = useState(1);
    const [searchByName, setSearchByName] = useState("");
    const [selectByStat, setSelectByStat] = useState("");
    const [selectByMartialClass, setSelectByMartialClass] = useState("");
    const [selectByMartialDicipline, setSelectByMartialDicipline] = useState("");
    const techniques = UseFilteredTechniques(searchByName, selectByStat, selectByMartialClass, selectByMartialDicipline);
    
    return (
        <div className="martial-book-content-wrapper">
            <div className="techniques-table-container">
                <SearchByName value={searchByName} onChange={setSearchByName}/>
                <SelectByStat value={selectByStat} onChange={setSelectByStat}/>
                <SelectByMartialDicipline value={selectByMartialDicipline} onChange={setSelectByMartialDicipline}/>
                <SelectByMartialClass value={selectByMartialClass} onChange={setSelectByMartialClass}/>
                <TableTabs setCurrentLevel={setCurrentLevel}></TableTabs>
                <TechniqueTable 
                    data={techniques} 
                    currentLevel={currentLevel}>
                </TechniqueTable>
            </div>
        </div>
    );
};


export default TechniqueBook;