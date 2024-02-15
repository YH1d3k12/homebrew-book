import { useEffect, useState } from "react";

import data from "../../../data/FeatsData.js";

const UseFilteredFeats = (
    searchByName,
    searchBySource,
    searchByFeatType,
    searchByFeatCategory
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

            if (searchByFeatType) {
                filteredFeats = filteredFeats.filter(spell =>
                    spell.type.toLowerCase().includes(searchByFeatType.toLowerCase())
                );
            }

            if (searchByFeatCategory) {
                filteredFeats = filteredFeats.filter(spell =>
                    spell.type.toLowerCase().includes(searchByFeatCategory.toLowerCase())
                );
            }

            setFeats(filteredFeats);
        };

        loadSpells();
    }, [searchByName, searchBySource, searchByFeatType, searchByFeatCategory]);

    return feats;
};


export default UseFilteredFeats;