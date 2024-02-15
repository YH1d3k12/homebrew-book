import "../features/rulesPage/rulesPage.css";

const RulesPage = () => {
    return (
        <div className="rules-content-wrapper">
            <div className="rules-container scroll-y">
                <h2>Visão Geral</h2>
                <p> Este homebrew introduz mudanças nas regras do jogo para oferecer mais opções de personalização aos personagens, permitindo builds distintas do padrão do jogo, como monges que utilizam força ou paladinos que usam arco. Além disso, visa proporcionar mais opções de ações durante o combate, especialmente para as classes marciais, por meio da implementação das habilidades marciais.</p>
                <p> Eu particularmente não me importo com personagens fortes por conta de builds complexos, se essa for a diversão do jogador. Creio que, com mais recursos e opções a se fazer durante o turno, não tem o porquê de se segurar como DM, pois os jogadores terão mais chances de vencer estrategicamente com trabalho em equipe.</p>
                <h2>Armas</h2>
                <p> Foram adicionadas propriedades extras às armas para criar diferenciais significativos na hora da escolha. Isso inclui uma maior chance de acerto crítico, dano crítico, a capacidade de ignorar a defesa de escudos ou tendo diferentes opções de dano (ex: uma espada pode cortar, perfurar ou causar um dano concussivo usando o pomo ou guarda)...</p>
                <p>
                    <h3>Resumo das Armas</h3>
                    <ul>
                        <li>Machados possuem maior multiplicador de dano crítico do dano base.</li>
                        <li>Lâminas são mais versáteis no tipo de dano.</li>
                        <li>Armas concussivas conseguem lidar melhor contra defesas inimigas.</li>
                        <li>Armas de haste têm maior alcance.</li>
                        <li>Armas para ataques desarmados foram adicionadas.</li>
                        <li>As crossbows agora são armas simples.</li>
                        <li>Os arcos são fortes, possuem o maior alcance mas precisam de força e treinamento marcial para usar.</li>
                        <li>Armas de fogo são poderosas e simples, porém barulhentas, caras e podem falhar.</li>
                    </ul>
                </p>
                <p>
                    <h3>Propriedades das Armas</h3>
                    <strong>Finesse: </strong>Pode usar destreza no lugar de força para rolagens de ataque e dano.<br /><br />
                    <strong>Light: </strong>Esta arma é projetada para ser efetiva quando empunhada em uma mão, permitindo que você carregue uma segunda arma na outra mão.<br /><br />
                    <strong>Heavy: </strong>Criaturas pequenas possuem desvantagem ao utilizar este tipo de arma.<br /><br />
                    <strong>Thrown: </strong>A arma pode ser arremessada com alcance especificado entre ().<br /><br />
                    <strong>Versatile: </strong>O dano da arma muda caso seja usada com duas mãos, especificado entre ().<br /><br />
                    <strong>Two-handed: </strong>A arma precisa das duas mãos para ser usada.<br /><br />
                    <strong>Reach: </strong>O alcance corpo a corpo da arma é de 10ft.<br /><br />
                    <strong>Great Reach: </strong>O alcance corpo a corpo da arma é de 15ft, mas possui desvantagem em ataques efetuados a 5ft.<br /><br />
                    <strong>Bypass: </strong>A arma ignora a AC adicional de escudos.<br /><br />
                    <strong>Snearing: </strong>Você pode fazer um grapple usando o modificador de acerto da arma e, com seu alcance.<br /><br />
                    <strong>Lethal: </strong>Num acerto crítico o menor dado de dano rolado da arma é maximizado.<br /><br />
                    <strong>Unarmed: </strong>O usuário ainda pode usar suas mãos de maneira convencional para agarrar objetos e interações. Caso o usuário possua dano desarmado maior que o da arma, o tamanho de seu dado de dano desarmado aumenta em 1 (para o máximo de 1d12).<br /><br />
                    <strong>Forceful: </strong>Mesmo errando o ataque por uma margem de erro igual sua proficiência, causa dano concussivo igual seu modificador de força. (ex: uma criatura com 15 de AC é acertada com 13 caso sua proficiência for igual a 2).<br /><br />
                    <strong>Extra Damage: </strong>Num acerto a arma causa dano adicional especificado entre ().<br /><br />
                    <strong>Crit Range: </strong>Determina a margem de acerto crítico ao atacar usando a arma.<br /><br />
                    <strong>Crit Damage: </strong>Determina o multiplicador de dano base da arma. Ex (Uma arma que causa 2d6 de dano base com multiplicador de 3 vai causar 6d6, quaisquer bônus de dano como Divine Smite ou Sneak Attack são multiplicados de maneira normal).<br /><br />
                    <strong>Strength: </strong>O usuário precisa ter uma quantidade de força especificada entre (). Caso contrário não consegue usar a arma efetivamente, tendo desvantagem em ataques e sem adicionar seu modificador de atributo em rolagens de dano.<br /><br />
                    <strong>Misfire: </strong>Caso o usuário role um ataque com o valor especificado no misfire ou menor, o ataque é tratado como falha automática e a arma trava precisando gastar uma ação para fazer um teste e destreza (DC:10) para destravá-la, num falho a arma precisa de pelo menos 1 minuto com Tinker’s tools para ser consertada (DC:10).<br /><br />
                    <strong>Spread: </strong>Atirar no alcance padrão da arma pode acertar duas criaturas que estejam 5ft próximas uma da outra, rolando individualmente um ataque para cada.<br /><br />
                    <strong>Rapid Fire: </strong>Pode usar a ação bônus para realizar uma ação de ataque com a arma, sem adicionar à proficiência para o acerto.<br /><br />
                    <strong>Braced: </strong>Tem que usar a ação bônus para montar a arma no chão ou superfície sólida antes de atirar com ela (não requer ação para remover), caso contrário possui desvantagem em ataques e não adiciona seu modificador de atributo em rolagens de dano.
                </p>
                <h2>Espécies</h2>
                <p>
                    As espécies e raças que os jogadores podem escolher para seus personagens não sofreram tantas alterações. O principal que mudou é que agora cada espécie fornece um bônus inicial de HP e SP aos personagens. Sobre atributos, creio que eles caracterizam a espécie, porém resolvi dar mais flexibilidade para diferentes builds. (Ex: anões continuam tendo +2 de constituição, mas agora eles não recebem +1 de força, mas sim +1 para qualquer atributo diferente de constituição).
                </p>
                <h2>Sistema de SP</h2>
                <p>
                    Com a adição de habilidade marciais, resolvi criar um único recurso compartilhado entre todas as classes, que é o SP.  A ideia do SP é substituir Spells Slots, Pontos de Ki e outros recursos similares para se tornar algo unificado e fácil de trackear.
                    Cada personagem vai ter seu SP máximo e dados de SP, determinado pela classe. Um mago possui 1d12 de SP enquanto um bárbaro possui 1d6, a ideia é que a soma do tamanho do dado de vida e do sp seja 18 total.
                    Personagens recebem SP máximo igual a média do dado de SP sem adicionar nenhum modificador.<br /><br />
                    Com isso eu posso criar itens, magias e efeitos que trabalham em torno do SP como poções de mana ou magias que drenam SP. Além disso, o multiclasse se torna mais fácil. Este sistema levou como base a própria regra variante Spell Points.
                </p>
            </div>
        </div>
    )
}

export default RulesPage;