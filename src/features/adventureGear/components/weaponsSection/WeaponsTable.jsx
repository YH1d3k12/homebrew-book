import { useNavigate } from "react-router-dom";

import assaultRifle from "../../../../assets/images/weapons/assault_rifle.png";
import axe from "../../../../assets/images/weapons/axe.png";
import bo from "../../../../assets/images/weapons/bo.png";
import bow from "../../../../assets/images/weapons/bow.png";
import crossbow from "../../../../assets/images/weapons/crossbow.png";
import dagger from "../../../../assets/images/weapons/dagger.png";
import dart from "../../../../assets/images/weapons/dart.png";
import doubleAxe from "../../../../assets/images/weapons/double_axe.png";
import fistWeapon from "../../../../assets/images/weapons/fist_weapon.png";
import flail from "../../../../assets/images/weapons/flail.png";
import glaive from "../../../../assets/images/weapons/glaive.png";
import heavyBlade from "../../../../assets/images/weapons/heavy_blade.png";
import katana from "../../../../assets/images/weapons/katana.png";
import mace from "../../../../assets/images/weapons/mace.png";
import net from "../../../../assets/images/weapons/net.png";
import pistol from "../../../../assets/images/weapons/pistol.png";
import rapier from "../../../../assets/images/weapons/rapier.png";
import rifle from "../../../../assets/images/weapons/rifle.png";
import shotgun from "../../../../assets/images/weapons/shotgun.png";
import sickle from "../../../../assets/images/weapons/sickle.png";
import smg from "../../../../assets/images/weapons/smg.png";
import spear from "../../../../assets/images/weapons/spear.png";
import staff from "../../../../assets/images/weapons/staff.png";
import sword from "../../../../assets/images/weapons/sword.png";
import trident from "../../../../assets/images/weapons/trident.png";
import wand from "../../../../assets/images/weapons/wand.png";
import warhammer from "../../../../assets/images/weapons/warhammer.png";
import wood_club from "../../../../assets/images/weapons/wood_club.png";
import whip from "../../../../assets/images/weapons/whip.png";

const WeaponsTable = ({ data }) => {
    const sortedData = [...data].sort((a, b) => a.name.localeCompare(b.name));
    const navigate = useNavigate();

    const HandleItemClick = (item) => {
        navigate("/", { state: { item } });
    };

    const GetItemIcon = (image) => {
        // Define a mapping of weapon images to icon URLs
        const icon = {
            "Assault Rifle": assaultRifle,
            "Axe": axe,
            "Double Axe": doubleAxe,
            "Bo": bo,
            "Bow": bow,
            "Crossbow": crossbow,
            "Dagger": dagger,
            "Dart": dart,
            "Fist Weapon": fistWeapon,
            "Flail": flail,
            "Glaive": glaive,
            "Heavy Blade": heavyBlade,
            "Katana": katana,
            "Mace": mace,
            "Net": net,
            "Pistol": pistol,
            "Rapier": rapier,
            "Rifle": rifle,
            "Shotgun": shotgun,
            "Sickle": sickle,
            "SMG": smg,
            "Spear": spear,
            "Staff": staff,
            "Sword": sword,
            "Trident": trident,
            "Wand": wand,
            "Warhammer": warhammer,
            "Wood Club": wood_club,
            "Whip": whip,
        };
    
        return icon[image];
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
                                    src={GetItemIcon(item.image)}
                                    alt={`${item.image} icon`}
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