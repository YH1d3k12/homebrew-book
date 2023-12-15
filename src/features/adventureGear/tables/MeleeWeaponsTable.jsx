import { useNavigate } from "react-router-dom";

import "../../../../styles/table.css";


const MeleeWeaponsTable = ({data}) => {
    const navigate = useNavigate();

    const handleSpellClick = (technique) => {
        navigate("/meleepage", { state: { technique } });
    };

    const sortedData = [...data].sort((a, b) => a.name.localeCompare(b.name));

    return (
        <table className="content-table melee-weapons-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Category</th>
                    <th>Properties</th>
                    <th>Rarity</th>
                    <th>Cost</th>
                </tr>
            </thead>
            <tbody>
                {sortedData.map((technique) => (
                    <tr key={technique.id}>
                        <td>
                            <a onClick={() => handleSpellClick(technique)}>{technique.name}</a>
                        </td>
                        <td>{technique.type}</td>
                        <td>{technique.category}</td>
                        <td>{technique.properties}</td>
                        <td>{technique.cost}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};


export default MeleeWeaponsTable;