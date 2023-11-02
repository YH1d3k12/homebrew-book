import "../../../../styles/table_tabs.css";


const TableTabs = ({setCurrentLevel}) => {
    
    const handleChangeLevel = (level) => {
        setCurrentLevel(level);
    };

    return (
        <div>
            <button className="table-tab" onClick={() => handleChangeLevel(1)}>1st Level</button>
            <button className="table-tab" onClick={() => handleChangeLevel(2)}>2nd Level</button>
            <button className="table-tab" onClick={() => handleChangeLevel(3)}>3rd Level</button>
            <button className="table-tab" onClick={() => handleChangeLevel(4)}>4th Level</button>
            <button className="table-tab" onClick={() => handleChangeLevel(5)}>5th Level</button>
            <button className="table-tab" onClick={() => handleChangeLevel(6)}>6th Level</button>
            <button className="table-tab" onClick={() => handleChangeLevel(7)}>7th Level</button>
            <button className="table-tab" onClick={() => handleChangeLevel(8)}>8th Level</button>
            <button className="table-tab" onClick={() => handleChangeLevel(9)}>9th Level</button>
        </div>
    )
}


export default TableTabs;