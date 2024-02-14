import { useNavigate } from "react-router-dom";


const FeatTable = ({data, currentLevel}) => {
    const navigate = useNavigate();

    const handleSpellClick = (feat) => {
        navigate("/featpage", { state: { feat } });
    };

    // Organiza os dados em ordem alfabética pelo nome da magia.
    const sortedData = [...data].sort((a, b) => a.name.localeCompare(b.name));

    return (
        <table className="content-table">
            <thead>
                <tr>
                    <th>feat Name</th>
                    <th>School</th>
                    <th className="feat-table-head-third">Description</th>
                    <th className="feat-table-head-fourth">feat List</th>
                </tr>
            </thead>
            <tbody>
                {sortedData.filter((feat) => feat.level === currentLevel).map((feat) => (
                    <tr key={feat.id}>
                        <td>
                            <a onClick={() => handleSpellClick(feat)}>{feat.name}</a>
                        </td>
                        <td>{feat.type}</td>
                        <td>{feat.description}</td>
                        <td>{feat.available}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};


export default FeatTable;