import { useNavigate } from "react-router-dom";
import SpellTable from "../components/spell_table";
// The spell book page will list all available spell with a description and a link to the spell's source 

// Make an array of spells containing the spell level, name, description, and id.
// For each spell in the array, create a card with the spell's name, description and link to the spell source using its id.


export default function MainPage() {
    const navigate = useNavigate();

    return (
        <div>
            <button onClick={() => navigate("/spellbook")}>Spell Book</button>
        </div>
    );
};