import { useLocation } from "react-router-dom";

import LineBreaker from "../utilities/LineBreaker";

import "../features/featPage/featPage.css";


const FeatPage = () => {
    const location = useLocation();
    const { feat } = location.state;
    
    return (
        <div className="feat-page-content-wrapper">
            <div className="feat-card">
                <h1>{feat.name}</h1>
                <div className="feat-card-content scroll-y">
                    {/* Overall feat properties */}
                    <p>
                        <strong>Source: </strong>{feat.source}<br/>
                        <strong>Requirements: </strong>{feat.requirement}<br/>
                        <strong>Repeatable?: </strong>{feat.repeatable}<br/>
                    </p>
                    <p>{LineBreaker(feat.description)}</p>
                </div>
            </div>
        </div>
    );
};


export default FeatPage;