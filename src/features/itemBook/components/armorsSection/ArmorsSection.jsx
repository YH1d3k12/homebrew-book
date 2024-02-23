import { useState } from "react";

import SearchByName from "../../../../components/search/SearchByName.jsx";
import SelectByRarity from "../../../../components/search/SelectByRarity.jsx";
import SelectByArmorType from "../../../../components/search/SelectByArmorType.jsx";
import SelectBySource from "../../../../components/search/SelectBySource.jsx";
import CheckBox from "../../../../components/search/CheckBox.jsx";


import ArmorsTable from "./ArmorsTable.jsx";
import UseFilteredWeapons from "../../hooks/UseFilteredWeapons.js";

import "../../../../styles/table.css";
import "../../../../styles/table.css";

const WeaponsSection = () => {
    const [searchByName, setSearchByName] = useState("");
    const [selectByRarity, setSelectByRarity] = useState("");
    const [selectByType, setSelectByType] = useState("");
    const [selectBySource, setSelectBySource] = useState("");
    const [isMagical, setIsMagical] = useState(false);
    const [isAttunement, setIsAttunement] = useState(false);

    const items = UseFilteredWeapons(searchByName, selectByRarity, selectByType, selectBySource, isMagical, isAttunement)

    return (
        <>
            <SearchByName value={searchByName} onChange={setSearchByName}/>
            <SelectBySource value={selectBySource} onChange={setSelectBySource}/>
            <SelectByArmorType value={selectByType} onChange={setSelectByType}/>
            <SelectByRarity value={selectByRarity} onChange={setSelectByRarity}/>
            <div className="weapons-table-checkboxes">
                <CheckBox label="Magical" value={isMagical} onChange={setIsMagical}/>
                <CheckBox label="Attunement" value={isAttunement} onChange={setIsAttunement}/>
            </div>
            <ArmorsTable data={items}></ArmorsTable>
        </>
    );
};


export default WeaponsSection;