import { useEffect, useState } from "react";

import UseDebounce from "../../../../utilities/UseDebounce";
import "../../../../styles/search.css";


const SelectByWeaponType = ({ value, onChange }) => {
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
            <option value="Axes">Axes</option>
            <option value="Blades">Blades</option>
            <option value="Bludgeons">Bludgeons</option>
            <option value="Polearms">Polearms</option>
            <option value="Others">Others</option>
        </select>
    );
};


export default SelectByWeaponType;