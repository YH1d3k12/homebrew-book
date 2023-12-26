import { useLocation } from "react-router-dom";

import LineBreaker from "../../../utilities/LineBreaker";
import "./itemCard.css";


const ItemCard = () => {
    const location = useLocation();
    const { item } = location.state;

    return (
        <div className="item-card-content-wrapper">
            <h1>{item.name}</h1>
            <div className="item-card-content scroll-y">
                <h2><strong>item: </strong>{item.enchantment}</h2>
                <p>
                    <strong>Source: </strong>{item.source}<br/>
                    <strong>Type: </strong>{item.type}<br/>
                    <strong>Casting Time: </strong>{item.castingTime}<br/>
                    <strong>Range: </strong>{item.range}<br/>
                    <strong>Components: </strong>{item.components}<br/>
                    <strong>Duration: </strong>{item.duration}<br/>
                </p>
                <p>{LineBreaker(item.effect)}</p>
                <p><strong>At Higher Levels: </strong>{item.upCasting}</p>
                <p><strong>item List: </strong>{item.available}</p>
            </div>
        </div>
    );
}


export default ItemCard;