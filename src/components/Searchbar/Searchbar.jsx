import React, { useState } from 'react';
import css from './Searchbar.module.css';

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const whenSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      return;
    }

    onSubmit(query);
    setQuery('');
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={whenSubmit}>
        <button type="submit" className={css.submitBtn}>
          Search
        </button>
        <input
          className={css.formInput}
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          required
        />
      </form>
    </header>
  );
};

export default Searchbar;
