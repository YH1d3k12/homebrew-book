const MeleeWeaponsTable = ({ data }) => {

    const sortedData = [...data].sort((a, b) => a.name.localeCompare(b.name));
    
    return (
        <div>
            <table className="content-table melee-weapons-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Cost</th>
                        <th>Type</th>
                        <th>Magical?</th>
                        <th>Attunement?</th>
                        <th>Rarity</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedData.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.cost}</td>
                            <td>{item.type}</td>
                            <td>{item.magical ? "Yes" : "No"}</td>
                            <td>{item.attunement ? "Yes" : "No"}</td>
                            <td>{item.rarity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MeleeWeaponsTable;