const MeleeByCategoryTable = ({ data, category }) => {
    return (
        <div>
            <h2>{category}</h2>
            <table className="content-table melee-weapons-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th className="text-center">Cost</th>
                        <th className="text-center">Slashing</th>
                        <th className="text-center">Piercing</th>
                        <th className="text-center">Bludgeoning</th>
                        <th className="text-center">Crit</th>
                        <th className="text-center">Crit DMG</th>
                        <th className="text-center">Type</th>
                        <th>Properties</th>
                        <th className="text-center">Weight</th>
                    </tr>
                </thead>
                <tbody>
                    {data.filter(item => item.type === category).map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td className="text-center">{item.cost}</td>
                            <td className="text-center">{item.slashing}</td>
                            <td className="text-center">{item.piercing}</td>
                            <td className="text-center">{item.bludgeoning}</td>
                            <td className="text-center">{item.critRange}</td>
                            <td className="text-center">{item.critDMG}</td>
                            <td className="text-center">{item.category}</td>
                            <td>{item.properties}</td>
                            <td className="text-center">{item.weight}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MeleeByCategoryTable;