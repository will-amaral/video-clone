import React from 'react';
import {
    Field,
    Control,
    Input
} from 'bloomer';

const SearchBar = props => {
    return (
        <Field>
            <Control>
                <Input
                    value={props.value}
                    onChange={props.handleChange}
                    style={{ marginBottom: 20  }}
                    placeholder="Pesquisar"
                />
            </Control>
        </Field>
    );
};

export default SearchBar;