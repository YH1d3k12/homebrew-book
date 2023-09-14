import { useNavigate, useLocation } from "react-router-dom";

export default function SpellPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const { spell } = location.state;


    return (
        <div>
            <h1>{spell.name}</h1>
            <p>
                <strong>Type:</strong>{spell.type}<br/>
                <strong>Casting Time:</strong>{spell.castingTime}<br/>
                <strong>Range:</strong>{spell.range}<br/>
                <strong>Components:</strong>{spell.components}<br/>
                <strong>Duration:</strong>{spell.duration}<br/>
            </p>
            <p>{spell.effect}</p>
            <p><strong>At Higher Levels.</strong>{spell.upCasting}</p>
            <p><strong>Spell List.</strong>{spell.available}</p>



            <button onClick={() => navigate("/")}>Go Back</button>
        </div>
    );
}
