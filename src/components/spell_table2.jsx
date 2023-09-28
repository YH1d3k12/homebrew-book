import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import GetSpells from '../data/getSpells';
import "../styles/table.css";
import "../styles/table_tabs.css";
import "./spell_table.css";

function SpellTable2() {
    const navigate = useNavigate();

    // Controla o nível atual da tabela
    // currentLevel é uma váriavel criada pelo useState que retem o valor 'first' por padrão quando a página é carregada
    // setCurrentLevel é uma função que altera o valor de currentLevel
    const [currentLevel, setCurrentLevel] = useState('first');

    const [spells, setSpells] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try 
            {
                const spellsData = await GetSpells();
                setSpells(spellsData);
            } catch (error) 
            {
                console.error('Error fetching spells:', error);
            }
        };

        // Chama a função FetchData quando o componente carrega
        fetchData();
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
    const renderTableByLevel = () => {
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
                    {spells.map((spell, index) => (
                        <tr key={index}>
                            <td className="spell-table-body-first">
                                <a onClick={() => handleSpellClick(spell)}>{spell.name}</a>
                            </td>
                            <td className="spell-table-body-second">{spell.type}</td>
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
            <button className="table-tab" onClick={() => handleChangeLevel('first')}>1st Level</button>
            <button className="table-tab" onClick={() => handleChangeLevel('second')}>2nd Level</button>
            <button className="table-tab" onClick={() => handleChangeLevel('third')}>3rd Level</button>
            {renderTableByLevel()}
        </div>
    );
}

export default SpellTable2;