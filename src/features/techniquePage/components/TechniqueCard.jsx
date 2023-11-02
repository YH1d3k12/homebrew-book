import { useLocation } from "react-router-dom";

import LineBreaker from "../../../utilities/LineBreaker";
import "./techniqueCard.css";


const TechniqueCard = () => {
    const location = useLocation();
    const { technique } = location.state;

    return (
        <div className="technique-card-content-wrapper">
            <h1>{technique.name}</h1>
            <div className="technique-card-content">
                <p>
                    <strong>Source: </strong>{technique.source}<br/>
                    <strong>Stat Scaling: </strong>{technique.stat}<br/>
                    <strong>Action Time: </strong>{technique.castingTime}<br/>
                    <strong>Range: </strong>{technique.range}<br/>
                    <strong>Equipment: </strong>{technique.equipment}<br/>
                    <strong>Duration: </strong>{technique.duration}<br/>
                </p>
                <p>{LineBreaker(technique.effect)}</p>
                <p><strong>At Higher Levels: </strong>{technique.upCasting}</p>
                <p><strong>Technique List: </strong>{technique.available}</p>
            </div>
        </div>
    );
}


export default TechniqueCard;