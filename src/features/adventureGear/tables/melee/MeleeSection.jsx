import MeleeByCategoryTable from "./MeleeByCategoryTable.jsx";

import data from "../../../../data/MeleeWeaponsData.js";
import "../../../../styles/global.css";
import "../../../../styles/table.css";


const MeleeSection = () => {
    return (
        <>
            <MeleeByCategoryTable data={data} category="Axes" />
            <MeleeByCategoryTable data={data} category="Blades" />
            <MeleeByCategoryTable data={data} category="Bludgeons" />
            <MeleeByCategoryTable data={data} category="Polearms" />
            <MeleeByCategoryTable data={data} category="Others" />
        </>
    );
};


export default MeleeSection;