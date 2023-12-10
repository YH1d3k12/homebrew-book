import FirearmsByCategoryTable from "./FirearmsByCategoryTable.jsx";

import data from "../../../../data/FirearmsData.js";
import "../../../../styles/global.css";
import "../../../../styles/table.css";


const FirearmsSection = () => {
    return (
        <>
            <FirearmsByCategoryTable data={data} category="Pistols" />
            <FirearmsByCategoryTable data={data} category="Shotguns" />
            <FirearmsByCategoryTable data={data} category="SMGs" />
            <FirearmsByCategoryTable data={data} category="Assault Rifles" />
            <FirearmsByCategoryTable data={data} category="Rifles" />
        </>
    );
};


export default FirearmsSection;