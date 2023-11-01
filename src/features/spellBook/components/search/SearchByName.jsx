import { useEffect, useState } from "react";

import UseDebounce from "../../../../utilities/UseDebounce";
import "../../../../styles/search.css";


const SearchByName = ({ value, onChange }) => {
    const [inputValue, setInputValue] = useState(value);
    const debouncedValue = UseDebounce(inputValue, 400);

    useEffect(() => {
        onChange(debouncedValue);
    }, [debouncedValue, onChange]);

    return (
        <input
            className="search-input"
            type="text"
            placeholder="Search By Name"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
        />
    );
};


export default SearchByName;