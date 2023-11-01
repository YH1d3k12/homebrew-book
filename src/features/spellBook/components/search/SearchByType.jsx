import { useEffect, useState } from "react";

import UseDebounce from "../../../../utilities/UseDebounce";
import "../../../../styles/search.css";


const SearchByType = ({ value, onChange }) => {
    const [selectedValue, setSelectedValue] = useState(value);
    const debouncedValue = UseDebounce(selectedValue, 400);

    useEffect(() => {
        onChange(debouncedValue);
    }, [debouncedValue, onChange]);

    return (
        <select
            className="search-select"
            value={selectedValue}
            onChange={(e) => setSelectedValue(e.target.value)}
        >
            <option value="">Select By Magic School</option>
            <option value="Abjuration">Abjuration</option>
            <option value="Chronurgy">Chronurgy</option>
            <option value="Conjuration">Conjuration</option>
            <option value="Divination">Divination</option>
            <option value="Enchantment">Enchantment</option>
            <option value="Evocation">Evocation</option>
            <option value="Illusion">Illusion</option>
            <option value="Necromancy">Necromancy</option>
            <option value="Transmutation">Transmutation</option>
        </select>
    );
};


export default SearchByType;