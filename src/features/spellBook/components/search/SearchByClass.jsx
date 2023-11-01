import { useEffect, useState } from "react";

import UseDebounce from "../../../../utilities/UseDebounce";
import "../../../../styles/search.css";


const SearchByClass = ({ value, onChange }) => {
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
            <option value="">Select By Class</option>
            <option value="Artificer">Artificer</option>
            <option value="Bard">Bard</option>
            <option value="Cleric">Cleric</option>
            <option value="Druid">Druid</option>
            <option value="Paladin">Paladin</option>
            <option value="Ranger">Ranger</option>
            <option value="Sorcerer">Sorcerer</option>
            <option value="Warlock">Warlock</option>
            <option value="Wizard">Wizard</option>
        </select>
    );
};


export default SearchByClass;