import "../../styles/table_tabs.css";


const TableTabs = ({setCurrentLevel}) => {
    
    const handleChangeLevel = (level) => {
        setCurrentLevel(level);
    };

    return (
        <div>
            <button className="table-tab" onClick={() => handleChangeLevel(1)}>1st Level</button>
            <button className="table-tab" onClick={() => handleChangeLevel(2)}>2nd Level</button>
            <button className="table-tab" onClick={() => handleChangeLevel(3)}>3rd Level</button>
        </div>
    )
}


export default TableTabs;