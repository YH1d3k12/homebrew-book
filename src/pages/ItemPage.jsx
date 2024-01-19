import { useLocation } from "react-router-dom";

import LineBreaker from "../utilities/LineBreaker";

import "../features/itemPage/itemPage.css";


const ItemPage = () => {
    const location = useLocation();
    const { item } = location.state;
    
    return (
        <div className="item-page-content-wrapper">
            <h1>{item.name}</h1>
            <div className="item-card-content scroll-y">
                <p>
                    <strong>Source: </strong>{item.source}<br/>
                    <strong>Rarity: </strong>{item.rarity}<br/>
                    <strong>Cost: </strong>{item.cost}<br />
                    <strong>Magical? </strong>{item.magical ? "yes" : "no"} <br />
                    <strong>Attunement? </strong>{item.attunement ? "yes" : "no"} <br />
                </p>
                <p>{LineBreaker(item.description)}</p>
            </div>
        </div>
    );
};


export default ItemPage;