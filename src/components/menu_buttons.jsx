import React from 'react';
import "../styles/menu_buttons.css";

function MenuButtons()
{
    return (
        <div className="spell-content-wrapper">
            <h1>{spell.name}</h1>
            <div className="spell-content">
                <p>
                    <strong>Type: </strong>{spell.type}<br/>
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

export default MenuButtons;