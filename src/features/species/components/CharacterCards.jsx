import { Link } from "react-router-dom";

import species from "../../../data/SpeciesData.js";
import "./characterCards.css";


const CharacterCards = () => {
    return (
        <div className="character-cards-content-wrapper">
            {species.map((specie) => (
                <Link to="" className="character-card">
                    <div className="character-card-lines"></div>
                    <div className="character-card-image-box">
                        <img className="character-card-image" src={specie.image} alt={specie.name} />
                    </div>
                    <div className="character-card-details">
                        <h2>{specie.name}</h2>
                        <h5>{specie.type}</h5>
                    </div>
                </Link>
            ))};
        </div>
    );
};


export default CharacterCards;