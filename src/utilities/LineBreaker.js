import React from 'react';

// Função para processar as quebras de linha
// split('\n') divide a string text em um array de strings
// line representa cada linha desse array, o frangment renderiza cada linha e agrega 2 br para fazer a quebra
const LineBreaker = (text) => {
    if (text.includes('\n')) {
        return text.split('\n').map((line, index) => (
            <React.Fragment key={index}>
                {line}
                <br />
                <br />
            </React.Fragment>
        ));
    }
    else {
        return text;
    }
};


export default LineBreaker;