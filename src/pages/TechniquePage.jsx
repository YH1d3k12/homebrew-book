import { useLocation } from "react-router-dom";
import LineBreaker from "../utilities/LineBreaker";
import "../features/techniquePage/techniquePage.css";


const TechniquePage = () => {
    const location = useLocation();
    const { technique } = location.state;

    return (
        <div className="technique-page-content-wrapper">
            <div className="technique-card">
                <h1>{technique.name}</h1>
                <div className="technique-card-content scroll-y">
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
        </div>
    );
};


export default TechniquePage;