function SpellTable() 
{
    return (
        <div>
            <h1>Spell Book</h1>
            <table>
                <tr>
                    <th>Spell Name</th>
                    <th>Spell Source</th>
                </tr>
                <tr>
                    <td>Fireball</td>
                    <td><a href="https://www.dndbeyond.com/spells/fireball">D&D Beyond</a></td>
                </tr>
                <tr>
                    <td>Lightning Bolt</td>
                    <td><a href="https://www.dndbeyond.com/spells/lightning-bolt">D&D Beyond</a></td>
                </tr>
                <tr>
                    <td>Acid Arrow</td>
                    <td><a href="https://www.dndbeyond.com/spells/acid-arrow">D&D Beyond</a></td>
                </tr>
            </table>
        </div>  
    );
};

export default SpellTable;