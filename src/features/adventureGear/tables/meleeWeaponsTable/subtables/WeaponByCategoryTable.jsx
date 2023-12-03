import "../../../../../styles/table.css";


const WeaponByCategoryTable = ({ data, category }) => {
    return (
        <div>
            <h2>{category}</h2>
            <table className="content-table melee-weapons-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th className="center-text">Cost</th>
                        <th className="center-text">Slashing</th>
                        <th className="center-text">Piercing</th>
                        <th className="center-text">Bludgeoning</th>
                        <th className="center-text">Crit</th>
                        <th className="center-text">Crit DMG</th>
                        <th className="center-text">Type</th>
                        <th>Properties</th>
                        <th className="center-text">Weight</th>
                    </tr>
                </thead>
                <tbody>
                    {data.filter(item => item.type === category).map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td className="center-text">{item.cost}</td>
                            <td className="center-text">{item.slashing}</td>
                            <td className="center-text">{item.piercing}</td>
                            <td className="center-text">{item.bludgeoning}</td>
                            <td className="center-text">{item.critRange}</td>
                            <td className="center-text">{item.critDMG}</td>
                            <td className="center-text">{item.category}</td>
                            <td>{item.properties}</td>
                            <td className="center-text">{item.weight}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default WeaponByCategoryTable;