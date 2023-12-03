import { useEffect, useState } from "react";

import data from "../../../data/techniques_data.js";

const UseFilteredTechniques = (
    searchByName,
    searchByStat,
    searchByClass,
    searchBySource
) => {
    const [techniques, setTechniques] = useState([]);

    // Quando o componente é carregado useEffect é chamado.
    useEffect(() => {
        const loadTechniques = async () => {
            let filteredTechniques = data;

            if (searchByName) {
                filteredTechniques = filteredTechniques.filter(technique =>
                    technique.name.toLowerCase().includes(searchByName.toLowerCase())
                );
            }

            if (searchByStat) {
                filteredTechniques = filteredTechniques.filter(technique =>
                    technique.stat.toLowerCase().includes(searchByStat.toLowerCase())
                );
            }

            if (searchByClass) {
                filteredTechniques = filteredTechniques.filter(technique =>
                    technique.available.toLowerCase().includes(searchByClass.toLowerCase())
                );
            }

            if (searchBySource) {
                filteredTechniques = filteredTechniques.filter(technique =>
                    technique.source.toLowerCase().includes(searchBySource.toLowerCase())
                );
            }

            setTechniques(filteredTechniques);
        };

        loadTechniques();
    }, [searchByName, searchByStat, searchByClass, searchBySource]);

    return techniques;
};


export default UseFilteredTechniques;