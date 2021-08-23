import React, { useState } from 'react';

export const Search = ({ onSearch }) => {
  const [ searchRqst, setSearchRqst ] = useState('');

  const searchRqstHandler = (e) => {
    setSearchRqst(e.target.value);
  };


  console.log('Search  render ');
  return (

    <div>

      <div className="input-group mb-3 ">
        <button className="btn btn-outline-secondary"
          type="button"
          id="button-addon1"
          onClick={ () => onSearch(searchRqst) }
        >Search</button>
        <input
          className="form-control"
          aria-describedby="button-addon1"
          onChange={ searchRqstHandler }
          value={ searchRqst } />
      </div>

    </div>

  );
};
