import React, { useEffect,  useState } from 'react';
import { useNavigate } from "react-router-dom";
import FirstLevelSpells from "../data/first_level_spells_data";
import SecondLevelSpells from "../data/second_level_spells_data";
import ThirdLevelSpells from "../data/third_level_spells_data";
import "../styles/table.css";
import "../styles/table_tabs.css";
import "./spell_table.css";
import GetSpells from '../data/getSpells';

function SpellTable() {
    const navigate = useNavigate();

    // Controla o nível atual da tabela
    // currentLevel é uma váriavel criada pelo useState que retem o valor 'first' por padrão quando a página é carregada
    // setCurrentLevel é uma função que altera o valor de currentLevel
    const [currentLevel, setCurrentLevel] = useState('first');
    const [spells, setSpells] = useState([]);

    useEffect(() => {
        const loadSpells = async () => {
          try {
            let loadedSpells = [];
    
            if (currentLevel === 'first') {
              loadedSpells = await GetSpells();
            } else if (currentLevel === 'second') {
              // Load spells for second level
            } else if (currentLevel === 'third') {
              // Load spells for third level
            }

            if (loadedSpells instanceof Promise) 
            {
                loadedSpells = await loadedSpells;
            }
    
            setSpells(loadedSpells);
          } catch (error) {
            console.error('Erro ao carregar feitiços:', error);
          }
        };
    
        loadSpells();
      }, [currentLevel]);
    
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
                    {spells.map((spell) => (
                        <tr key={spell.id}>
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
            {renderTable()}
        </div>
    );
}

export default SpellTable;