import WeaponByCategoryTable from "./WeaponByCategoryTable.jsx";

import data from "../../../../data/MeleeWeaponsData.js";
import "./meleeWeaponsTable.css";
import "../../../../styles/table.css";


const MeleeWeaponsTable = () => {
    return (
        <>
            <WeaponByCategoryTable data={data} category="Axes" />
            <WeaponByCategoryTable data={data} category="Blades" />
            <WeaponByCategoryTable data={data} category="Bludgeons" />
            <WeaponByCategoryTable data={data} category="Polearms" />
            <WeaponByCategoryTable data={data} category="Others" />
        </>
    );
};


export default MeleeWeaponsTable;