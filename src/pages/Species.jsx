import CharacterCards from "../features/species/components/CharacterCards.jsx";
import LavaRiver from "../components/effects/LavaRiver.jsx";

import "../features/species/species.css";


const Species = () => {
    return (
        <div className="species-content-wrapper">
            <LavaRiver></LavaRiver>
            <CharacterCards></CharacterCards>
            <LavaRiver></LavaRiver>
        </div>
    );
};


export default Species;