import { useNavigate } from "react-router-dom";
import SpellTable from "../components/spell_table";


export default function SpellBook() {
    const navigate = useNavigate();

    return (
        <div>
            <SpellTable></SpellTable>
            <button onClick={() => navigate("/")}>Go Back</button>
        </div>
    );
};