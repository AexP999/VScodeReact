import React from 'react';
import {
  SMALLURL,
  LARGEURL
} from '../constants';

export const Header = ({ fetchUrl }) => {
  
  return (
    <div>
      <button onClick={ () => fetchUrl(SMALLURL) } className='btn btn-primary btn1'>get small data</button>
      <button onClick={ () => fetchUrl(LARGEURL) } className='btn btn-success btn1'>get large data</button>

    </div>
  );
};
