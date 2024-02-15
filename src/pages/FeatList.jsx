import { useState } from "react";

import SearchByName from "../components/search/SearchByName.jsx";
import SelectBySource from "../components/search/SelectBySource.jsx";

import FeatTable from "../features/featList/components/table/FeatTable.jsx";
import UseFilteredFeats from "../features/featList/hooks/UseFilteredFeats.js";

import "../features/spellBook/spellBook.css";


const FeatList = () => {
    const [searchByName, setSearchByName] = useState("");
    const [selectBySource, setSelectBySource] = useState("");
    const [selectByFeatType, setSelectByFeatType] = useState(2);
    const [selectByFeatCategory, setSelectByFeatCategory] = useState("");
    const feats = UseFilteredFeats(searchByName, selectBySource, selectByFeatType, selectByFeatCategory);

    
    return (
        <div className="spell-book-content-wrapper">
            <div className="spell-table-container scroll-y">
                <SearchByName value={searchByName} onChange={setSearchByName}/>
                <SelectBySource value={selectBySource} onChange={setSelectBySource}/>
                 <FeatTable 
                    data={feats}>
                </FeatTable>
            </div>
        </div>
    );
};


export default FeatList;