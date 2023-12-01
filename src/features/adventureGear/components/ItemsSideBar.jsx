import { Link } from "react-router-dom";

import axe from "../../../assets/images/weapons/axe.png";
import bow from "../../../assets/images/weapons/bow.png";
import firearm from "../../../assets/images/weapons/firearm.png";
import heavy_armor from "../../../assets/images/armor/heavy_armor.png";
import ammunition from "../../../assets/images/other/ammunition.png";
import bomb from "../../../assets/images/weapons/bomb.png";
import chemical from "../../../assets/images/other/chemical.png";
import poison from "../../../assets/images/other/poison.png";
import tools from "../../../assets/images/other/tools.png";
import harp from "../../../assets/images/other/harp.png";
import cheese from "../../../assets/images/food/cheese.png";
import net from "../../../assets/images/weapons/net.png";
import mounts from "../../../assets/images/other/mounts.png";
import siege_equipment from "../../../assets/images/other/siege_equipment.png";
import vehicles from "../../../assets/images/other/vehicles.png";


import "./itemsSideBar.css";

const ItemsSideBar = () => {
    return (
        <nav className="items-sidebar">
            <ul>
                <li><Link><img src={axe} alt="Axe" /><span>Meele Weapons</span></Link></li>
                <li><Link><img src={bow} alt="Bow" /><span>Ranged Weapons</span></Link></li>
                <li><Link><img src={firearm} alt="Firearm" /><span>Firearms</span></Link></li>
                <li><Link><img src={heavy_armor} alt="Heavy Armor" /><span>Armors</span></Link></li>
                <li><Link><img src={ammunition} alt="Ammunition" /><span>Ammunitions</span></Link></li>
                <li><Link><img src={bomb} alt="Bomb" /><span>Bombs</span></Link></li>
                <li><Link><img src={chemical} alt="Chemical" /><span>Potions</span></Link></li>
                <li><Link><img src={poison} alt="Poison" /><span>Poisons</span></Link></li>
                <li><Link><img src={tools} alt="Tools" /><span>Tools</span></Link></li>
                <li><Link><img src={harp} alt="Harp" /><span>Instruments</span></Link></li>
                <li><Link><img src={cheese} alt="Cheese" /><span>Food</span></Link></li>
                <li><Link><img src={net} alt="Net" /><span>Useful Gear</span></Link></li>
                <li><Link><img src={mounts} alt="Mounts" /><span>Mounts</span></Link></li>
                <li><Link><img src={siege_equipment} alt="Siege Equipment" /><span>Siege Equipment</span></Link></li>
                <li><Link><img src={vehicles} alt="Vehicles" /><span>Vehicles</span></Link></li>
            </ul>
        </nav>
    )
}


export default ItemsSideBar;