import MenuButtons from "../components/menu_buttons";
import "../styles/main_page.css"
// The spell book page will list all available spell with a description and a link to the spell's source 

// Make an array of spells containing the spell level, name, description, and id.
// For each spell in the array, create a card with the spell's name, description and link to the spell source using its id.


export default function MainPage() {

    return (
        <div className="main-content-wrapper">
            <MenuButtons></MenuButtons>
        </div>
    );
};