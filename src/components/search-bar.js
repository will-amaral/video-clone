import React, { useState } from 'react';
import {
    Field,
    Control,
    Input
} from 'bloomer';

function SearchBar(props){
    const [text, setText] = useState('');
    let timeout = null;

    function onChange(event) {
        setText(event.target.value);
        props.onSearch(text);
    }

    return (
        <Field>
            <Control>
                <Input
                    value={text}
                    onChange={onChange}
                    style={{ marginBottom: 20  }}
                    placeholder="Pesquisar"
                />
            </Control>
        </Field>
    );
};

export default SearchBar;