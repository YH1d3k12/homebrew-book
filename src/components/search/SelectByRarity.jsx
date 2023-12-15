import { useEffect, useState } from "react";

import UseDebounce from "../../utilities/UseDebounce";
import "../../styles/search.css";


const SelectByRarity = ({ value, onChange }) => {
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
            <option value="Common">Common</option>
            <option value="Uncommon">Uncommon</option>
            <option value="Rare">Rare</option>
            <option value="Very Rare">Very Rare</option>
            <option value="Epic">Epic</option>
            <option value="Legendary">Legendary</option>
            <option value="Mythic">Mythic</option>
            <option value="Artifact">Artifact</option>
        </select>
    );
};


export default SelectByRarity;