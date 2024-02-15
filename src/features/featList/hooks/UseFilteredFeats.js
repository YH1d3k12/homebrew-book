import { useEffect, useState } from "react";

import data from "../../../data/FeatsData.js";

const UseFilteredFeats = (
    searchByName,
    searchBySource,
    searchByType,
    searchByCategory
) => {
    const [feats, setFeats] = useState([]);

    useEffect(() => {
        const loadSpells = async () => {
            let filteredFeats = data;

            if (searchByName) {
                filteredFeats = filteredFeats.filter(spell =>
                    spell.name.toLowerCase().includes(searchByName.toLowerCase())
                );
            }

            if (searchBySource) {
                filteredFeats = filteredFeats.filter(spell =>
                    spell.source.toLowerCase().includes(searchBySource.toLowerCase())
                );
            }

            if (searchByType) {
                filteredFeats = filteredFeats.filter(spell =>
                    spell.type.toLowerCase().includes(searchByType.toLowerCase())
                );
            }

            if (searchByCategory) {
                filteredFeats = filteredFeats.filter(spell =>
                    spell.type.toLowerCase().includes(searchByCategory.toLowerCase())
                );
            }

            setFeats(filteredFeats);
        };

        loadSpells();
    }, [searchByName, searchBySource, searchByType, searchByCategory]);

    return feats;
};


export default UseFilteredFeats;