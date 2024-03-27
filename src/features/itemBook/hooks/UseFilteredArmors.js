import { useEffect, useState } from "react";

import data from "../../../data/Armors.js";

const UseFilteredArmors = (
    filterByName,
    filterByRarity,
    filterByType,
    filterBySource,
    isMagical,
    isAttunement
) => {
    const [armors, setArmors] = useState([]);

    useEffect(() => {
        const loadMelee = async () => {
            let filteredArmors = data;

            if (filterByName) {
                filteredArmors = filteredArmors.filter(item =>
                    item.name.toLowerCase().includes(filterByName.toLowerCase())
                );
            }

            if (filterByRarity) {
                filteredArmors = filteredArmors.filter(item =>
                    item.rarity.toLowerCase().includes(filterByRarity.toLowerCase())
                );
            }

            if (filterByType) {
                filteredArmors = filteredArmors.filter(item =>
                    item.type.toLowerCase().includes(filterByType.toLowerCase())
                );
            }

            if (filterBySource) {
                filteredArmors = filteredArmors.filter(item =>
                    item.source.toLowerCase().includes(filterBySource.toLowerCase())
                );
            }

            if (isMagical) {
                filteredArmors = filteredArmors.filter(item =>
                    item.magical === true
                );
            }

            if (isAttunement) {
                filteredArmors = filteredArmors.filter(item =>
                    item.attunement === true
                );
            }

            setArmors(filteredArmors);
        };

        loadMelee();
    }, [filterByName, filterByRarity, filterByType, filterBySource, isMagical, isAttunement]);

    return armors;
};


export default UseFilteredArmors;