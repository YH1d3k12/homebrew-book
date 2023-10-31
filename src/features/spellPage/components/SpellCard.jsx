import React from 'react';
import { useLocation } from "react-router-dom";
import "./spellCard.css";


const SpellCard = () => {
    const location = useLocation();
    const { spell } = location.state;

    // Função para processar as quebras de linha
    // split('\n') divide a string text em um array de strings
    // line representa cada linha desse array, o frangment renderiza cada linha e agrega 2 br para fazer a quebra
    const processLineBreaks = (text) => {
        if (text.includes('\n'))
        {
            return text.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                    {line}
                    <br/>
                    <br/>
                </React.Fragment>
            ));
        }
        else
        {
            return text;
        }
    };

    return (
        <div className="spell-card-content-wrapper">
            <h1>{spell.name}</h1>
            <div className="spell-card-content">
                <p>
                    <strong>Type: </strong>{spell.type_name}<br/>
                    <strong>Casting Time: </strong>{spell.castingTime}<br/>
                    <strong>Range: </strong>{spell.range}<br/>
                    <strong>Components: </strong>{spell.components}<br/>
                    <strong>Duration: </strong>{spell.duration}<br/>
                </p>
                <p>{processLineBreaks(spell.effect)}</p>
                <p><strong>At Higher Levels: </strong>{spell.upCasting}</p>
                <p><strong>Spell List: </strong>{spell.available}</p>
            </div>
        </div>
    );
}


export default SpellCard;