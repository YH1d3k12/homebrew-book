import { useNavigate } from "react-router-dom";

import bladeIcon from "../../../../assets/images/weapons/blade.png";

const MeleeWeaponsTable = ({ data }) => {
    const sortedData = [...data].sort((a, b) => a.name.localeCompare(b.name));
    const navigate = useNavigate();

    const HandleItemClick = (item) => {
        navigate("/meleepage", { state: { item } });
    };

    const GetItemIcon = (type) => {
        // Define a mapping of weapon types to icon URLs
        const typeIcons = {
            Blades: bladeIcon,
        };
    
        return typeIcons[type];
    };
    
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
                            <td>
                                <img
                                    src={GetItemIcon(item.type)}
                                    alt={`${item.type} icon`}
                                />
                                <a onClick={() => HandleItemClick(item)}>{item.name}</a>
                            </td>
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