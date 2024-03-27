import { Link } from "react-router-dom";

import axe from "../../../assets/images/weapons/axe.png";
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
        <nav className="items-sidebar scroll-y">
            <ul>
                <li><Link to="melee"><img src={axe} alt="Axe" /><span>Weapons</span></Link></li>
                <li><Link to="armors"><img src={heavy_armor} alt="Heavy Armor" /><span>Armors</span></Link></li>
                <li><Link to="ammunitions"><img src={ammunition} alt="Ammunition" /><span>Ammunitions</span></Link></li>
                <li><Link to="bombs"><img src={bomb} alt="Bomb" /><span>Bombs</span></Link></li>
                <li><Link to="potions"><img src={chemical} alt="Chemical" /><span>Potions</span></Link></li>
                <li><Link to="poisons"><img src={poison} alt="Poison" /><span>Poisons</span></Link></li>
                <li><Link to="tools"><img src={tools} alt="Tools" /><span>Tools</span></Link></li>
                <li><Link to="instruments"><img src={harp} alt="Harp" /><span>Instruments</span></Link></li>
                <li><Link to="foods"><img src={cheese} alt="Cheese" /><span>Food</span></Link></li>
                <li><Link to="useful"><img src={net} alt="Net" /><span>Useful Gear</span></Link></li>
                <li><Link to="mounts"><img src={mounts} alt="Mounts" /><span>Mounts</span></Link></li>
                <li><Link to="siege"><img src={siege_equipment} alt="Siege Equipment" /><span>Siege Equipment</span></Link></li>
                <li><Link to="vehicles"><img src={vehicles} alt="Vehicles" /><span>Vehicles</span></Link></li>
            </ul>
        </nav>
    )
}


export default ItemsSideBar;