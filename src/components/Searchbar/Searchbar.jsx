import React, { useState } from 'react';

import { BiSearchAlt2 } from 'react-icons/bi';

import {
  SearchBox,
  SearchForm,
  SearchInput,
  SearchBtn,
} from './SearchbarStyle';

const Searchbar = ({ handerSubmit }) => {
  const [query, setQuery] = useState('');
 

  const handleNameChange = event => {
    setQuery(event.currentTarget.value.toLowerCase());
  
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (query.trim() === '') {
      return;
    }
    handerSubmit(query);

    setQuery('');

   
  };

  return (
    <SearchBox>
      <SearchForm onSubmit={handleSubmit}>
        <SearchBtn type="submit">
          <BiSearchAlt2 />
        </SearchBtn>

        <SearchInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleNameChange}
        />
      </SearchForm>
    </SearchBox>
  );
};
export default Searchbar;
