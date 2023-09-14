import React, { useState } from 'react';
import FirstLevelSpells from "../data/first_level_spells_data";
import SecondLevelSpells from "../data/second_level_spells_data";
import ThirdLevelSpells from "../data/third_level_spells_data";
import "./spell_table.css";

function SpellTable() {

    // Controla o nível atual da tabela
    // currentLevel é uma váriavel criada pelo useState que retem o valor 'first' por padrão quando a página é carregada
    // setCurrentLevel é uma função que altera o valor de currentLevel
    const [currentLevel, setCurrentLevel] = useState('first');

    // Função chamada pelos botões para alternar o nível dos feitiços
    const handleChangeLevel = (level) => {
        setCurrentLevel(level);
    };

    // Função para renderizar a tabela com base no nível selecionado
    const renderTableByLevel = () => {
        let spells = [];

        // Selecionar os feitiços com base no nível
        if (currentLevel === 'first') 
        {
            spells = FirstLevelSpells;
        } 
        else if (currentLevel === 'second')
        {
          spells = SecondLevelSpells;
        } 
        else if (currentLevel === 'third') 
        {
          spells = ThirdLevelSpells;
        }

        return (
            <table className='content-table'>
                <thead>
                    <tr>
                        <th>Spell Name</th>
                        <th>Spell Description</th>
                    </tr>
                </thead>
                <tbody>
                    {spells.map((spell, index) => (
                        <tr key={index}>
                            <td>{spell.name}</td>
                            <td>{spell.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    };

    return (
        <div>
            <h1>Spell Book</h1>

            <button onClick={() => handleChangeLevel('first')}>1st Level Spell</button>
            <button onClick={() => handleChangeLevel('second')}>2nd Level Spell</button>
            <button onClick={() => handleChangeLevel('third')}>3rd Level Spell</button>

            {renderTableByLevel()}
        </div>
    );
}

export default SpellTable;