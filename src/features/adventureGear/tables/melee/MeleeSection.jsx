import MeleeWeaponsTable from "./MeleeWeaponsTable.jsx";

import data from "../../../../data/MeleeWeaponsData.js";
import "../../../../styles/global.css";
import "../../../../styles/table.css";


const MeleeSection = () => {
    return (
        <>
            <MeleeWeaponsTable data={data}></MeleeWeaponsTable>
        </>
    );
};


export default MeleeSection;