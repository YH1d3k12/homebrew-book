import SpellTable from "../features/spellBook/components/SpellTable.jsx";
import "../features/spellBook/spellBook.css";


const SpellBook = () => {
    return (
        <div className="spell-book-content-wrapper">
            <SpellTable></SpellTable>
        </div>
    );
};


export default SpellBook;