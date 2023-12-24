import { useNavigate } from "react-router-dom";

import axeIcon from "../../../../assets/images/weapons/axe.png";
import bladeIcon from "../../../../assets/images/weapons/blade.png";
import bludgeonIcon from "../../../../assets/images/weapons/bludgeon.png";
import fistWeaponIcon from "../../../../assets/images/weapons/fist_weapon.png";
import polearmIcon from "../../../../assets/images/weapons/polearm.png";
import othersIcon from "../../../../assets/images/weapons/net.png";

const MeleeWeaponsTable = ({ data }) => {
    const sortedData = [...data].sort((a, b) => a.name.localeCompare(b.name));
    const navigate = useNavigate();

    const HandleItemClick = (item) => {
        navigate("/", { state: { item } });
    };

    const GetItemIcon = (type) => {
        // Define a mapping of weapon types to icon URLs
        const typeIcons = {
            Axes: axeIcon,
            Blades: bladeIcon,
            Bludgeons: bludgeonIcon,
            Fists: fistWeaponIcon,
            Polearms: polearmIcon,
            Others: othersIcon,
        };
    
        return typeIcons[type];
    };
    
    return (
        <div>
            <table className="content-table melee-weapons-table">
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
                                    src={GetItemIcon(item.type)}
                                    alt={`${item.type} icon`}
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

export default MeleeWeaponsTable;