// Para a nossa searchbar, além do react, importamos 
// o objeto useState que nos permite criar variáveis de 
// estado em componentes função. Variáveis de estado nativas
// só são possíveis em componentes classe. 
import React, { useState } from 'react';
import {
    Field,
    Control,
    Input
} from 'bloomer';

// Na definição da função, já "pegamos" o props onSearch como variável
function SearchBar({ onSearch }){
    // A criação de variáveis de estado com 
    // useState nos devolve duas variáveis:
    // o estado propriamente dito, e uma função para alterá-lo.
    const [text, setText] = useState('');

    // a função onChange vai mapear o valor do 
    // input e realizar uma nova busca a cada mudança
    function handleChange(event) {
        setText(event.target.value);
        onSearch(text);
    }

    // No input, o valor é o definido no estado,
    // o atributo onChange é específico do HTML. 
    // Para esse atributo passamos a nossa função.
    // Adicionamos estilos adicionais para melhorar a visualização da barra. 
    return (
        <Field>
            <Control>
                <Input
                    value={text}
                    onChange={handleChange}
                    style={{ marginBottom: 20  }}
                    placeholder="Pesquisar"
                />
            </Control>
        </Field>
    );
};

export default SearchBar;