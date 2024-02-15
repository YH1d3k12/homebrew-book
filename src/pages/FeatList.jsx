import { useState } from "react";

import SearchByName from "../components/search/SearchByName.jsx";
import SelectBySource from "../components/search/SelectBySource.jsx";
import SelectFeatByType from "../components/search/SelectByFeatType.jsx";
import SelectFeatByCategory from "../components/search/SelectByFeatCategory.jsx";

import FeatTable from "../features/featList/components/table/FeatTable.jsx";
import UseFilteredFeats from "../features/featList/hooks/UseFilteredFeats.js";

import "../features/featList/featList.css";


const FeatList = () => {
    const [searchByName, setSearchByName] = useState("");
    const [selectBySource, setSelectBySource] = useState("");
    const [selectByFeatType, setSelectByFeatType] = useState("");
    const [selectByFeatCategory, setSelectByFeatCategory] = useState("");
    const feats = UseFilteredFeats(searchByName, selectBySource, selectByFeatType, selectByFeatCategory);

    return (
        <div className="feat-list-content-wrapper">
            <div className="feat-table-container scroll-y">
                <SearchByName value={searchByName} onChange={setSearchByName}/>
                <SelectBySource value={selectBySource} onChange={setSelectBySource}/>
                <SelectFeatByType value={selectByFeatType} onChange={setSelectByFeatType}/>
                <SelectFeatByCategory value={selectByFeatCategory} onChange={setSelectByFeatCategory}/>
                 <FeatTable 
                    data={feats}>
                </FeatTable>
            </div>
        </div>
    );
};


export default FeatList;