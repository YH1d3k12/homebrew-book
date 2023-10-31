import LavaRiver from "../components/effects/LavaRiver";
import MenuButtons from "../features/menu/components/MenuButtons";
import "../features/menu/menu.css";

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