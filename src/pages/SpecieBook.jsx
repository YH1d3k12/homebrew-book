import CharacterCards from "../features/specieBook/components/CharacterCards.jsx";
import LavaRiver from "../components/effects/LavaRiver.jsx";

import "../features/specieBook/specieBook.css";


const SpecieBook = () => {
    return (
        <div className="specie-book-content-wrapper">
            <LavaRiver></LavaRiver>
            <CharacterCards></CharacterCards>
            <LavaRiver></LavaRiver>
        </div>
    );
};


export default SpecieBook;