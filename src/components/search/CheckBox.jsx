import { useEffect, useState } from "react";

import UseDebounce from "../../utilities/UseDebounce";
import "../../styles/search.css";


const CheckBox = ({ label, value, onChange }) => {
    const [checkedValue, setCheckedValue] = useState(value);
    const debouncedValue = UseDebounce(checkedValue, 300);

    useEffect(() => {
        onChange(debouncedValue);
    }, [debouncedValue, onChange]);

    return (
        <div className="search-checkbox">
            <input
                type="checkbox"
                value={checkedValue}
                onChange={(e) => setCheckedValue(e.target.checked)}
            >
            </input>
            <label>{label}</label>
        </div>
    );
};


export default CheckBox;