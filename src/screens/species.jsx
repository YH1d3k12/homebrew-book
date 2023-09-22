import CharacterCards from "../components/characters_cards";
import LavaRiver from "../components/lava_river";
import "./species.css"

export default function SpeciesScreen() 
{
    return (
        <div className="species-content-wrapper">
            <LavaRiver></LavaRiver>
            <CharacterCards></CharacterCards>
            <LavaRiver></LavaRiver>
        </div>
    );
};