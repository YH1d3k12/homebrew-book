import LavaRiver from "../components/lava_river";
import MenuButtons from "../components/menu_buttons";
import "./menu.css"

export default function MainPageScreen() 
{
    return (
        <div className="main-content-wrapper">
            <LavaRiver></LavaRiver>
            <MenuButtons></MenuButtons>
            <LavaRiver></LavaRiver>
        </div>
    );
};