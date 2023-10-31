import { useLocation } from "react-router-dom";

import LineBreaker from "../../../utilities/LineBreaker";
import "./spellCard.css";


const SpellCard = () => {
    const location = useLocation();
    const { spell } = location.state;

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
                <p>{LineBreaker(spell.effect)}</p>
                <p><strong>At Higher Levels: </strong>{spell.upCasting}</p>
                <p><strong>Spell List: </strong>{spell.available}</p>
            </div>
        </div>
    );
}


export default SpellCard;