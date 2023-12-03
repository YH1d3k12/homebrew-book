import { useState } from "react";

import SearchByName from "../components/search/SearchByName.jsx";
import SearchByStat from "../features/techniqueBook/components/search/SearchByStat.jsx";
import SearchByClass from "../features/techniqueBook/components/search/SearchByClass.jsx";
import SearchBySource from "../features/techniqueBook/components/search/SearchBySource.jsx";

import TableTabs from "../features/techniqueBook/components/table/TableTab.jsx";
import TechniqueTable from "../features/techniqueBook/components/table/TechniqueTable.jsx";
import UseFilteredTechniques from "../features/techniqueBook/hooks/UseFilteredTechniques.js";

import "../features/techniqueBook/techniqueBook.css";


const TechniqueBook = () => {
    const [currentLevel, setCurrentLevel] = useState(1);
    const [searchByName, setSearchByName] = useState("");
    const [searchByStat, setSearchByStat] = useState("");
    const [searchByClass, setSearchByClass] = useState("");
    const [searchBySource, setSearchBySource] = useState("");
    const techniques = UseFilteredTechniques(searchByName, searchByStat, searchByClass, searchBySource);
    
    return (
        <div className="martial-book-content-wrapper">
            <div className="techniques-table-container">
                <SearchByName value={searchByName} onChange={setSearchByName}/>
                <SearchByStat value={searchByStat} onChange={setSearchByStat}/>
                <SearchBySource value={searchBySource} onChange={setSearchBySource}/>
                <SearchByClass value={searchByClass} onChange={setSearchByClass}/>
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