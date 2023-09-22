import React from 'react';
import { useNavigate } from "react-router-dom";
import "./character_cards.css";
import species from "../data/species_data";


function CharacterCards()
{
    const navigate = useNavigate();

    return (
        <div className="character-cards-content-wrapper">
            {species.map((specie) => (
                <a onClick={() => navigate("/")} className="character-card">
                    <div className="character-card-lines"></div>
                    <div className="character-card-image-box">
                        <img className="character-card-image" src={specie.image} alt={specie.name} />
                    </div>
                    <div className="character-card-details">
                        <h2>{specie.name}</h2>
                        <h5>{specie.type}</h5>
                    </div>
                </a>
            ))}
        </div>
    );
}

export default CharacterCards;