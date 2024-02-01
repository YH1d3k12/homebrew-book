import { useNavigate } from "react-router-dom";

const WeaponsTable = ({ data }) => {
    const sortedData = [...data].sort((a, b) => a.name.localeCompare(b.name));
    const navigate = useNavigate();

    const HandleItemClick = (item) => {
        navigate("/item", { state: { item } });
    };
    
    return (
        <div>
            <table className="content-table weapons-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Rarity</th>
                        <th>Type</th>
                        <th>Cost</th>
                        <th>Magical?</th>
                        <th>Attunement?</th>
                        <th>Properties</th>
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
                            <td>{item.properties}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default WeaponsTable;