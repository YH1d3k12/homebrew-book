import { useEffect, useState } from "react";

import UseDebounce from "../../../../utilities/UseDebounce";
import "../../../../styles/search.css";


const SelectBySource = ({ value, onChange }) => {
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
            <option value="">Select By Source</option>
            <option value="Player's Handbook">Player's Handbook</option>
            <option value="Xanathar's Guide to Everything">Xanathar's Guide</option>
            <option value="Explorer's Guide to Wildemount">Explorer's Guide</option>
            <option value="Tasha's Cauldron of Everything">Tasha's Cauldron</option>
            <option value="Homebrew">Homebrew</option>
            <option value="Modified">Modified</option>
        </select>
    );
};


export default SelectBySource;