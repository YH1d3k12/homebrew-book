import { useEffect, useState } from "react";

import UseDebounce from "../../utilities/UseDebounce";
import "../../styles/search.css";


const SelectByFeatCategory = ({ value, onChange }) => {
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
            <option value="">All</option>
            <option value="Crafting">Crafting</option>
            <option value="Defensive">Defensive</option>
            <option value="Flavor">Flavor</option>
            <option value="Offensive">Offensive</option>
            <option value="Utility">Utility</option>
            <option value="Movement">Movement</option>
        </select>
    );
};


export default SelectByFeatCategory;