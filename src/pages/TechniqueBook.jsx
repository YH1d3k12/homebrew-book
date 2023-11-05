import { useEffect, useState } from "react";

import SearchByName from "../components/search/SearchByName.jsx";
import SearchByStat from "../features/techniqueBook/components/search/SearchByStat.jsx";
import SearchByClass from "../features/techniqueBook/components/search/SearchByClass.jsx";
import SearchBySource from "../features/techniqueBook/components/search/SearchBySource.jsx";

import TableTabs from "../features/techniqueBook/components/table/TableTab.jsx";
import TechniqueTable from "../features/techniqueBook/components/table/TechniqueTable.jsx";

import data from "../data/techniques_data.js";
import "../features/techniqueBook/techniqueBook.css";


const TechniqueBook = () => {
    const [techniques, setTechniques] = useState([]);
    const [currentLevel, setCurrentLevel] = useState(1);
    const [searchByName, setSearchByName] = useState("");
    const [searchByStat, setSearchByStat] = useState("");
    const [searchByClass, setSearchByClass] = useState("");
    const [searchBySource, setSearchBySource] = useState("");
    
    // Quando o componente é carregado useEffect é chamado.
    useEffect(() => {
        const loadTechniques = async () => {
            let filteredTechniques = data;
    
            if (searchByName) {
                filteredTechniques = filteredTechniques.filter(technique =>
                    technique.name.toLowerCase().includes(searchByName.toLowerCase())
                );
            }

            if (searchByStat) {
                filteredTechniques = filteredTechniques.filter(technique =>
                    technique.stat.toLowerCase().includes(searchByStat.toLowerCase())
                );
            }

            if (searchByClass) {
                filteredTechniques = filteredTechniques.filter(technique =>
                    technique.available.toLowerCase().includes(searchByClass.toLowerCase())
                );
            }

            if (searchBySource) {
                filteredTechniques = filteredTechniques.filter(technique =>
                    technique.source.toLowerCase().includes(searchBySource.toLowerCase())
                );
            }
    
            setTechniques(filteredTechniques);
        };
    
        loadTechniques();
    }, [searchByName, searchByStat, searchByClass, searchBySource]);
    
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