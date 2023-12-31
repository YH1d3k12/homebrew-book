import { useLocation } from "react-router-dom";

import LineBreaker from "../utilities/LineBreaker";
import "../features/spellPage/spellPage.css";


const SpellPage = () => {
    const location = useLocation();
    const { spell } = location.state;
    
    return (
        <div className="spell-page-content-wrapper">
            <div className="spell-card">
                <h1>{spell.name}</h1>
                <div className="spell-card-content">
                    <h2><strong>Spell: </strong>{spell.enchantment}</h2>
                    <p>
                        <strong>Source: </strong>{spell.source}<br/>
                        <strong>Type: </strong>{spell.type}<br/>
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
        </div>
    );
};


export default SpellPage;