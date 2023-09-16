import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./spell_page.css";

export default function SpellPage() {
    const navigate = useNavigate();
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
                    <br/><br/>
                </React.Fragment>
            ));
        }
        else
        {
            return text;
        }
    };

    return (
        <div className="content-wrapper">
            <div className="spell-card">
                <h1>{spell.name}</h1>
                <p>
                    <strong>Type:</strong>{spell.type}<br/>
                    <strong>Casting Time:</strong>{spell.castingTime}<br/>
                    <strong>Range:</strong>{spell.range}<br/>
                    <strong>Components:</strong>{spell.components}<br/>
                    <strong>Duration:</strong>{spell.duration}<br/>
                </p>
                <p>{processLineBreaks(spell.effect)}</p>
                <p><strong>At Higher Levels.</strong>{spell.upCasting}</p>
                <p><strong>Spell List.</strong>{spell.available}</p>

                <button onClick={() => navigate("/")}>Go Back</button>
            </div>
        </div>
    );
}
