import { useNavigate } from "react-router-dom";

import "../../../../styles/table.css";
import "./techniqueTable.css";


const TechniqueTable = ({data, currentLevel}) => {
    const navigate = useNavigate();

    // Navega para a página spellpage e passa a magia como um parâmetro.
    const handleSpellClick = (technique) => {
        navigate("/techpage", { state: { technique } });
    };

    // Organiza os dados em ordem alfabética pelo nome da magia.
    const sortedData = [...data].sort((a, b) => a.name.localeCompare(b.name));

    return (
        <table className="content-table">
            <thead>
                <tr>
                    <th>Technique Name</th>
                    <th>Source</th>
                    <th className="technique-table-head-third">Description</th>
                    <th className="technique-table-head-fourth">Technique List</th>
                </tr>
            </thead>
            <tbody>
                {sortedData.filter((technique) => technique.level === currentLevel).map((technique) => (
                    <tr key={technique.id}>
                        <td className="technique-table-body-first">
                            <a onClick={() => handleSpellClick(technique)}>{technique.name}</a>
                        </td>
                        <td className="technique-table-body-second">{technique.source}</td>
                        <td className="technique-table-body-third">{technique.description}</td>
                        <td className="technique-table-body-fourth">{technique.available}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};


export default TechniqueTable;