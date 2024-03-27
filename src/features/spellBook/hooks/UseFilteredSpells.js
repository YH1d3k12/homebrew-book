import { useEffect, useState } from "react";

import data from "../../../data/SpellsData.js";

const UseFilteredSpells = (
    searchByName,
    searchByType,
    searchByClass,
    searchBySource,
    hasV,
    hasS,
    hasM,
    hasConcentration,
    hasRitual
) => {
    const [spells, setSpells] = useState([]);

    useEffect(() => {
        const loadSpells = async () => {
            let filteredSpells = data;

            if (searchByName) {
                filteredSpells = filteredSpells.filter(spell =>
                    spell.name.toLowerCase().includes(searchByName.toLowerCase())
                );
            }

            if (searchByType) {
                filteredSpells = filteredSpells.filter(spell =>
                    spell.type.toLowerCase().includes(searchByType.toLowerCase())
                );
            }

            if (searchByClass) {
                filteredSpells = filteredSpells.filter(spell =>
                    spell.available.toLowerCase().includes(searchByClass.toLowerCase())
                );
            }

            if (searchBySource) {
                filteredSpells = filteredSpells.filter(spell =>
                    spell.source.toLowerCase().includes(searchBySource.toLowerCase())
                );
            }

            if (hasV) {
                filteredSpells = filteredSpells.filter(spell =>
                    spell.components.includes("V")
                );
            }

            if (hasS) {
                filteredSpells = filteredSpells.filter(spell =>
                    spell.components.includes("S")
                );
            }

            if (hasM) {
                filteredSpells = filteredSpells.filter(spell =>
                    spell.components.includes("M")
                );
            }

            if (hasConcentration) {
                filteredSpells = filteredSpells.filter(spell =>
                    spell.duration.toLowerCase().includes("concentration")
                );
            }

            if (hasRitual) {
                filteredSpells = filteredSpells.filter(spell =>
                    spell.type.toLocaleLowerCase().includes("ritual")
                );
            }

            setSpells(filteredSpells);
        };

        loadSpells();
    }, [searchByName, searchByType, searchByClass, searchBySource, hasV, hasS, hasM, hasConcentration, hasRitual]);

    return spells;
};


export default UseFilteredSpells;