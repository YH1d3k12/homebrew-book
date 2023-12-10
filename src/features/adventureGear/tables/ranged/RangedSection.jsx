import RangedByCategoryTable from "./RangedByCategoryTable.jsx";

import data from "../../../../data/RangedWeaponsData.js";
import "../../../../styles/global.css";
import "../../../../styles/table.css";


const RangedSection = () => {
    return (
        <>
            <RangedByCategoryTable data={data} category="Crossbows" />
            <RangedByCategoryTable data={data} category="Bows" />
            <RangedByCategoryTable data={data} category="Others" />
        </>
    );
};


export default RangedSection;