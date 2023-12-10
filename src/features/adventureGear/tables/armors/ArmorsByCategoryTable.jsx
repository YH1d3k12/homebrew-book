const ArmorsByCategoryTable = ({ data, category }) => {
    return (
        <div>
            <h2>{category}</h2>
            <table className="content-table melee-weapons-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th className="text-center">Cost</th>
                        <th className="text-center">Armor Class</th>
                        <th className="text-center">Strength</th>
                        <th className="text-center">Stealth</th>

                        <th className="text-center">Weight</th>
                    </tr>
                </thead>
                <tbody>
                    {data.filter(item => item.type === category).map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td className="text-center">{item.cost}</td>
                            <td className="text-center">{item.armorClass}</td>
                            <td className="text-center">{item.strength}</td>
                            <td className="text-center">{item.stealth}</td>
                            <td className="text-center">{item.weight}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ArmorsByCategoryTable;