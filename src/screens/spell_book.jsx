import { useNavigate } from "react-router-dom";
import SpellTable from "../components/spell_table";
import "../styles/spell_book.css"


export default function SpellBook() {
    const navigate = useNavigate();

    return (
        <div className="spell-book-content-wrapper">
            <SpellTable></SpellTable>
            <button onClick={() => navigate("/")}>Go Back</button>
        </div>
    );
};