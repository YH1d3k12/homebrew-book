import { useNavigate } from "react-router-dom";

const WeaponsTable = ({ data }) => {
    const sortedData = [...data].sort((a, b) => a.name.localeCompare(b.name));
    const navigate = useNavigate();

    const HandleItemClick = (item) => {
        navigate("/item", { state: { item } });
    };
    
    return (
        <div>
            <table className="content-table items-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Rarity</th>
                        <th>Type</th>
                        <th>Cost</th>
                        <th>Magical?</th>
                        <th>Attunement?</th>
                        <th>AC</th>
                        <th>STR</th>
                        <th>Stealth</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedData.map((item) => (
                        <tr key={item.id}>
                            <td>
                                <img
                                    src={item.image}
                                    alt={"weapon icon"}
                                />
                                <a onClick={() => HandleItemClick(item)}>{item.name}</a>
                            </td>
                            <td>{item.rarity}</td>
                            <td>{item.type}</td>
                            <td>{item.cost}</td>
                            <td>{item.magical ? "Yes" : "No"}</td>
                            <td>{item.attunement ? "Yes" : "No"}</td>
                            <td>{item.armorClass}</td>
                            <td>{item.strength}</td>
                            <td>{item.stealth}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default WeaponsTable;