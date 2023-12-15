import { useEffect, useState } from "react";

import UseDebounce from "../../../../utilities/UseDebounce";
import "../../../../styles/search.css";


const SelectByStat = ({ value, onChange }) => {
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
            <option value="">Select By Stat Scaling</option>
            <option value="Str">Strength</option>
            <option value="Dex">Dexterity</option>
            <option value="Con">Constitution</option>
            <option value="Int">Intelligence</option>
            <option value="Wis">Wisdom</option>
            <option value="Cha">Charisma</option>
        </select>
    );
};


export default SelectByStat;