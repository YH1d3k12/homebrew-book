import React, { useEffect,  useState } from 'react';
import { useNavigate } from "react-router-dom";
import data from '../data/spells_data.js';
import "../styles/table.css";
import "../styles/table_tabs.css";
import "./spell_table.css";

function SpellTable() {
    const navigate = useNavigate();
    
    // Define spells como um array vazio
    // SetSpells altera o valor de spells quando for chamado
    const [spells, setSpells] = useState([]);

    // Controla o nível atual da tabela
    // currentLevel é uma váriavel criada pelo useState que retem o valor 'first' por padrão quando a página é carregada
    // setCurrentLevel é uma função que altera o valor de currentLevel
    const [currentLevel, setCurrentLevel] = useState(1);
    
    // Quando o componente é carregado useEffect é chamado
    useEffect(() => {
        const loadSpells = async () => {
            setSpells(data)
        };
    
        // Chama loadSpells quando carregado
        loadSpells();
    // Segundo parametro de useEffect é uma lista de dependencias, se vazia, a função é chamada apenas uma vez
    // Se a lista não for vazia, a função é chamada sempre que um dos valores da lista mudar
    }, []);

    // Função chamada pelos botões para alternar o nível dos feitiços
    const handleChangeLevel = (level) => {
        setCurrentLevel(level);
    };

    // Navega para a página spellpage e passa a magia como um parâmetro
    const handleSpellClick = (spell) => {
        navigate("/spellpage", { state: { spell } });
    };

    // Função para renderizar a tabela com base no nível selecionado
    const renderTable = () => {
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
                    {spells.filter((spell) => spell.level === currentLevel).map((spell) => (
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

    return (
        <div className="spell-table-content-wrapper">
            <button className="table-tab" onClick={() => handleChangeLevel(1)}>1st Level</button>
            <button className="table-tab" onClick={() => handleChangeLevel(2)}>2nd Level</button>
            <button className="table-tab" onClick={() => handleChangeLevel(3)}>3rd Level</button>
            {renderTable()}
        </div>
    );
}

export default SpellTable;