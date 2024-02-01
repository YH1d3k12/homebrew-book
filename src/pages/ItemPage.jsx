import { useLocation } from "react-router-dom";

import LineBreaker from "../utilities/LineBreaker";

import "../features/itemPage/itemPage.css";


const ItemPage = () => {
    const location = useLocation();
    const { item } = location.state;
    
    return (
        <div className="item-page-content-wrapper">
            <div className="item-card">
                <h1>{item.name}</h1>
                <div className="item-card-content scroll-y">
                    {/* Overall item properties */}
                    <p>
                        {item.source && <><strong>Source: </strong>{item.source}<br/></>}
                        <strong>Rarity: </strong>{item.rarity}<br/>
                        <strong>Cost: </strong>{item.cost}<br />
                        {item.magical && <><strong>Magical?: </strong>{item.magical ? "yes" : "no"}<br/></>}
                        {item.attunement && <><strong>Attunement?: </strong>{item.attunement ? "yes" : "no"}<br/></>}
                    </p>
                    {/* Specific item properties. If it exist create an element */}
                    <p>
                        {item.type && <><strong>Type: </strong>{item.type}<br/></>}
                        {item.category && <><strong>Category: </strong>{item.category}<br/></>}
                        {item.armorClass && <><strong>AC: </strong>{item.armorClass}<br/></>}
                        {item.strength && <><strong>Strength: </strong>{item.strength}<br/></>}
                        {item.stealth && <><strong>Stealth: </strong>{item.stealth}<br/></>}
                        
                        {item.slashing && <><strong>Slashing: </strong>{item.slashing}<br/></>}
                        {item.piercing && <><strong>Piercing: </strong>{item.piercing}<br/></>}
                        {item.bludgeoning && <><strong>Bludgeoning: </strong>{item.bludgeoning}<br/></>}
                        {item.critRange && <><strong>Crit Range: </strong>{item.critRange}<br/></>}
                        {item.critDMG && <><strong>Crit Damage: </strong>{item.critDMG}<br/></>}
                        {item.properties && <><strong>Crit Range: </strong>{item.properties}<br/></>}
                        
                        {item.effects && Object.entries(item.effects).length > 0 && (
                            <div>
                                <strong>Effects:</strong>
                                {Object.entries(item.effects).map(([effectName, effectValue]) => (
                                    <p key={effectName}>
                                        <strong>{effectName}:</strong> {effectValue} <br/>
                                    </p>
                                ))}
                            </div>
                        )}
                    </p>

                    <p>{LineBreaker(item.description)}</p>
                </div>
            </div>
        </div>
    );
};


export default ItemPage;