import { useNavigate } from "react-router-dom";

import "../../../styles/table.css";
import "./spellTable.css";


const SpellTable = ({data, currentLevel}) => {
    const navigate = useNavigate();

    // Navega para a página spellpage e passa a magia como um parâmetro.
    const handleSpellClick = (spell) => {
        navigate("/spellpage", { state: { spell } });
    };

    return (
        <table className="content-table">
            <thead>
                <tr>
                    <th>Spell Name</th>
                    <th>School</th>
                    <th className="spell-table-head-third">Description</th>
                    <th className="spell-table-head-fourth">Spell List</th>
                </tr>
            </thead>
            <tbody>
                {data.filter((spell) => spell.level === currentLevel).map((spell) => (
                    <tr key={spell.id}>
                        <td className="spell-table-body-first">
                            <a onClick={() => handleSpellClick(spell)}>{spell.name}</a>
                        </td>
                        <td className="spell-table-body-second">{spell.type_name}</td>
                        <td className="spell-table-body-third">{spell.description}</td>
                        <td className="spell-table-body-fourth">{spell.available}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};


export default SpellTable;