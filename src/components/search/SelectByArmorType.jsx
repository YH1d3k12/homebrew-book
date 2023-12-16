import { useEffect, useState } from "react";

import UseDebounce from "../../utilities/UseDebounce";
import "../../styles/search.css";


const SelectByArmorType = ({ value, onChange }) => {
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
            <option value="None">None</option>
            <option value="Light Armor">Light Armor</option>
            <option value="Light Shield">Light Shield</option>
            <option value="Medium Armor">Medium Armor</option>
            <option value="Medium Shield">Medium Shield</option>
            <option value="Heavy Armor">Heavy Armor</option>
            <option value="Heavy Shield">Heavy Shield</option>
        </select>
    );
};


export default SelectByArmorType;