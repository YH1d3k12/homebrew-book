import LavaRiver from "../components/effects/LavaRiver.jsx";
import MenuButtons from "../features/menu/components/MenuButtons.jsx";

import "../features/menu/menu.css";


const Menu = () => {
    return (
        <div className="menu-content-wrapper">
            <LavaRiver></LavaRiver>
            <MenuButtons></MenuButtons>
            <LavaRiver></LavaRiver>
        </div>
    );
};

export default Menu;