import { useState } from "react";

import SearchByName from "../../../../components/search/SearchByName.jsx";
import SelectByRarity from "../../../../components/search/SelectByRarity.jsx";
import SelectByWeaponType from "../../../../components/search/SelectByWeaponType.jsx";
import SelectBySource from "../../../../components/search/SelectBySource.jsx";
import CheckBox from "../../../../components/search/CheckBox.jsx";


import MeleeWeaponsTable from "./MeleeWeaponsTable.jsx";
import UseFilteredMelee from "../../hooks/UseFilteredMelee.js";

import "../../../../styles/table.css";
import "./meleeSection.css";

const MeleeSection = () => {
    const [searchByName, setSearchByName] = useState("");
    const [selectByRarity, setSelectByRarity] = useState("");
    const [selectByType, setSelectByType] = useState("");
    const [selectBySource, setSelectBySource] = useState("");
    const [isMagical, setIsMagical] = useState(false);
    const [isAttunement, setIsAttunement] = useState(false);

    const items = UseFilteredMelee(searchByName, selectByRarity, selectByType, selectBySource, isMagical, isAttunement)

    return (
        <>
            <SearchByName value={searchByName} onChange={setSearchByName}/>
            <SelectBySource value={selectBySource} onChange={setSelectBySource}/>
            <SelectByWeaponType value={selectByType} onChange={setSelectByType}/>
            <SelectByRarity value={selectByRarity} onChange={setSelectByRarity}/>
            <div className="melee-weapons-table-checkboxes">
                <CheckBox label="Magical" value={isMagical} onChange={setIsMagical}/>
                <CheckBox label="Attunement" value={isAttunement} onChange={setIsAttunement}/>
            </div>
            <MeleeWeaponsTable data={items}></MeleeWeaponsTable>
        </>
    );
};


export default MeleeSection;