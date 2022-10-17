import React from "react";
import {SCSearch, SInput, SInputField} from "./styles";
import SearchIcon from "../../../assets/icons/SearchIcon";

const Search = ({label, name, value, onChange}) => {
    return (
        <SInput>
            <SCSearch>
                <SearchIcon />
            </SCSearch>

            <SInputField
                type="text"
                name={name}
                placeholder="&nbsp;"
                value={value}
                onChange={onChange}
            />
            <label htmlFor={name}>{label}</label>

        </SInput>
    );
};

export default Search;