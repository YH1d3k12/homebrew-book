import { useEffect, useState } from "react";

import data from "../../../data/MeleeWeaponsData.js";

const UseFilteredWeapons = (
    filterByName,
    filterByRarity,
    filterByType,
    filterBySource,
    isMagical,
    isAttunement
) => {
    const [meleeWeapons, setMeleeWeapons] = useState([]);

    useEffect(() => {
        const loadMelee = async () => {
            let filteredMelee = data;

            if (filterByName) {
                filteredMelee = filteredMelee.filter(item =>
                    item.name.toLowerCase().includes(filterByName.toLowerCase())
                );
            }

            if (filterByRarity) {
                filteredMelee = filteredMelee.filter(item =>
                    item.rarity.toLowerCase().includes(filterByRarity.toLowerCase())
                );
            }

            if (filterByType) {
                filteredMelee = filteredMelee.filter(item =>
                    item.type.toLowerCase().includes(filterByType.toLowerCase())
                );
            }

            if (filterBySource) {
                filteredMelee = filteredMelee.filter(item =>
                    item.source.toLowerCase().includes(filterBySource.toLowerCase())
                );
            }

            if (isMagical) {
                filteredMelee = filteredMelee.filter(item =>
                    item.magical === true
                );
            }

            if (isAttunement) {
                filteredMelee = filteredMelee.filter(item =>
                    item.attunement === true
                );
            }

            setMeleeWeapons(filteredMelee);
        };

        loadMelee();
    }, [filterByName, filterByRarity, filterByType, filterBySource, isMagical, isAttunement]);

    return meleeWeapons;
};


export default UseFilteredWeapons;