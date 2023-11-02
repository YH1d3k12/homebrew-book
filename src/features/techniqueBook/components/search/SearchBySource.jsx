import { useEffect, useState } from "react";

import UseDebounce from "../../../../utilities/UseDebounce";
import "../../../../styles/search.css";


const SearchBySource = ({ value, onChange }) => {
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
            <option value="Dragon Arts">Dragon Arts</option>
            <option value="Psionic Arts">Psionic Arts</option>
            <option value="Spell Arts">Spell Arts</option>
            <option value="Standard">Standard</option>
            <option value="Way of The Voice">Way of The Voice</option>
        </select>
    );
};


export default SearchBySource;