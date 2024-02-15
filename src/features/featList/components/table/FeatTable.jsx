import { useNavigate } from "react-router-dom";


const FeatTable = ({data}) => {
    const navigate = useNavigate();

    const handleSpellClick = (feat) => {
        navigate("/featpage", { state: { feat } });
    };

    const sortedData = [...data].sort((a, b) => a.name.localeCompare(b.name));

    return (
        <table className="content-table">
            <thead>
                <tr>
                    <th>Feat Name</th>
                    <th>Requirements</th>
                    <th>Category</th>
                    <th>Type</th>
                </tr>
            </thead>
            <tbody>
                {sortedData.map((feat) => (
                    <tr key={feat.id}>
                        <td className="feat-table-body-first">
                            <a onClick={() => handleSpellClick(feat)}>{feat.name}</a>
                        </td>
                        <td>{feat.requirement}</td>
                        <td>{feat.category}</td>
                        <td>{feat.type == 0 ? "Minor Feat" : "Feat"}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};


export default FeatTable;