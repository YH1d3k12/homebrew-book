import LavaRiver from "../components/lava_river";
import MenuButtons from "../components/menu_buttons";
import "../styles/main_page.css"

export default function MainPage() {

    return (
        <div className="main-content-wrapper">
            <LavaRiver></LavaRiver>
            <MenuButtons></MenuButtons>
            <LavaRiver></LavaRiver>
        </div>
    );
};