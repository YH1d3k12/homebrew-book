import ArmorsByCategoryTable from "./ArmorsByCategoryTable.jsx";

import data from "../../../../data/ArmorsData.js";
import "../../../../styles/global.css";
import "../../../../styles/table.css";


const ArmorsSection = () => {
    return (
        <>
            <ArmorsByCategoryTable data={data} category="Light Armor" />
            <ArmorsByCategoryTable data={data} category="Medium Armor" />
            <ArmorsByCategoryTable data={data} category="Heavy Armor" />

        </>
    );
};


export default ArmorsSection;